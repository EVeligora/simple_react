import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <main className="container-xxl h-100" style={{ paddingTop: "100px" }}>
        <div className="row h-100">
          <div className="col-2 h-100">
            <Sidebar />
          </div>
          <div className="col-10 h-100">
            {/* {props.children} */}
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;