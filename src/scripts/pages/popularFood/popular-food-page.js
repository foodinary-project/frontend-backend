export default class PopularFoodPage {
  constructor() {
    this.recipes = []; // menyimpan semua resep untuk filtering
  }

  async getRecipes() {
    const response = await fetch("/data/recipes.json");
    const data = await response.json();
    return data.recipes;
  }

  renderRecipes(recipes) {
    return recipes
      .map(
        (recipe) => `
        <div class="card-wrapper" data-rasa="${recipe.rasa_dominan}">
          <div class="recipe-card">
            <img class="image" src="${recipe.gambar}" />
            <div class="text-wrapper">
              <div class="copy">
                <div class="header">${recipe.name}</div>
                <div class="origin-badge">${recipe.asal_daerah}</div>
                <div class="paragraph">
                  ${recipe.deskripsi.substring(0, 90)}...
                </div>
              </div>
              <div class="info-wrapper">
                <div class="button-learn-more" data-id="${recipe.id}">
                  <div class="text">Learn More</div>
                </div>
              </div>
            </div>
          </div>
          <div class="vaadin-pointer"></div>
        </div>
      `
      )
      .join("");
  }

  async render() {
    this.recipes = await this.getRecipes(); // simpan di variabel global
    return `
    <nav class="navigation">
      <div class="nav-container">
        <div class="logo">
          <a href="/"><img src="/images/logo.png" alt="Foodinary Logo"></a>
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

    <section id="popular-food" class="dietary-section-popular-indonesian-food">
      <div class="section-container">
        <h2 class="dietary-title">Popular <br> Indonesian Food</h2>
        <p class="dietary-title-desc-pf">With our diverse recipe collection, we have something to satisfy every taste</p>     
        <div class="tab-wrapper">
          <div class="tab active">All</div>
          <div class="tab">Asin</div>
          <div class="tab">Gurih</div>
          <div class="tab">Gurih dan Pedas</div>          
          <div class="tab">Manis</div>          
        </div>            
      </div>        
      <div class="detail-page-popular-indonesian-food-from-see-more">
        <div class="recipes-section">
          <div class="recipe-cards-wrapper">
            <div class="card-row" id="recipe-card-row">
              ${this.renderRecipes(this.recipes)}
            </div>            
          </div>        
        </div>
      </div>
    </section>

    <div class="recipe-detail-modal" id="recipe-detail-modal">
      <div class="modal-content">
        <button class="close-modal">&times;</button>
        <div id="recipe-detail-content"></div>
      </div>
    </div>

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
    const attachLearnMoreListeners = () => {
      document.querySelectorAll(".button-learn-more").forEach((button) => {
        button.addEventListener("click", () => {
          const recipeId = parseInt(button.getAttribute("data-id"));
          this.showRecipeDetail(recipeId);
        });
      });
    };

    attachLearnMoreListeners();

    document.querySelector(".close-modal").addEventListener("click", () => {
      document.getElementById("recipe-detail-modal").style.display = "none";
    });

    document.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.textContent.trim();
        const filtered = filter === "All"
          ? this.recipes
          : this.recipes.filter(
              (r) => r.rasa_dominan.toLowerCase() === filter.toLowerCase()
            );

        const container = document.getElementById("recipe-card-row");
        container.innerHTML = this.renderRecipes(filtered);
        attachLearnMoreListeners(); // re-attach listeners for new cards
      });
    });
  }
}
