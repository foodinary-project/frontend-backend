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
            <div class="nav-item active"><a href="/">Home</a></div>
            <div class="nav-item"><a href="#/recipe">Recipe</a></div>
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
                    Hanya dengan memotret masakan, Anda dapat membuatnya di rumah dengan resep yang kami sediakan. Ayo tekan tombol dibawah dan masak kuliner tradisional Indonesia di rumah!
                </p>
                <a href="#/cek-resep" class="hero-button">
                    Cek Resep
                </a>
            </div>
            <div class="hero-images">
                <div class="overlay"></div>
                <img src="images/sate.png" alt="Rawon" class="food-image">
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
                    <img src="images/sate.png" alt="Rendang" class="cuisine-image">
                    <div class="cuisine-info">
                        <h3 class="cuisine-name">Rendang</h3>
                        <p class="cuisine-description">
                            Rendang is a beef dish rich in spicy and herbal flavors and one of the most famous representatives of Indonesian cuisine.
                        </p>
                    </div>
                </div>
                
                <div class="cuisine-card">
                    <img src="images/sate.png" alt="Klepon" class="cuisine-image">
                    <div class="cuisine-info">
                        <h3 class="cuisine-name">Klepon</h3>
                        <p class="cuisine-description">
                            Klepon cake is a cake made from sticky rice flour, brown sugar and grated coconut. It tastes delicious and sweet.
                        </p>
                    </div>
                </div>
                
                <div class="cuisine-card">
                    <img src="images/sate.png" alt="Pempek" class="cuisine-image">
                    <div class="cuisine-info">
                        <h3 class="cuisine-name">Pempek</h3>
                        <p class="cuisine-description">
                            Pempek is a delicacy from Palembang made of fish and flours and served together with a dark rich sauce called cuko.
                        </p>
                    </div>
                </div>

                </div>
                <div class="see-more">
               <a href="/#/popular-food" class="see-more-link">See More</a>
           </div>
        </div>
    </section>

    <!-- Dietary Preferences Section -->
    <section class="dietary-section">
        <div class="section-container-2">
            <h2 class="dietary-title-lp">Recipes based on dietary preferences</h2>
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
                        <img src="images/sate.png" alt="Lumpia" class="dietary-image">
                        <h3 class="dietary-name">Lumpia</h3>
                    </div>
                    
                    <div class="dietary-card">
                        <img src="images/sate.png" alt="Gado-Gado" class="dietary-image">
                        <h3 class="dietary-name">Gado-Gado</h3>
                    </div>
                    
                    <div class="dietary-card">
                        <img src="images/sate.png" alt="Tempe Mendoan" class="dietary-image">
                        <h3 class="dietary-name">Tempe Mendoan</h3>
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
