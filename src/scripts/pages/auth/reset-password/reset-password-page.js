import ResetPasswordPresenter from './reset-password-presenter';

export default class ResetPasswordPage {
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
            <h2 id="form-title">Reset your password!</h2>
            <p id="form-desc">Enter your Email address to receive reset link.</p>

            <form id="resetForm">
              <div id="step-email">
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
              </div>

              <div id="step-reset" hidden>
                <div class="form-group">
                  <label for="token">Code</label>
                  <input type="text" id="token" name="token" placeholder="Paste the token from your email" />
                </div>
                <div class="form-group">
                  <label for="newPassword">New Password</label>
                  <input type="password" id="newPassword" name="newPassword" placeholder="Enter new password" />
                </div>
              </div>

              <button type="submit" id="submitBtn">Send Reset Link</button>
            </form>

            <p class="signup-text">
              Remember your password? <a href="#/login">Login</a>
            </p>
          </div>
        </div>

        <div class="image-section">
          <img src="images/auth-image.png" alt="Reset Image" />
        </div>
      </section>
    `;
  }

  async afterRender() {
    const form = document.getElementById('resetForm');
    const emailInput = document.getElementById('email');
    const tokenInput = document.getElementById('token');
    const newPasswordInput = document.getElementById('newPassword');
    const stepEmail = document.getElementById('step-email');
    const stepReset = document.getElementById('step-reset');
    const formTitle = document.getElementById('form-title');
    const formDesc = document.getElementById('form-desc');
    const submitBtn = document.getElementById('submitBtn');

    // Popup elements
    const successPopup = document.getElementById('success-popup');
    const successMessage = document.getElementById('success-popup-message');
    const closeSuccessPopup = document.getElementById('close-success-popup');

    const errorPopup = document.getElementById('login-error-popup');
    const errorMessage = document.getElementById('login-popup-message');
    const closeErrorPopup = document.getElementById('close-login-error-popup');

    let currentEmail = '';

    // Helper: show popup
    const showSuccessPopup = (msg, redirect = false) => {
      successMessage.textContent = msg;
      successPopup.classList.remove('hidden');

      closeSuccessPopup.onclick = () => {
        successPopup.classList.add('hidden');
        if (redirect) window.location.hash = '#/login';
      };
    };

    const showErrorPopup = (msg) => {
      errorMessage.textContent = msg;
      errorPopup.classList.remove('hidden');

      closeErrorPopup.onclick = () => {
        errorPopup.classList.add('hidden');
      };
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Simpan teks awal & disable tombol
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Loading...';

      try {
        if (!stepReset.hidden) {
          // STEP 2: Submit New Password
          const token = tokenInput.value.trim();
          const newPassword = newPasswordInput.value.trim();

          if (!token || !newPassword) {
            return showErrorPopup('All fields are required.');
          }

          const result = await ResetPasswordPresenter.resetPassword({
            email: currentEmail,
            token,
            newPassword,
          });

          if (result.ok) {
            showSuccessPopup('Password has been reset. You can now log in.', true);
          } else {
            showErrorPopup(result.message || 'Failed to reset password.');
          }
        } else {
          // STEP 1: Request Reset Link
          const email = emailInput.value.trim();
          if (!email) return showErrorPopup('Email is required.');

          const result = await ResetPasswordPresenter.requestResetLink(email);

          if (result.ok) {
            showSuccessPopup('Code sent to your email.');
            currentEmail = email;

            // Move to step 2
            stepEmail.hidden = true;
            stepReset.hidden = false;

            formTitle.textContent = 'Enter New Password';
            formDesc.textContent = 'Paste the token sent to your email and choose a new password.';
            submitBtn.textContent = 'Reset Password';

            tokenInput.required = true;
            newPasswordInput.required = true;
          } else {
            showErrorPopup(result.message || 'Failed to send reset link.');
          }
        }
      } finally {
        if (submitBtn.textContent === 'Loading...') {
          submitBtn.textContent = originalText;
        }
        submitBtn.disabled = false;
      }
    });
  }
}
