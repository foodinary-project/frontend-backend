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
                <li class="db-nav-item">
                <a href="#/history">
                    <i class="fas fa-history db-nav-icon"></i>
                    <span>History</span>
                </a>
                </li>
                <li class="db-nav-item db-active">
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
                <a href="#">
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
                <h2 class="db-dashboard-title">Favorites</h2>
                <Welcome class="db-dashboard-subtitle">Welcome to your Favorites pages!</p>
            </div>
            <div class="db-header-right">
                <div class="db-user-greeting">
                Hello, Foodinary
                </div>
                <img src="images/f.jpeg" alt="User Avatar" class="db-user-avatar">
            </div>
            </header>

            <section class="db-dashboard-overview">
                <div class="db-overview-card">
                    <img src="images/food1.png" alt="Food Image" class="db-overview-image">
                    <div class="db-overview-content">
                        <p class="db-overview-title">Batagor</p>
                        <p class="db-overview-details">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        </p>
                        <button class="db-delete-button" title="Delete History">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="db-overview-card">
                    <img src="images/sate.png" alt="Food Image" class="db-overview-image">
                    <div class="db-overview-content">
                        <p class="db-overview-title">Batagor</p>
                        <p class="db-overview-details">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        </p>
                        <button class="db-delete-button" title="Delete History">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="db-overview-card">
                    <img src="images/food1.png" alt="Food Image" class="db-overview-image">
                    <div class="db-overview-content">
                        <p class="db-overview-title">Batagor</p>
                        <p class="db-overview-details">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        </p>
                        <button class="db-delete-button" title="Delete History">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="db-overview-card">
                    <img src="images/food1.png" alt="Food Image" class="db-overview-image">
                    <div class="db-overview-content">
                        <p class="db-overview-title">Batagor</p>
                        <p class="db-overview-details">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        </p>
                        <button class="db-delete-button" title="Delete History">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="db-overview-card">
                    <img src="images/sate.png" alt="Food Image" class="db-overview-image">
                    <div class="db-overview-content">
                        <p class="db-overview-title">Batagor</p>
                        <p class="db-overview-details">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        </p>
                        <button class="db-delete-button" title="Delete History">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="db-overview-card">
                    <img src="images/food1.png" alt="Food Image" class="db-overview-image">
                    <div class="db-overview-content">
                        <p class="db-overview-title">Batagor</p>
                        <p class="db-overview-details">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        </p>
                        <button class="db-delete-button" title="Delete History">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="db-overview-card">
                    <img src="images/food1.png" alt="Food Image" class="db-overview-image">
                    <div class="db-overview-content">
                        <p class="db-overview-title">Batagor</p>
                        <p class="db-overview-details">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        </p>
                        <button class="db-delete-button" title="Delete History">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="db-overview-card">
                    <img src="images/sate.png" alt="Food Image" class="db-overview-image">
                    <div class="db-overview-content">
                        <p class="db-overview-title">Batagor</p>
                        <p class="db-overview-details">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        </p>
                        <button class="db-delete-button" title="Delete History">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="db-overview-card">
                    <img src="images/food1.png" alt="Food Image" class="db-overview-image">
                    <div class="db-overview-content">
                        <p class="db-overview-title">Batagor</p>
                        <p class="db-overview-details">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        </p>
                        <button class="db-delete-button" title="Delete History">
                            View Details
                        </button>
                    </div>
                </div>
            </section>
        </main>
        </div>
        `;
    }
}