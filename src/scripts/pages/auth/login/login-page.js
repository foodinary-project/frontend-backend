import LoginPresenter from './login-presenter';
import * as FoodinaryAPI from '../../../data/api';
import * as AuthModel from '../../../utils/auth';

export default class LoginPage {
  #presenter = null;

  async render() {
    return `
      <!-- Success Popup -->
      <div id="success-popup" class="popup hidden">
        <div class="popup-content">
          <p id="success-popup-message"></p>
          <button id="close-success-popup" class="button-popup">OK</button>
        </div>
      </div>

      <!-- Error Popup -->
      <div id="login-error-popup" class="popup hidden">
        <div class="popup-content">
          <p id="login-popup-message"></p>
          <button id="close-login-error-popup" class="button-popup">Close</button>
        </div>
      </div>

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
                <div class="password-wrapper">
  <input type="password" id="password" placeholder="Password" required />
  <i id="toggle-password" class="fa-solid fa-eye toggle-password"></i>
</div>

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
              Back to homepage?
              <a href="#/">Go back to Home</a>
            </p>
          </div>
        </div>

        <div class="image-section">
          <img src="/images/auth-image.png" alt="Login Image" />
        </div>
      </section>
    `;
  }

  async afterRender() {

    const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';

  togglePassword.classList.toggle('fa-eye');
  togglePassword.classList.toggle('fa-eye-slash');
});

    // Tampilkan popup sukses jika ada dari registrasi
    const successMessage = localStorage.getItem('registrationSuccess');
    if (successMessage) {
      this.#showSuccessPopup(successMessage);
      localStorage.removeItem('registrationSuccess');
    }

    // Inisialisasi presenter & setup form
    this.#presenter = new LoginPresenter({
      view: this,
      model: FoodinaryAPI,
      authModel: AuthModel,
    });

    this.#setupForm();
  }

#setupForm() {
  const form = document.getElementById('loginForm');
  const loginButton = form.querySelector('button[type="submit"]');
  const originalBtnText = loginButton.textContent;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Disable tombol dan tampilkan loading
    loginButton.disabled = true;
    loginButton.textContent = 'Loading...';

    const data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    try {
      await this.#presenter.getLogin(data);
    } finally {
      // Aktifkan kembali tombol dan kembalikan teks
      loginButton.disabled = false;
      loginButton.textContent = originalBtnText;
    }
  });
}


  loginSuccessfully(message, userData) {
    console.log('Login success:', message, userData);

    // Simpan data user jika diperlukan
    localStorage.setItem('user', JSON.stringify(userData.user));

    // Redirect ke dashboard
    location.hash = '#/dashboard';
  }

  loginFailed(message) {
    const popup = document.getElementById('login-error-popup');
    const messageContainer = document.getElementById('login-popup-message');
    const closeBtn = document.getElementById('close-login-error-popup');

    messageContainer.textContent = message;
    popup.classList.remove('hidden');

    closeBtn.onclick = () => {
      popup.classList.add('hidden');
    };
  }

  #showSuccessPopup(message) {
    const popup = document.getElementById('success-popup');
    const messageEl = document.getElementById('success-popup-message');
    const closeBtn = document.getElementById('close-success-popup');

    messageEl.textContent = message;
    popup.classList.remove('hidden');

    closeBtn.onclick = () => {
      popup.classList.add('hidden');
    };
  }
}
