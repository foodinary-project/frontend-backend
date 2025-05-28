import LandingPage from "../pages/landingPage/landing-page";
import LoginPage from "../pages/auth/login/login-page";
import RegisterPage from "../pages/auth/register/register-page";
import ResetPasswordPage from "../pages/auth/reset-password/reset-password-page";
import CekResepPage from "../pages/cekResep/cek-resep-page";
import PopularFoodPage from "../pages/popularFood/popular-food";

const routes = {
  "/": new LandingPage(),
  "/login": new LoginPage(),
  "/register": new RegisterPage(),
  "/reset-password": new ResetPasswordPage(),
  "/cek-resep": new CekResepPage(),
  "/popular-food": new PopularFoodPage(),
};

export default routes;
