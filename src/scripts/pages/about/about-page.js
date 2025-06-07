
export default class AboutPage {
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
            <div class="nav-item"><a href="/">Home</a></div>
            <div class="nav-item"><a href="#/recipe">Recipe</a></div>
            <div class="nav-item"><a href="#/cek-resep">Check Recipe</a></div>
            <div class="nav-item active"><a href="#/about">About</a></div>
        </div>
        <div class="nav-buttons">
            <a href="#/login" class="btn-outline">Login</a>
            <a href="#/register" class="btn-primary">Sign Up</a>
        </div>
    </div>
    </nav>

      <div class="about">
        <!-- About Section -->
        <div class="about2">
          <div class="judul-about">About</div>
          <div class="what-is-foodinary">What is foodinary?</div>
          <div class="paragraph-about">
            The lack of public awareness especially among both domestic and
            international tourists about Indonesia's traditional cuisine often poses a
            challenge in recognizing the rich diversity of regional dishes. This is
            further compounded by the limited availability of digital platforms
            offering comprehensive information about traditional foods, including
            their names, regional origins, key ingredients, and distinctive flavors.
            <br />
            <br />
            To address this issue, Foodinary was developed as a web-based platform
            designed to provide detailed information on traditional culinary delights
            from various regions across Indonesia. This website is accessible via both
            desktop and mobile devices, targeting a wide audience, including foreign
            travelers interested in exploring local cuisine.
            <br />
            <br />
            Foodinary features a range of culinary information such as recipes, food
            history, regional origins, and dominant taste profiles. Additionally,
            Machine Learning technology is utilized to create a food recognition
            feature based on images. The model is trained on a labeled dataset of
            Indonesian traditional food images, complete with food names, regional
            origins, and main ingredients.
            <br />
            <br />
            This model is integrated into the web application, allowing users to
            identify traditional dishes simply by uploading a photo. With Foodinary,
            we aim to make it easier for users to discover, learn about, and
            appreciate the rich heritage of Indonesian cuisine through an interactive
            and informative digital approach.
          </div>
        </div>

        <div class="team-section">
          <div class="team-header">
            <h1>Meet our team</h1>
            <p>Meet the people behind Foodinary</p>
          </div>

          <div class="team-grid">
            <div class="team-card">
              <div class="profile-image" style="background-image: url('/images/meet-our-team/hafiz.png');"></div>
              <h3>Hafiz Aryan Siregar</h3>
              <div class="role">Project Leader</div>
              <p class="description">Enjoys adventurous travel, seeks new cultures and offbeat destinations</p>
              <div class="social-links">
                <a href="mailto:hafizaryansiregar@gmail.com"><i class="fas fa-envelope"></i></a>
                <a href="https://github.com/hafizaryan"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/hafizaryan/"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="team-card">
              <div class="profile-image" style="background-image: url('/images/meet-our-team/dani.png');"></div>
              <h3>Dani Harmade</h3>
              <div class="role">Front End Developer</div>
              <p class="description">Enjoys adventurous travel, seeks new cultures and offbeat destinations</p>
              <div class="social-links">
                <a href="mailto:daniharmade@gmail.com"><i class="fas fa-envelope"></i></a>
                <a href="https://github.com/daniharmade"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/daniharmade/"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="team-card">
              <div class="profile-image" style="background-image: url('/images/meet-our-team/hapid.png');"></div>
              <h3>Hapid Ramdani</h3>
              <div class="role">Back End Developer</div>
              <p class="description">Enjoy Coding process and always lack of knowledge</p>
              <div class="social-links">
                <a href="mailto:hapidr24@gmail.com"><i class="fas fa-envelope"></i></a>
                <a href="https://github.com/hpdrr"><i class="fab fa-github"></i></a>
                <a href="http://www.linkedin.com/in/hapid-ramdani"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="team-card">
              <div class="profile-image" style="background-image: url('/images/meet-our-team/laras.png');"></div>
              <h3>Dwi Laras Setyadita</h3>
              <div class="role">Project Manager</div>
              <p class="description">Enjoys adventurous travel, seeks new cultures and offbeat destinations</p>
              <div class="social-links">
                <a href="mailto:larassetyadita@gmail.com"><i class="fas fa-envelope"></i></a>
                <a href="https://github.com/LarasSetyadita"><i class="fab fa-github"></i></a>
                <a href="http://www.linkedin.com/in/dwi-laras-setyadita-36b829268"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="team-card">
              <div class="profile-image" style="background-image: url('/images/meet-our-team/NovrianPratama.jpg');"></div>
              <h3>Novrian Pratama</h3>
              <div class="role">Machine Learning Engineer</div>
              <p class="description">Enjoys adventurous travel, seeks new cultures and offbeat destinations</p>
              <div class="social-links">
                <a href="mailto:novrianprtama2@gmail.com"><i class="fas fa-envelope"></i></a>
                <a href="https://github.com/NovrianPratama"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/novrianpratama/"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="team-card">
              <div class="profile-image" style="background-image: url('/images/meet-our-team/naia.png');"></div>
              <h3>Naia Shaffa Camila</h3>
              <div class="role">Machine Learning Engineer</div>
              <p class="description">Enjoys adventurous travel, seeks new cultures and offbeat destinations</p>
              <div class="social-links">
                <a href="mailto:naiashaffa@gmail.com"><i class="fas fa-envelope"></i></a>
                <a href="https://github.com/ShaffaCamila"><i class="fab fa-github"></i></a>
                <a href="http://linkedin.com/in/naia-shaffa"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
