export default class LandingPage {
  async render() {
    // Gunakan backtick (`) untuk template literal dan tambahkan return
    return `    

 <!-- Navigation -->
    <nav class="navigation">
    <div class="nav-container">
        <div class="logo">
            <a href="/">Foodinary</a>  <!-- Tambahkan tag anchor di sini -->
        </div>
        <div class="nav-menu">
            <div class="nav-item active">Home</div>
            <div class="nav-item">Recipe</div>
            <div class="nav-item">About</div>
        </div>
        <div class="nav-buttons">
            <a href="#/login" class="btn-outline">Login</a>
            <a href="#/register" class="btn-primary">Sign Up</a>
        </div>
    </div>
    </nav>

    <!-- Dietary Preferences Section -->
    <section id="popular-food" class="dietary-section">
        <div class="section-container">
            <h2 class="dietary-title">Popular <br> Indonesian Food</h2>
            <p class="dietary-title-desc">Dengan koleksi resep kami yang beragam, kami punya sesuatu untuk <br> memuaskan setiap selera</p>              
            
            <div class="tab-wrapper">
                <div class="tab active">Vegetarian</div>
                <div class="tab">Vegan</div>
                <div class="tab">Gluten-Free</div>
                <div class="tab">Halal</div>
            </div>            
        </div>        
        <div class="detail-page-popular-indonesian-food-from-see-more">
          <div class="recipes-section">
            <div class="recipe-cards-wrapper">
              <!-- First Row -->
              <div class="card-row">
                <div class="card-wrapper">
                  <div class="recipe-card">
                    <img class="image" src="/images/sate.png" />
                    <div class="text-wrapper">
                      <div class="copy">
                        <div class="header">Rendang Daging</div>
                        <div class="paragraph">
                          Slow-cooked beef in rich coconut milk and aromatic spices,
                          delivering a deep, savory, and slightly spicy flavor — a true
                          taste of Minang heritage.
                        </div>
                      </div>
                      <div class="info-wrapper">
                        <div class="button-learn-more">
                          <div class="text">Learn More</div>
                        </div>
                      </div>
                    </div>
                  </div>              
                  <div class="vaadin-pointer"></div>
                </div>
                
                <div class="card-wrapper">
                  <div class="recipe-card">
                    <img class="image" src="/images/sate.png" />
                    <div class="text-wrapper">
                      <div class="copy">
                        <div class="header">Nasi Goreng</div>
                        <div class="paragraph">
                          Indonesia's famous fried rice dish cooked with sweet soy sauce,
                          shallots, garlic, and your choice of meat or seafood, topped with
                          fried egg and krupuk.
                        </div>
                      </div>
                      <div class="info-wrapper">
                        <div class="button-learn-more">
                          <div class="text">Learn More</div>
                        </div>
                      </div>
                    </div>
                  </div>              
                  <div class="vaadin-pointer"></div>
                </div>
                            
                <div class="card-wrapper">
                  <div class="recipe-card">
                    <img class="image" src="/images/sate.png" />
                    <div class="text-wrapper">
                      <div class="copy">
                        <div class="header">Gado-Gado</div>
                        <div class="paragraph">
                          Indonesian salad with blanched vegetables, boiled eggs, tofu,
                          tempeh and lontong, served with rich peanut sauce dressing.
                          A perfect vegetarian option.
                        </div>
                      </div>
                      <div class="info-wrapper">
                        <div class="button-learn-more">
                          <div class="text">Learn More</div>
                        </div>
                      </div>
                    </div>
                  </div>              
                  <div class="vaadin-pointer"></div>
                </div>
                <div class="card-wrapper">
                  <div class="recipe-card">
                    <img class="image" src="/images/sate.png" />
                    <div class="text-wrapper">
                      <div class="copy">
                        <div class="header">Gado-Gado</div>
                        <div class="paragraph">
                          Indonesian salad with blanched vegetables, boiled eggs, tofu,
                          tempeh and lontong, served with rich peanut sauce dressing.
                          A perfect vegetarian option.
                        </div>
                      </div>
                      <div class="info-wrapper">
                        <div class="button-learn-more">
                          <div class="text">Learn More</div>
                        </div>
                      </div>
                    </div>
                  </div>              
                  <div class="vaadin-pointer"></div>
                </div>
                <div class="card-wrapper">
                  <div class="recipe-card">
                    <img class="image" src="/images/sate.png" />
                    <div class="text-wrapper">
                      <div class="copy">
                        <div class="header">Gado-Gado</div>
                        <div class="paragraph">
                          Indonesian salad with blanched vegetables, boiled eggs, tofu,
                          tempeh and lontong, served with rich peanut sauce dressing.
                          A perfect vegetarian option.
                        </div>
                      </div>
                      <div class="info-wrapper">
                        <div class="button-learn-more">
                          <div class="text">Learn More</div>
                        </div>
                      </div>
                    </div>
                  </div>              
                  <div class="vaadin-pointer"></div>
                </div>
                <div class="card-wrapper">
                  <div class="recipe-card">
                    <img class="image" src="/images/sate.png" />
                    <div class="text-wrapper">
                      <div class="copy">
                        <div class="header">Gado-Gado</div>
                        <div class="paragraph">
                          Indonesian salad with blanched vegetables, boiled eggs, tofu,
                          tempeh and lontong, served with rich peanut sauce dressing.
                          A perfect vegetarian option.
                        </div>
                      </div>
                      <div class="info-wrapper">
                        <div class="button-learn-more">
                          <div class="text">Learn More</div>
                        </div>
                      </div>
                    </div>
                  </div>              
                  <div class="vaadin-pointer"></div>
                </div>
              </div>
              
              <!-- Second Row (if needed) would go here -->
            </div>
            <div class="button load-more">
              <div class="text">Load more</div>
            </div>
          </div>
        </div>
    </section>

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
