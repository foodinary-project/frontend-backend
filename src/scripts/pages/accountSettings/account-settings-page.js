import { checkAuthenticatedRoute, getLogout } from '../../utils/auth';
import { getMyUserInfo } from '../../data/api';
import AccountSettingsPresenter from './account-settings-presenter.js';
import Swal from 'sweetalert2';

export default class AccountSettingsPage {
  async render() {
    return `
      <div class="db-container">
        <aside class="db-sidebar">
          <div class="db-sidebar-logo-container">
            <h1 class="db-logo-main">Foodinary.</h1>
            <p class="db-logo-tagline">Discover Local Flavors</p>
          </div>
          <nav class="db-sidebar-nav">
            <ul>
              <li class="db-nav-item">
                <a href="#/dashboard">
                  <i class="fas fa-home db-nav-icon"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li class="db-nav-item">
                <a href="#/history">
                  <i class="fas fa-history db-nav-icon"></i>
                  <span>History</span>
                </a>
              </li>
              <li class="db-nav-item">
                <a href="#/favorite">
                  <i class="fas fa-heart db-nav-icon"></i>
                  <span>Favorites</span>
                </a>
              </li>
              <li class="db-nav-item db-active">
                <a href="#/account-settings">
                  <i class="fas fa-cog db-nav-icon"></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li class="db-nav-item">
                <a href="#" id="logout-btn">
                  <i class="fas fa-sign-out-alt db-nav-icon"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="db-sidebar-footer">
            <p class="db-footer-text">Foodinary</p>
            <p class="db-footer-text">© 2025 All Rights Reserved</p>
            <p class="db-footer-text">Made with <span class="db-heart-icon">♥</span> by Foodinary</p>
          </div>
        </aside>

        <main class="db-main-content">
          <header class="db-main-header">
            <div class="db-header-left">
              <h2 class="db-dashboard-title">Account Settings</h2>
              <p class="db-dashboard-subtitle" id="dashboard-subtitle">
                Welcome to your Account Settings page!
              </p>
            </div>
            <div class="db-header-right">
              <div class="db-user-greeting" id="user-greeting"></div>
              <img src="images/users.jpeg" alt="User Avatar" class="db-user-avatar" id="user-avatar" role="button" aria-label="Toggle sidebar">
            </div>
          </header>

          <section class="db-dashboard-overview">
            <form class="account-settings-form" id="account-settings-form">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Input your new email" required>
              </div>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Input your name" required>
              </div>
              <hr />
              <div class="form-group">
                <label for="old-password">Current Password</label>
                <div class="password-wrapper">
                  <input type="password" id="old-password" placeholder="Enter current password" />
                  <i class="fa-solid fa-eye toggle-password" data-toggle="old-password"></i>
                </div>
              </div>
              <div class="form-group">
                <label for="password">New Password</label>
                <div class="password-wrapper">
                  <input type="password" id="password" placeholder="Password" />
                  <i class="fa-solid fa-eye toggle-password" data-toggle="password"></i>
                </div>
              </div>
              <div class="form-group">
                <label for="confirm-password">Confirm New Password</label>
                <div class="password-wrapper">
                  <input type="password" id="confirm-password" placeholder="Re-enter new password" />
                  <i class="fa-solid fa-eye toggle-password" data-toggle="confirm-password"></i>
                </div>
              </div>
              <button type="submit" class="update-btn">Update</button>
            </form>
          </section>
        </main>
      </div>
    `;
  }

  async afterRender() {
    // Toggle password visibility for all password fields
    document.querySelectorAll('.toggle-password').forEach((icon) => {
      icon.addEventListener('click', () => {
        const inputId = icon.getAttribute('data-toggle');
        const input = document.getElementById(inputId);
        const isPassword = input.type === 'password';

        input.type = isPassword ? 'text' : 'password';
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
      });
    });

    if (!checkAuthenticatedRoute(this)) return;

    // Logout Handler
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async (event) => {
        event.preventDefault();

        const result = await Swal.fire({
          title: 'Are you sure?',
          text: 'You will be logged out from Foodinary.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, logout',
          cancelButtonText: 'Cancel',
        });

        if (result.isConfirmed) {
          getLogout();
          Swal.fire({
            title: 'Logged Out',
            text: 'You have been successfully logged out.',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
          setTimeout(() => {
            location.hash = '/';
          }, 1500);
        }
      });
    }

    let currentUser = null;
    try {
      const response = await getMyUserInfo();
      if (response.ok && response.user) {
        currentUser = response.user;
        await AccountSettingsPresenter.loadUserData();
        const { name, email } = currentUser;

        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('user-greeting').textContent = `${name}`;
        const avatar = document.getElementById('user-avatar');
        if (avatar && response.user.profilePictureUrl) avatar.src = response.user.profilePictureUrl;
      }
    } catch (error) {
      console.error('Gagal mengambil data user:', error);
    }

    const form = document.getElementById('account-settings-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const oldPassword = document.getElementById('old-password').value;
        const newPassword = document.getElementById('password').value;
        const confirmNewPassword = document.getElementById('confirm-password').value;

        if ((newPassword || confirmNewPassword) && newPassword !== confirmNewPassword) {
          await Swal.fire({
            title: 'Password Mismatch',
            text: 'New password and confirmation do not match.',
            icon: 'warning',
            confirmButtonText: 'OK',
          });
          return;
        }

        try {
          const result = await AccountSettingsPresenter.submitProfileUpdate({
            name,
            email,
            oldPassword,
            newPassword,
            confirmNewPassword,
          });

          if (result.ok) {
            await Swal.fire({
              title: 'Success!',
              text: 'Profile updated successfully!',
              icon: 'success',
              confirmButtonText: 'OK',
            });
            location.reload();
          } else {
            await Swal.fire({
              title: 'Update Failed',
              text: result.message || 'Unknown error',
              icon: 'error',
              confirmButtonText: 'OK',
            });
          }
        } catch (err) {
          console.error(err);
          await Swal.fire({
            title: 'Error',
            text: 'An error occurred: ' + err.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      });
    }

    // Sidebar Toggle Handler
    const avatar = document.getElementById('user-avatar');
    const sidebar = document.querySelector('.db-sidebar');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const toggleSidebar = () => {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    };

    const closeSidebar = () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    };

    const manageAvatarClick = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      avatar.removeEventListener('click', toggleSidebar);
      overlay.removeEventListener('click', closeSidebar);

      if (isMobile && avatar && sidebar) {
        avatar.style.cursor = 'pointer';
        avatar.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', closeSidebar);
      } else {
        avatar.style.cursor = 'default';
        closeSidebar();
      }
    };

    manageAvatarClick();
    window.addEventListener('resize', manageAvatarClick);
  }
}
