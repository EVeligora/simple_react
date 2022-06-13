import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="container-xxl h-100">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5 h-100">
        <div className="row align-items-center g-lg-5 py-5 h-100">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;