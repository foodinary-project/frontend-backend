import LandingPage from "../pages/landingPage/landing-page";
import LoginPage from "../pages/auth/login/login-page";
import RegisterPage from "../pages/auth/register/register-page";
import ResetPasswordPage from "../pages/auth/reset-password/reset-password-page";
import CekResepPage from "../pages/cekResep/cek-resep-page";
import PopularFoodPage from "../pages/popularFood/popular-food-page";
import DashboardPage from "../pages/dashboard/dashboard-page";
import HistoryPage from "../pages/history/history-page";
import FavoritePage from "../pages/favorite/favorite-page";
import AccountSettingsPage from "../pages/accountSettings/account-settings-page";
import AboutPage from "../pages/about/about-page";
import RecipePage from "../pages/recipe/recipe-page";

const routes = {
  "/": new LandingPage(),
  "/login": new LoginPage(),
  "/register": new RegisterPage(),
  "/reset-password": new ResetPasswordPage(),
  "/cek-resep": new CekResepPage(),
  "/popular-food": new PopularFoodPage(),

  // dashboard routes
  "/dashboard": new DashboardPage(),
  "/history": new HistoryPage(),
  "/favorite": new FavoritePage(),
  "/account-settings": new AccountSettingsPage(),

  "/about": new AboutPage(),
  "/recipe": new RecipePage(),
};

export default routes;
