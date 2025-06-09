import { checkAuthenticatedRoute } from '../../utils/auth';
import { setupDashboardPresenter } from './dashboard-presenter';

export default class DashboardPage {
  async render() {
    return `
      <div class="db-container">
        <!-- Sidebar -->
        <aside class="db-sidebar">
          <div class="db-sidebar-logo-container">
            <h1 class="db-logo-main">Foodinary.</h1>
            <p class="db-logo-tagline">Discover Local Flavors</p>
          </div>
          <nav class="db-sidebar-nav">
            <ul>
              <li class="db-nav-item db-active"><a href="#/dashboard"><i class="fas fa-home db-nav-icon"></i><span>Dashboard</span></a></li>
              <li class="db-nav-item"><a href="#/history"><i class="fas fa-history db-nav-icon"></i><span>History</span></a></li>
              <li class="db-nav-item"><a href="#/favorite"><i class="fas fa-heart db-nav-icon"></i><span>Favorites</span></a></li>
              <li class="db-nav-item"><a href="#/account-settings"><i class="fas fa-cog db-nav-icon"></i><span>Account Settings</span></a></li>
              <li class="db-nav-item"><a href="#/cek-resep"><i class="fas fa-chart-line db-nav-icon"></i><span>Analyze</span></a></li>
              <li class="db-nav-item"><a href="#" id="logout-btn"><i class="fas fa-sign-out-alt db-nav-icon"></i><span>Logout</span></a></li>
            </ul>
          </nav>
          <div class="db-sidebar-footer">
            <p class="db-footer-text">Foodinary</p>
            <p class="db-footer-text">© 2025 All Rights Reserved</p>
            <p class="db-footer-text">Made with <span class="db-heart-icon">♥</span> by Foodinary</p>
          </div>
        </aside>

        <!-- Main -->
        <main class="db-main-content">
          <header class="db-main-header">
            <div class="db-header-left">
              <h2 class="db-dashboard-title">Dashboard</h2>
              <p class="db-dashboard-subtitle" id="dashboard-subtitle"></p>
            </div>
            <div class="db-header-right">
              <div class="db-user-greeting" id="user-greeting"></div>
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
                  <span class="db-stat-value" id="total-history-count">0</span>
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
    setupDashboardPresenter();
  }
}
