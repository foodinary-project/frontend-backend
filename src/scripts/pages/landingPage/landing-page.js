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
            <div class="nav-item active"><a href="/">Home</a></div>
            <div class="nav-item"><a href="#/recipe">Recipe</a></div>
            <div class="nav-item"><a href="#/cek-resep">Check Recipe</a></div>
            <div class="nav-item"><a href="#/about">About</a></div>
        </div>
        <div class="nav-buttons">
            <a href="#/login" class="btn-outline">Login</a>
            <a href="#/register" class="btn-primary">Sign Up</a>
        </div>
    </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-container">
            <div class="hero-content animate-fadeInUp">
                <h1 class="hero-title">
                    <span class="text-primary">Indonesian</span><br>
                    <span class="text-dark">Traditional Culinary</span><br>
                </h1>
                <p class="hero-description">
                    Simply snap a photo of any dish, and we'll guide you to recreate it at home with our curated recipes. Embark on a culinary journey through Indonesia's rich flavors! Click the button below and start cooking authentic Indonesian dishes in your own kitchen.
                </p>
                <a href="#/cek-resep" class="hero-button">
                    Check Recipe
                </a>
            </div>
            <div class="hero-images">
                <div class="overlay"></div>
                <img src="images/landing-page/kuliner-indonesia.jpg" alt="Rawon" class="food-image">
            </div>
        </div>
    </section>

    <!-- Popular Cuisine Section -->
    <section class="cuisine-section">
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-title">Popular Indonesian Cuisine</h2>                
            </div>

            <div class="cuisine-grid">
                <div class="cuisine-card">
                    <img src="images/landing-page/rendang.jpeg" alt="Rendang" class="cuisine-image">
                    <div class="cuisine-info">
                        <h3 class="cuisine-name">Rendang</h3>
                        <p class="cuisine-description">
                            Rendang is a beef dish rich in spicy and herbal flavors and one of the most famous representatives of Indonesian cuisine.
                        </p>
                    </div>
                </div>
                
                <div class="cuisine-card">
                    <img src="images/landing-page/nasi-goreng.jpg" alt="Nasi Goreng" class="cuisine-image">
                    <div class="cuisine-info">
                        <h3 class="cuisine-name">Nasi Goreng</h3>
                        <p class="cuisine-description">
                            Nasi goreng is a fried rice dish cooked with Indonesian spices and seasonings, often served with egg, chicken, or seafood. It is considered Indonesia's national dish.
                        </p>
                    </div>
                </div>
                
                <div class="cuisine-card">
                    <img src="images/landing-page/bakso.jpeg" alt="Bakso" class="cuisine-image">
                    <div class="cuisine-info">
                        <h3 class="cuisine-name">Bakso</h3>
                        <p class="cuisine-description">
                            Bakso is a traditional Indonesian dish consisting of chewy meatballs, typically made from beef and served with hot broth and noodles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="see-more">
            <a href="/#/popular-food" class="see-more-link">See More</a>
        </div>
    </section>

    <!-- Dietary Preferences Section -->
    <section class="dietary-section">
        <div class="section-container-2">
            <h2 class="dietary-title-lp">Preferences</h2>
            <div class="dietary-divider"></div>
            
            <div class="tab-wrapper">
                <div class="tab active">Vegetarian</div>
                <div class="tab">Vegan</div>
                <div class="tab">Gluten-Free</div>
                <div class="tab">Halal</div>
            </div>
            
            <div style="position: relative;">
                <div class="dietary-grid" id="dietary-carousel">
                    <div class="dietary-card">
                        <img src="images/landing-page/sate.png" alt="Sate" class="dietary-image">
                        <h3 class="dietary-name">Sate Madura</h3>
                    </div>
                    
                    <div class="dietary-card">
                        <img src="images/landing-page/gado-gado.jpg" alt="Gado-Gado" class="dietary-image">
                        <h3 class="dietary-name">Gado-Gado</h3>
                    </div>
                    
                    <div class="dietary-card">
                        <img src="images/landing-page/soto-lamongan.jpeg" alt="Soto Lamongan" class="dietary-image">
                        <h3 class="dietary-name">Soto Lamongan</h3>
                    </div>
                </div>
                <button id="dietary-next-btn">
                    &gt;
                </button>
            </div>
        </div>        
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
        <div class="footer-main">
            <div class="footer-brand">              
              <h2>Foodinary - Discover the taste of Indonesia</h2>                        
            </div><br><br><br>
            <div class="footer-social">
              <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
            </div>
          </div>

          <div class="footer-menu">
            <div class="footer-column">
              <h4>Popular Recipe</h4>
              <div class="footer-links">                
                <a href="/#/tempe-mendoan" class="footer-link">Rendang Daging <span class="badge-hot">Hot</span></a>
                <a href="/#/rawon" class="footer-link">Nasi Goreng</a>
                <a href="/#/sate" class="footer-link">Bakso</a>
              </div>
            </div>
            
            <div class="footer-column">
              <h4>Challenge</h4>
              <div class="footer-links">                
                <a href="/#/90-days-cooking" class="footer-link">90 Days of Cooking <span class="badge-hot">New</span></a>                
              </div>
            </div>

            <div class="footer-column">
              <h4>Contact</h4>
              <div class="footer-links">
                <a href="mailto:foodinary.project@gmail.com" class="footer-link">foodinary.project@gmail.com</a>                
                <p class="footer-address">Indonesia</p>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2025 Foodinary. All rights reserved.</p>
            <div class="footer-legal">
              <a href="/#/privacy" class="legal-link">Privacy Policy</a>
              <a href="/#/terms" class="legal-link">Terms of Service</a>
              <a href="/#/about" class="legal-link">About Foodinary</a>
            </div>
          </div>
        </div>
      </footer>
`;
  }

  async afterRender() {
    // Dibiarkan kosong karena belum ada interaksi JS
  }
}
