import React from "react";
import Login from "./components/Login/LoginPage";
import CompaniesPage from "./pages/Companies/CompaniesPage";
import "./styles/main_global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  // const Router = ReactRouterDOM.BrowserRouter;
  // const Route = ReactRouterDOM.Route;
  // const Routes = ReactRouterDOM.Routes;
  return (
    <Router>
      <Routes>
        {/* <Route path={"/"} element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route> */}
        <Route path={"/"} element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path={"/"} element={<MainLayout />}>
          <Route
            path={"/companies"}
            element={
              <PrivateRoute>
                <CompaniesPage />
              </PrivateRoute>
            }
          />
          <Route path={"/test"} element={"Test"} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
