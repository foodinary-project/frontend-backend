import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import ResetPasswordPage from '../pages/auth/reset-password/reset-password-page';

const routes = {
  '/login': new LoginPage(),
  '/register': new RegisterPage(),
  '/reset-password': new ResetPasswordPage(),
};

export default routes;
