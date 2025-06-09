import { getLogout, checkAuthenticatedRoute } from '../../utils/auth';
import { getMyUserInfo } from '../../data/api';
import HistoryPresenter from './history-presenter.js';
import Swal from 'sweetalert2';

export default class HistoryPage {
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
              <li class="db-nav-item db-active">
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
  <a href="#/cek-resep">
    <i class="fas fa-chart-line db-nav-icon"></i>
    <span>Analyze</span>
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
              <h2 class="db-dashboard-title">History</h2>
              <p class="db-dashboard-subtitle" id="dashboard-subtitle">
                Welcome to your Histories page!
              </p>
            </div>
            <div class="db-header-right">
              <div class="db-user-greeting" id="user-greeting"></div>
              <img src="images/users.jpeg" alt="User Avatar" class="db-user-avatar" id="user-avatar" role="button" aria-label="Toggle sidebar">
            </div>
          </header>
          <section class="db-dashboard-overview" id="history-section"></section>
        </main>
      </div>
    `;
  }

  async afterRender() {
    if (!checkAuthenticatedRoute(this)) return;

    // Logout handler
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

    // Fetch and display user info
    try {
      const response = await getMyUserInfo();
      if (response.ok && response.user && response.user.name) {
        const name = response.user.name;
        const greeting = document.getElementById('user-greeting');
        const avatar = document.getElementById('user-avatar');
        if (greeting) greeting.textContent = `${name}`;
        if (avatar && response.user.profilePictureUrl) avatar.src = response.user.profilePictureUrl;
      } else {
        console.warn('Failed to fetch user data:', response.message || response);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }

    // Sidebar toggle handler
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

    // Render history
    const historySection = document.getElementById('history-section');
    const renderHistory = async () => {
      try {
        const entries = await HistoryPresenter.getHistoryEntries();
        if (entries.length === 0) {
          historySection.innerHTML = '<p class="no-history">No history available.</p>';
          return;
        }

        historySection.innerHTML = entries.map(entry => `
          <div class="db-overview-card">
            <img src="${entry.imageUrl}" alt="${entry.foodName}" class="db-overview-image">
            <div class="db-overview-content">
              <p class="db-overview-title">Prediksi: ${entry.foodName}</p>
              <p class="db-overview-details">
                <strong>Resep:</strong><br>
                ${entry.formattedIngredients.map(item => item).join('<br>')}
              </p>
              <button class="db-delete-button" data-id="${entry.id}" title="Delete History">
                <i class="fas fa-trash db-delete-icon"></i>
              </button>
            </div>
          </div>
        `).join('');

        // Add delete button listeners
        const deleteButtons = document.querySelectorAll('.db-delete-button');
        deleteButtons.forEach(button => {
          button.addEventListener('click', async () => {
            const id = button.getAttribute('data-id');

            const result = await Swal.fire({
              title: 'Are you sure?',
              text: 'You are about to delete this history entry.',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#3085d6',
              confirmButtonText: 'Yes, delete it',
              cancelButtonText: 'Cancel',
            });

            if (result.isConfirmed) {
              try {
                await HistoryPresenter.deleteHistoryEntry(id);
                await renderHistory();
                Swal.fire({
                  title: 'Deleted',
                  text: 'History entry has been successfully deleted.',
                  icon: 'success',
                  timer: 1500,
                  showConfirmButton: false,
                });
              } catch (error) {
                Swal.fire({
                  title: 'Error',
                  text: 'Failed to delete history entry.',
                  icon: 'error',
                  timer: 1500,
                  showConfirmButton: false,
                });
              }
            }
          });
        });
      } catch (error) {
        historySection.innerHTML = `<p class="no-history">Error loading history: ${error.message}</p>`;
      }
    };

    await renderHistory();
  }
}