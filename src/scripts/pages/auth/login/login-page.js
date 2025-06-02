export default class LoginPage {
    async render() {
        // Gunakan backtick (`) untuk template literal dan tambahkan return
        return `
      <section class="container login-container">
        <div class="form-section">
          <div class="form-content">

            <h2>Welcome back!</h2>
            <p>Enter your credentials to access your account</p>

            <form id="loginForm">
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" required />
              </div>
              <div class="checkbox-group">
                <label>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#/reset-password">Forgot password?</a>
              </div>
              <button type="submit">Login</button>
            </form>

            <p class="signup-text">
              Don't have an account?
              <a href="#/register">Sign up</a>
            </p>
            
            <p class="signup-text">
              Want to return to the homepage?
              <a href="#/">Go back to Home</a>
            </p>

            
          </div>
        </div>

        <div class="image-section">
          <img src="images/auth-image.png" alt="Login Image" />
        </div>
      </section>
    `;
    }

    async afterRender() {
        // Tambahkan event listener untuk form login
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Mencegah submit form bawaan
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                console.log('Login attempt:', { email, password });

                // TODO: Tambahkan logika login sesungguhnya di sini
                // (Contoh: Kirim data ke API, validasi, dll.)
                alert('Login button clicked! Implement login logic here.');

                // Jika login berhasil, arahkan ke halaman lain
                // window.location.hash = '#/dashboard';
            });
        }
    }
}