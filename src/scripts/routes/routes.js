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
import DetailPage from "../pages/detail/detail-page";
import PrivacyPage from "../pages/privacy/privacy-page";
import TermsPage from "../pages/terms/terms-page";
import NotFoundPage from "../pages/notfound/notfound-page";

const routes = {
  // public routes
  "/": new LandingPage(),
  "/cek-resep": new CekResepPage(),
  "/popular-food": new PopularFoodPage(),
  "/about": new AboutPage(),
  "/recipe": new RecipePage(),
  "/detail": new DetailPage(),
  "/privacy": new PrivacyPage(),
  "/terms": new TermsPage(),

  // authentication routes
  "/login": new LoginPage(),
  "/register": new RegisterPage(),
  "/reset-password": new ResetPasswordPage(),

  // dashboard routes
  "/dashboard": new DashboardPage(),
  "/history": new HistoryPage(),
  "/favorite": new FavoritePage(),
  "/account-settings": new AccountSettingsPage(),

  // fallback route
  "*": new NotFoundPage(), 
};

export default routes;
