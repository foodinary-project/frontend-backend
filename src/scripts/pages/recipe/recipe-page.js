export default class LandingPage {
  async render() {
    // Gunakan backtick (`) untuk template literal dan tambahkan return
    return `    

 <!-- Navigation -->
    <nav class="navigation">
    <div class="nav-container">
        <div class="logo">
            <a href="/">
                <img src="/images/logo.png" alt="Foodinary Logo">
            </a>
        </div>
        <div class="nav-menu">
            <div class="nav-item"><a href="/">Home</a></div>
            <div class="nav-item active"><a href="#/recipe">Recipe</a></div>
            <div class="nav-item"><a href="#/about">About</a></div>
        </div>
        <div class="nav-buttons">
            <a href="#/login" class="btn-outline">Login</a>
            <a href="#/register" class="btn-primary">Sign Up</a>
        </div>
    </div>
    </nav>

    <div class="recipe-finder-container">
        <!-- Search Bar -->
        <div class="recipe-finder-search-wrapper">
            <div class="recipe-finder-search-box">
                <input type="text" class="recipe-finder-search-input" placeholder="Masukkan nama makanan" value="">
                <button class="recipe-finder-search-btn" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Upload Link -->
        <div class="recipe-finder-upload-link">
            <a href="/#/cek-resep">Or direct to this page to upload your image</a>
        </div>

        <!-- Filter Tabs -->
        <div class="recipe-finder-filter-tabs">
            <div class="recipe-finder-filter-tab active">All</div>
            <div class="recipe-finder-filter-tab">Sweet</div>
            <div class="recipe-finder-filter-tab">Spicy</div>
            <div class="recipe-finder-filter-tab">Savory</div>
            <div class="recipe-finder-filter-tab">Bitter</div>
        </div>

        <!-- Main Content -->
        <div class="recipe-finder-main-content">
            <!-- Sidebar -->
            <div class="recipe-finder-sidebar">
                <div class="recipe-finder-filter-section">
                    <div class="recipe-finder-filter-option">
                        <input type="checkbox" id="vegan">
                        <label for="vegan">Vegan</label>
                    </div>
                    <div class="recipe-finder-filter-option">
                        <input type="checkbox" id="vegetarian">
                        <label for="vegetarian">Vegetarian</label>
                    </div>
                    <div class="recipe-finder-filter-option">
                        <input type="checkbox" id="gluten-free">
                        <label for="gluten-free">Gluten-Free</label>
                    </div>
                    <div class="recipe-finder-filter-option">
                        <input type="checkbox" id="dairy-free">
                        <label for="dairy-free">Dairy-Free</label>
                    </div>
                </div>
            </div>

            <!-- Recipe Grid -->
            <div class="recipe-finder-recipe-grid">
                <div class="recipe-finder-recipes">
                    <!-- Recipe Cards -->
                    <div class="recipe-finder-recipe-card">
                        <img src="/images/sate.png" alt="Rendang" class="recipe-finder-recipe-image">
                        <div class="recipe-finder-recipe-content">
                            <h3 class="recipe-finder-recipe-title">Rendang</h3>
                            <p class="recipe-finder-recipe-description">Slow-cooked beef in rich coconut milk and aromatic spices, delivering a deep, savory, and...</p>
                            <div class="recipe-finder-recipe-actions">
                                <button class="recipe-finder-recipe-btn">Recook now</button>
                                <button class="recipe-finder-favorite-btn">
                                    <svg class="recipe-finder-heart-icon" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="recipe-finder-recipe-card">
                        <img src="/images/sate.png" alt="Rendang" class="recipe-finder-recipe-image">
                        <div class="recipe-finder-recipe-content">
                            <h3 class="recipe-finder-recipe-title">Rendang</h3>
                            <p class="recipe-finder-recipe-description">Slow-cooked beef in rich coconut milk and aromatic spices, delivering a deep, savory, and...</p>
                            <div class="recipe-finder-recipe-actions">
                                <button class="recipe-finder-recipe-btn">Recook now</button>
                                <button class="recipe-finder-favorite-btn">
                                    <svg class="recipe-finder-heart-icon" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="recipe-finder-recipe-card">
                        <img src="/images/sate.png" alt="Rendang" class="recipe-finder-recipe-image">
                        <div class="recipe-finder-recipe-content">
                            <h3 class="recipe-finder-recipe-title">Rendang</h3>
                            <p class="recipe-finder-recipe-description">Slow-cooked beef in rich coconut milk and aromatic spices, delivering a deep, savory, and...</p>
                            <div class="recipe-finder-recipe-actions">
                                <button class="recipe-finder-recipe-btn">Recook now</button>
                                <button class="recipe-finder-favorite-btn">
                                    <svg class="recipe-finder-heart-icon" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="recipe-finder-recipe-card">
                        <img src="/images/sate.png" alt="Rendang" class="recipe-finder-recipe-image">
                        <div class="recipe-finder-recipe-content">
                            <h3 class="recipe-finder-recipe-title">Rendang</h3>
                            <p class="recipe-finder-recipe-description">Slow-cooked beef in rich coconut milk and aromatic spices, delivering a deep, savory, and...</p>
                            <div class="recipe-finder-recipe-actions">
                                <button class="recipe-finder-recipe-btn">Recook now</button>
                                <button class="recipe-finder-favorite-btn">
                                    <svg class="recipe-finder-heart-icon" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="recipe-finder-recipe-card">
                        <img src="/images/sate.png" alt="Rendang" class="recipe-finder-recipe-image">
                        <div class="recipe-finder-recipe-content">
                            <h3 class="recipe-finder-recipe-title">Rendang</h3>
                            <p class="recipe-finder-recipe-description">Slow-cooked beef in rich coconut milk and aromatic spices, delivering a deep, savory, and...</p>
                            <div class="recipe-finder-recipe-actions">
                                <button class="recipe-finder-recipe-btn">Recook now</button>
                                <button class="recipe-finder-favorite-btn">
                                    <svg class="recipe-finder-heart-icon" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="recipe-finder-recipe-card">
                        <img src="/images/sate.png" alt="Rendang" class="recipe-finder-recipe-image">
                        <div class="recipe-finder-recipe-content">
                            <h3 class="recipe-finder-recipe-title">Rendang</h3>
                            <p class="recipe-finder-recipe-description">Slow-cooked beef in rich coconut milk and aromatic spices, delivering a deep, savory, and...</p>
                            <div class="recipe-finder-recipe-actions">
                                <button class="recipe-finder-recipe-btn">Recook now</button>
                                <button class="recipe-finder-favorite-btn">
                                    <svg class="recipe-finder-heart-icon" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="recipe-finder-recipe-card">
                        <img src="/images/sate.png" alt="Rendang" class="recipe-finder-recipe-image">
                        <div class="recipe-finder-recipe-content">
                            <h3 class="recipe-finder-recipe-title">Rendang</h3>
                            <p class="recipe-finder-recipe-description">Slow-cooked beef in rich coconut milk and aromatic spices, delivering a deep, savory, and...</p>
                            <div class="recipe-finder-recipe-actions">
                                <button class="recipe-finder-recipe-btn">Recook now</button>
                                <button class="recipe-finder-favorite-btn">
                                    <svg class="recipe-finder-heart-icon" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="recipe-finder-recipe-card">
                        <img src="/images/sate.png" alt="Rendang" class="recipe-finder-recipe-image">
                        <div class="recipe-finder-recipe-content">
                            <h3 class="recipe-finder-recipe-title">Rendang</h3>
                            <p class="recipe-finder-recipe-description">Slow-cooked beef in rich coconut milk and aromatic spices, delivering a deep, savory, and...</p>
                            <div class="recipe-finder-recipe-actions">
                                <button class="recipe-finder-recipe-btn">Recook now</button>
                                <button class="recipe-finder-favorite-btn">
                                    <svg class="recipe-finder-heart-icon" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="recipe-finder-recipe-card">
                        <img src="/images/sate.png" alt="Rendang" class="recipe-finder-recipe-image">
                        <div class="recipe-finder-recipe-content">
                            <h3 class="recipe-finder-recipe-title">Rendang</h3>
                            <p class="recipe-finder-recipe-description">Slow-cooked beef in rich coconut milk and aromatic spices, delivering a deep, savory, and...</p>
                            <div class="recipe-finder-recipe-actions">
                                <button class="recipe-finder-recipe-btn">Recook now</button>
                                <button class="recipe-finder-favorite-btn">
                                    <svg class="recipe-finder-heart-icon" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pagination -->
                <div class="recipe-finder-pagination">
                    <button class="recipe-finder-page-btn active">1</button>
                    <button class="recipe-finder-page-btn">2</button>
                    <button class="recipe-finder-page-btn">3</button>
                    <button class="recipe-finder-page-btn">4</button>
                    <span>...</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div>
                <div class="footer-brand">Foodinary</div>                
            </div>
            <div class="footer-menu">
                <div class="footer-column">
                    <h4>Cuisine</h4>
                    <div class="footer-links">
                        <div class="footer-link">Indonesian Cuisine</div>
                        <div class="footer-link">Tempe Mendoan</div>
                        <div class="footer-link">Rawon</div>
                        <div class="footer-link">Sate</div>
                    </div>
                </div>
                
                <div class="footer-column">
                    <h4>Challenge</h4>
                    <div class="footer-links">
                        <div class="footer-link">Challenge</div>
                        <div class="footer-link">90 Days of Cooking</div>
                        <div class="footer-link">Page</div>
                    </div>
                </div>
            </div>
            
            <div></div>
        </div>
    </footer>
  `;
  }
}
