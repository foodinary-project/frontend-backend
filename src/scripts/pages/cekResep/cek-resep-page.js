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
            <div class="nav-item"><a href="/">Home</a></div>
            <div class="nav-item active"><a href="#/recipes">Recipe</a></div>
            <div class="nav-item"><a href="#/about">About</a></div>
        </div>
        <div class="nav-buttons">
            <a href="#/login" class="btn-outline">Login</a>
            <a href="#/register" class="btn-primary">Sign Up</a>
        </div>
    </div>
    </nav>

    <!-- Dietary Preferences Section -->
    <section class="dietary-section">
        <div class="section-container">
            <h2 class="dietary-title">Kami akan memberikan resep <br> dari foto Anda</h2>       
            <p class="dietary-title-desc">Silakan unggah foto kuliner Indonesia Anda untuk mengetahui resepnya!</p>         
        </div>   
        <div class="recipe-finder-upload-link">
            <a href="/#/recipe">Or direct to this page to search your recipe</a>
        </div>
        <div class="upload-section">
            <div id="drop-area">
                <div>
                    <i class="fas fa-cloud-upload-alt icon-upload"></i><br>
                    Seret dan lepas foto di sini
                </div>
            </div>
            <input 
                type="file" 
                id="file-input" 
                accept="image/*" 
                class="hidden-input"
                onchange="document.getElementById('selected-file-name').innerText = this.files[0] ? this.files[0].name : ''"
            >
            <div class="upload-btn-group">
                <button 
                    class="btn-primary"                    
                    onclick="document.getElementById('file-input').click();"
                >
                    Upload Foto
                </button>
                <button 
                    class="btn-outline custom-outline-btn"
                    onclick="openCamera()"
                >
                    Buka Kamera
                </button>
            </div>
            <div id="selected-file-name" class="selected-file-name"></div>
            <video id="camera-stream" width="320" height="200" autoplay class="camera-stream"></video>
            <canvas id="camera-canvas" width="320" height="200" class="camera-canvas"></canvas>
            <button 
                id="capture-btn"
                class="btn-primary"            
                onclick="capturePhoto()"
            >
                Ambil Foto
            </button>
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
