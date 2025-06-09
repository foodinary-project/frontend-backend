import PopularFoodPresenter from "./popular-food-presenter.js";

export default class PopularFoodPage {
  constructor() {
    this.presenter = new PopularFoodPresenter();
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
    const token = localStorage.getItem('accessToken');
    const isLoggedIn = token && token !== 'null' && token !== 'undefined';

    const recipes = await this.presenter.fetchRecipes();

    return `
      <!-- HTML sama seperti sebelumnya, hanya ini bagian yang penting -->
      <div class="card-row" id="recipe-card-row">
        ${this.renderRecipes(recipes)}
      </div>
      <!-- Modal dan lainnya tetap -->
    `;
  }

  async afterRender() {
    const updateRecipeList = (filter) => {
      const filtered = this.presenter.filterRecipesByTaste(filter);
      const container = document.getElementById("recipe-card-row");
      container.innerHTML = this.renderRecipes(filtered);
      attachLearnMoreListeners();
    };

    const attachLearnMoreListeners = () => {
      document.querySelectorAll(".button-learn-more").forEach((button) => {
        button.addEventListener("click", () => {
          const recipeId = parseInt(button.getAttribute("data-id"));
          const recipe = this.presenter.getRecipeById(recipeId);
          if (recipe) {
            document.getElementById("recipe-detail-content").innerHTML = `
              <h2>${recipe.name}</h2>
              <img src="${recipe.gambar}" />
              <p>${recipe.deskripsi}</p>
            `;
            document.getElementById("recipe-detail-modal").style.display = "block";
          }
        });
      });
    };

    document.querySelector(".close-modal").addEventListener("click", () => {
      document.getElementById("recipe-detail-modal").style.display = "none";
    });

    document.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        updateRecipeList(tab.textContent.trim());
      });
    });

    attachLearnMoreListeners();

    // Hamburger nav (opsional - bisa di-abstract ke utils jika ingin)
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navButtons = document.getElementById('nav-buttons');

    if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        navButtons.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
      });

      document.addEventListener('click', (e) => {
        const isInside = e.target.closest('.nav-container');
        if (!isInside && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navButtons.classList.remove('active');
          hamburgerMenu.classList.remove('active');
        }
      });

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
