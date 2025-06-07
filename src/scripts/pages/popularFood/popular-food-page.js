export default class PopularFoodPage {
  async render() {
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

    <!-- Dietary Preferences Section -->
    <section id="popular-food" class="dietary-section-popular-indonesian-food">
        <div class="section-container">
            <h2 class="dietary-title">Popular <br> Indonesian Food</h2>
            <p class="dietary-title-desc-pf">With our diverse recipe collection, we have something to satisfy every taste</p>     
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
        </div>
      </footer>
  `;
  }
  async afterRender() {
    // Dibiarkan kosong karena belum ada interaksi JS
  }
}
