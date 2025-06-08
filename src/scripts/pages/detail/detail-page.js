export default class DetailPage {
  async getRecipeById(id) {
    const response = await fetch("/data/recipes.json");
    const data = await response.json();
    return data.recipes.find(recipe => recipe.id == id);
  }

  async render() {
    const hash = window.location.hash;
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    if (!id) {
      return `<div class="not-found">ID tidak ditemukan di URL.</div>`;
    }

    this.recipe = await this.getRecipeById(id);

    if (!this.recipe) {
      return `<div class="not-found">Resep tidak ditemukan.</div>`;
    }

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

  <div class="recipe-detail-container">
  <img class="recipe-detail-image" src="${this.recipe.gambar}" alt="${this.recipe.name}" />

  <div class="recipe-detail-overlay">
  <h1 class="recipe-detail-title">${this.recipe.name}</h1>
  <p class="recipe-detail-origin">( <strong>Asal:</strong> ${this.recipe.asal_daerah} )</p>
    <div class="recipe-detail-meta">
      <p>${this.recipe.deskripsi}</p>
    </div>
  </div>

  <div class="recipe-detail-content">
    <h3 class="recipe-detail-section-title">Bahan</h3>
    <ul class="recipe-detail-list">
      ${this.recipe.bahan.map(b => `<li>${b}</li>`).join("")}
    </ul>

    <h3 class="recipe-detail-section-title">Alat</h3>
    <ul class="recipe-detail-list">
      ${this.recipe.alat.map(a => `<li>${a}</li>`).join("")}
    </ul>

    <h3 class="recipe-detail-section-title">Cara Membuat</h3>
    <ol class="recipe-detail-steps">
      ${this.recipe.cara_membuat.map(step => `<li>${step.replace(/^\d+\.\s*/, '')}</li>`).join("")}
    </ol>

    <p class="recipe-detail-source">
      Sumber: <a href="${this.recipe.sumber}" target="_blank">Lihat resep asli</a>
    </p>
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
  }
}
