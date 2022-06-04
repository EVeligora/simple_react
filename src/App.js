import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import Companies from "./components/Companies/Companies";
import "./styles/main_global.scss";

const App = () => {
  return (
    <>
      <Header />
      <main className="container-xxl h-100" style={{ paddingTop: "100px" }}>
        <div class="row h-100">
          <div class="col-2">
            <Sidebar />
          </div>
          <div class="col-10">
            {/* <Login /> */}
            <Companies />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
