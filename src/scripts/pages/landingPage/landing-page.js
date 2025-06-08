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
            <a href="/#/recipe" class="see-more-link">See More</a>
        </div>
    </section>    

      <section class="foodinary-experience">
    <div class="foodinary-left">
      <h2 class="foodinary-subtitle">The Foodinary Experience</h2>
      <h1 class="foodinary-title">
        Explore Indonesian food<br />
        learning experience in<br />
        your kitchen
      </h1>
      <p class="foodinary-description">
        Get 30+ of recipes from the best Indonesian chefs, with new recipes added every week. Whether you're a beginner or an experienced cook, Foodinary has something for everyone. Join our community of food lovers and start your culinary journey today!
      </p>
    </div>

    <div class="foodinary-right">
      <div class="foodinary-feature">
        <div class="foodinary-icon">📸 </div>
        <div class="foodinary-text">Snap it. Know it. Cook it. <span class="badge-hot">Hot</span></div>
      </div>
      <div class="foodinary-feature">
        <div class="foodinary-icon">📅</div>
        <div class="foodinary-text">New recipes every week</div>
      </div>
      <div class="foodinary-feature">
        <div class="foodinary-icon">📹</div>
        <div class="foodinary-text">More than 30+ Indonesian recipes</div>
      </div>
      <div class="foodinary-feature foodinary-soon">
        <div class="foodinary-icon">📕</div>
        <div class="foodinary-text">Downloadable PDF Recipe Books <span class="foodinary-badge">Coming Soon</span></div>
      </div>
      <div class="foodinary-feature foodinary-soon">
        <div class="foodinary-icon">🍳</div>
        <div class="foodinary-text">Learn with certified chefs <span class="foodinary-badge">Coming Soon</span></div>
      </div>
      <div class="foodinary-feature foodinary-soon">
        <div class="foodinary-icon">👩‍🎓</div>
        <div class="foodinary-text">Join our passionate community <span class="foodinary-badge">Coming Soon</span></div>
      </div>
      <div class="foodinary-feature foodinary-soon">
  <div class="foodinary-icon">🤖</div>
  <div class="foodinary-text">Chat with Nary – your culinary assistant <span class="foodinary-badge">Coming Soon</span></div>
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
            <a href="https://github.com/foodinary-project" class="social-link"><i class="fab fa-github"></i></a>          
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
