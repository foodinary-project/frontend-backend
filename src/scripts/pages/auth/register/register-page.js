import RegisterPresenter from './register-presenter';
import * as FoodinaryAPI from '../../../data/api';

export default class LoginPage {
  #presenter = null;

  async render() {
    return `
      <section class="container login-container">
        <div id="error-popup" class="popup hidden">
          <div class="popup-content">
            <p id="popup-message"></p>
            <button id="close-popup" class="button-popup">OK</button>
          </div>
        </div>

        <div class="form-section">
          <div class="form-content">
            <h2>Welcome back!</h2>
            <p>Enter your credentials to access your account</p>

            <form id="registerForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="name" id="name" placeholder="Enter your name" required />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <div class="password-wrapper">
                  <input type="password" id="password" placeholder="Password" required />
                  <i class="fa-solid fa-eye toggle-password" data-toggle="password"></i>
                </div>
              </div>
              <div class="form-group">
                <label for="confirm-password">Confirm Password</label>
                <div class="password-wrapper">
                  <input type="password" id="confirm-password" placeholder="Confirm your password" required />
                  <i class="fa-solid fa-eye toggle-password" data-toggle="confirm-password"></i>
                </div>
              </div>
              <div class="checkbox-group">
                <label>
                  <input type="checkbox" />
                  <span>I’m not a robot</span>
                </label>
              </div>
              <button type="submit">Register</button>
            </form>

            <p class="signup-text">
              Already have an account?
              <a href="#/login">Log In</a>
            </p>

            <p class="signup-text">
              Back to homepage?
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
    // Toggle visibility for all password fields
    document.querySelectorAll('.toggle-password').forEach((icon) => {
      icon.addEventListener('click', () => {
        const inputId = icon.getAttribute('data-toggle');
        const input = document.getElementById(inputId);
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
      });
    });

    this.#presenter = new RegisterPresenter({
      view: this,
      model: FoodinaryAPI,
    });

    this.#setupForm();
  }

  #setupForm() {
    const form = document.getElementById('registerForm');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Loading...';

      const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirm-password').value,
      };

      try {
        await this.#presenter.getRegistered(data);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  registeredSuccessfully(message) {
    localStorage.setItem('registrationSuccess', 'Registrasi berhasil! Silakan login.');
    location.hash = '/login';
  }

  registeredFailed(message) {
    const popup = document.getElementById('error-popup');
    const messageContainer = document.getElementById('popup-message');
    const closeBtn = document.getElementById('close-popup');

    messageContainer.textContent = message;
    popup.classList.remove('hidden');

    closeBtn.onclick = () => {
      popup.classList.add('hidden');
    };
  }
}
