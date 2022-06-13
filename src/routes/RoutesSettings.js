import CompaniesPage from "../pages/Companies/CompaniesPage"
import MainLayout from "../layouts/MainLayout"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../components/Login/LoginPage";

const companiesPageRoute = {
  url: "/companies",
  component: <CompaniesPage />,
  guard: null,
  layout: <MainLayout />
};

const LoginPageRoute = {
  url: "/login",
  component: <Login />,
  guard: true,
  layout: <AuthLayout />
};



const mainLayoutRoutes = [
  companiesPageRoute,
  LoginPageRoute
];

export default mainLayoutRoutes;