import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import Companies from "./components/Companies/Companies";
import "./styles/main_global.scss";

const App = () => {
  return (
    <>
      <Header />
      <main className="d-flex flex-nowrap" style={{ paddingTop: '100px' }}>
        <Sidebar />
        <div className="comtainer">
          <Login />
          <Companies />
        </div>
      </main>
    </>
  );
};

export default App;
