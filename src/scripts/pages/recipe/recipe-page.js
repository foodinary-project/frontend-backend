import FavoritePresenter from './recipe-presenter';

export default class RecipePage {
  constructor() {
    this.recipes = [];
  }

  async getRecipes() {
    const response = await fetch("/data/recipes.json");
    const data = await response.json();
    return data.recipes;
  }

  renderRecipeCards(recipes) {
    return recipes
      .map(
        (recipe) => `
          <div class="recipe-finder-recipe-card">
            <img src="${recipe.gambar}" alt="${recipe.name}" class="recipe-finder-recipe-image">
            <div class="recipe-finder-recipe-content">
              <h3 class="recipe-finder-recipe-title">${recipe.name}</h3>
              <p class="recipe-finder-recipe-description">${recipe.deskripsi.substring(0, 100)}...</p>
              <div class="recipe-finder-recipe-actions">
                <button class="recipe-finder-recipe-btn" data-id="${recipe.id}">Recook now</button>
                <button class="recipe-finder-favorite-btn">
                  <svg class="recipe-finder-heart-icon" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        `
      )
      .join("");
  }

  async render() {
    this.recipes = await this.getRecipes();
    const token = localStorage.getItem('accessToken'); // sesuaikan dengan key token kamu
    const isLoggedIn = token && token !== 'null' && token !== 'undefined';    return `
<!-- Navigation -->
    <nav class="navigation">
    <div class="nav-container">
        <div class="logo">
            <a href="/">
                <img src="/images/logo.png" alt="Foodinary Logo">
            </a>
        </div>
        <div class="hamburger-menu" id="hamburger-menu">
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
        </div>
        <div class="nav-menu" id="nav-menu">
            <div class="nav-item"><a href="/">Home</a></div>
            <div class="nav-item active"><a href="#/recipe">Recipe</a></div>
            <div class="nav-item"><a href="#/cek-resep">Check Recipe</a></div>
            <div class="nav-item"><a href="#/about">About</a></div>
        </div>
          <div class="nav-buttons" id="nav-buttons">
            ${isLoggedIn
        ? `<a href="#/dashboard" class="btn-primary">Dashboard</a>`
        : `
                  <a href="#/login" class="btn-outline">Login</a>
                  <a href="#/register" class="btn-primary">Sign Up</a>`
      }
          </div>
    </div>
    </nav>

      <div class="recipe-finder-container">
        <div class="recipe-finder-search-wrapper">
          <div class="recipe-finder-search-box">
            <input type="text" class="recipe-finder-search-input" placeholder="Masukkan nama makanan">
            <button class="recipe-finder-search-btn" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe-finder-upload-link">
          <a href="/#/cek-resep">Or direct to this page to upload your image</a>
        </div>

        <div class="recipe-finder-filter-tabs">
          <div class="recipe-finder-filter-tab active">All</div>
          <div class="recipe-finder-filter-tab">Asin</div>
          <div class="recipe-finder-filter-tab">Gurih</div>
          <div class="recipe-finder-filter-tab">Gurih dan Pedas</div>
          <div class="recipe-finder-filter-tab">Manis</div>
        </div>

        <div class="recipe-finder-main-content">              
          <div class="recipe-finder-recipe-grid">
            <div class="recipe-finder-recipes" id="recipe-finder-recipes">
              ${this.renderRecipeCards(this.recipes)}
            </div>              
          </div>
        </div>
      </div>

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
    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navButtons = document.getElementById('nav-buttons');

    if (hamburgerMenu) {
      // Toggle menu visibility on hamburger click
      hamburgerMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        navMenu.classList.toggle('active');
        navButtons.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
      });

      // Close menu when clicking anywhere outside
      document.addEventListener('click', (event) => {
        const isClickInsideNav = event.target.closest('.nav-container');
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navButtons.classList.remove('active');
          hamburgerMenu.classList.remove('active');
        }
      });

      // Close menu when clicking on a nav link (after content is loaded)
      setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navButtons.classList.remove('active');
            hamburgerMenu.classList.remove('active');
          });
        });
      }, 100);
    }

    setTimeout(() => {
      const tabElements = document.querySelectorAll(".recipe-finder-filter-tab");
      const recipesContainer = document.getElementById("recipe-finder-recipes");
      const searchInput = document.querySelector(".recipe-finder-search-input");

      const handleRecookButton = () => {
        const recookButtons = document.querySelectorAll(".recipe-finder-recipe-btn");
        recookButtons.forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            if (id) {
              window.location.hash = `#/detail?id=${id}`;
            } else {
              console.error("ID tidak ditemukan pada tombol:", btn);
            }
          });
        });
      };

      // Inisialisasi pertama
      handleRecookButton();

      if (!searchInput) {
        console.error("Search input not found.");
        return;
      }

      // Filter berdasarkan rasa
      tabElements.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabElements.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");

          const filter = tab.textContent.trim().toLowerCase();
          const filteredRecipes =
            filter === "all"
              ? this.recipes
              : this.recipes.filter((r) => r.rasa_dominan.toLowerCase() === filter);

          recipesContainer.innerHTML = this.renderRecipeCards(filteredRecipes);
          handleRecookButton(); // aktifkan ulang listener

          // Re-initialize favorite presenter setiap render ulang card
          new FavoritePresenter({
            favoriteButtonContainerSelector: "#recipe-finder-recipes",
            recipes: filteredRecipes,
          });
        });
      });

      // Fitur pencarian
      searchInput.addEventListener("input", (e) => {
        const keyword = e.target.value.toLowerCase();
        const filteredRecipes = this.recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(keyword)
        );
        recipesContainer.innerHTML = this.renderRecipeCards(filteredRecipes);
        handleRecookButton();

        new FavoritePresenter({
          favoriteButtonContainerSelector: "#recipe-finder-recipes",
          recipes: filteredRecipes,
        });
      });

      // Initial favorite presenter setup for first render
      new FavoritePresenter({
        favoriteButtonContainerSelector: "#recipe-finder-recipes",
        recipes: this.recipes,
      });
    }, 0);
  }
}
