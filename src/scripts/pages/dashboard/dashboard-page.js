import { getLogout, checkAuthenticatedRoute } from '../../utils/auth';
import { getMyUserInfo } from '../../data/api';
import Swal from 'sweetalert2';
import { getAllFavorites } from '../../data/database';

export default class DashboardPage {
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
              <li class="db-nav-item db-active">
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
              <li class="db-nav-item">
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
              <h2 class="db-dashboard-title">Dashboard</h2>
              <p class="db-dashboard-subtitle" id="dashboard-subtitle">
              </p>
            </div>
            <div class="db-header-right">
              <div class="db-user-greeting" id="user-greeting">
              </div>
              <img src="images/users.jpeg" alt="User Avatar" class="db-user-avatar" id="user-avatar" role="button" aria-label="Toggle sidebar">
            </div>
          </header>

          <section class="db-dashboard-overview">
            <div class="db-stats-container">
              <div class="db-stat-card">
                <div class="db-stat-card-icon-wrapper db-icon-history">
                  <i class="fas fa-history"></i>
                </div>
                <div class="db-stat-card-info">
                  <span class="db-stat-value">75</span>
                  <span class="db-stat-label">Total History</span>
                </div>
              </div>
              <div class="db-stat-card">
                <div class="db-stat-card-icon-wrapper db-icon-favorite">
                  <i class="fas fa-heart"></i>
                </div>
                <div class="db-stat-card-info">
                  <span class="db-stat-value" id="total-favorite-count">0</span>
                  <span class="db-stat-label">Total Favorite</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    `;
  }

  async afterRender() {
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

    // Hitung total favorite dari IndexedDB
    try {
      const favorites = await getAllFavorites();
      const countElement = document.getElementById('total-favorite-count');
      if (countElement) {
        countElement.textContent = favorites.length;
      }
    } catch (error) {
      console.error('Gagal mengambil total favorite:', error);
    }


    // Ambil nama user dan foto profil dari API
    try {
      const response = await getMyUserInfo();
      if (response.ok && response.user) {
        const { name, profilePictureUrl } = response.user;

        const greeting = document.getElementById('user-greeting');
        const subtitle = document.getElementById('dashboard-subtitle');
        const avatar = document.getElementById('user-avatar');

        if (greeting) greeting.textContent = `${name}`;
        if (subtitle) subtitle.textContent = `Hi, ${name}. Welcome back to Foodinary!`;
        if (avatar && profilePictureUrl) avatar.src = profilePictureUrl;
      } else {
        console.warn('Gagal mendapatkan data user:', response.message || response);
      }
    } catch (error) {
      console.error('Error mengambil info user:', error);
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

    // Function to manage avatar clickability based on screen size
    const manageAvatarClick = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      // Remove existing listeners to prevent duplicates
      avatar.removeEventListener('click', toggleSidebar);
      overlay.removeEventListener('click', closeSidebar);

      if (isMobile && avatar && sidebar) {
        avatar.style.cursor = 'pointer'; // Ensure cursor indicates clickability
        avatar.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', closeSidebar);
      } else {
        avatar.style.cursor = 'default'; // Non-clickable on desktop
        closeSidebar(); // Ensure sidebar is closed if resizing to desktop
      }
    };

    // Initial check
    manageAvatarClick();

    // Add resize listener to handle screen size changes
    window.addEventListener('resize', manageAvatarClick);
  }
}