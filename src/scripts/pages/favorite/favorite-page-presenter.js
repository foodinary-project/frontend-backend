import { getAllFavorites, removeFavorite } from '../../data/database.js';

class FavoritePagePresenter {
    constructor({ containerSelector }) {
        this._container = document.querySelector(containerSelector);
        this._favorites = [];
    }

    async init() {
        await this._loadFavorites();
        this._renderFavorites();
        this._bindEvents();
    }

    async _loadFavorites() {
        this._favorites = await getAllFavorites();
    }

    _renderFavorites() {
        if (!this._container) return;

        if (this._favorites.length === 0) {
            this._container.innerHTML = `<p class="no-favorites-msg">You have no favorite recipes yet.</p>`;
            return;
        }

        this._container.innerHTML = this._favorites
            .map(
                (fav) => `
          <div class="db-overview-card" data-id="${fav.id}">
            <img src="${fav.gambar || 'images/placeholder-food.png'}" alt="${fav.name}" class="db-overview-image" />
            <div class="db-overview-content">
              <p class="db-overview-title">${fav.name}</p>
              <p class="db-overview-details">${fav.deskripsi ? fav.deskripsi.substring(0, 100) + '...' : ''}</p>
              <button class="db-view-details-button" data-id="${fav.id}" title="View Details">View Details</button>
            </div>
          </div>
        `
            )
            .join('');
    }

    _bindEvents() {
        if (!this._container) return;

        // View Details Handler
        this._container.querySelectorAll('.db-view-details-button').forEach((btn) => {
            btn.addEventListener('click', (event) => {
                const id = event.currentTarget.getAttribute('data-id');
                if (id) {
                    // Contoh navigasi ke halaman detail, sesuaikan dengan router yang kamu pakai
                    window.location.hash = `#/detail?id=${id}`;
                }
            });
        });

        // Delete Favorite Handler
        this._container.querySelectorAll('.db-delete-button').forEach((btn) => {
            btn.addEventListener('click', async (event) => {
                const id = event.currentTarget.getAttribute('data-id');
                if (id) {
                    // Hapus dari DB dan reload list
                    await removeFavorite(id);
                    await this._loadFavorites();
                    this._renderFavorites();
                    this._bindEvents(); // Re-bind karena innerHTML di-replace
                }
            });
        });
    }
}

export default FavoritePagePresenter;
