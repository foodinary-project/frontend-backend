import { getAllFavorites, getFavorite, addFavorite, removeFavorite } from '../../data/database.js';

class FavoritePresenter {
    constructor({ favoriteButtonContainerSelector, recipes }) {
        this._container = document.querySelector(favoriteButtonContainerSelector);
        this._recipes = recipes || [];
        this._favorites = new Map(); // cache favorites

        this._init();
    }

    async _init() {
        const favoritesFromDb = await getAllFavorites();
        favoritesFromDb.forEach((fav) => this._favorites.set(fav.id, fav));
        this._renderFavoriteButtons();
    }

    _renderFavoriteButtons() {
        const favoriteButtons = document.querySelectorAll('.recipe-finder-favorite-btn');

        favoriteButtons.forEach((btn, index) => {
            const recipe = this._recipes[index];
            if (!recipe) return;

            this._updateButtonState(btn, recipe.id);

            btn.addEventListener('click', async () => {
                await this._toggleFavorite(recipe);
                this._updateButtonState(btn, recipe.id);
            });
        });
    }

    async _toggleFavorite(recipe) {
        if (this._favorites.has(recipe.id)) {
            await removeFavorite(recipe.id);
            this._favorites.delete(recipe.id);
        } else {
            await addFavorite(recipe);
            this._favorites.set(recipe.id, recipe);
        }
    }

    _updateButtonState(button, recipeId) {
        if (this._favorites.has(recipeId)) {
            button.classList.add('favorited');
            button.querySelector('svg').style.fill = '#dc3545'; // warna merah sesuai css
        } else {
            button.classList.remove('favorited');
            button.querySelector('svg').style.fill = 'none';
        }
    }
}

export default FavoritePresenter;
