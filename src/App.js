import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Companies from "./components/Companies/Companies";
import "./styles/main_global.scss";

const App = () => {
  return (
    <>
      <Header />
      <div className="container-fluid py-5">
        <Login />
        <Companies />
      </div>
    </>
  );
};

export default App;
