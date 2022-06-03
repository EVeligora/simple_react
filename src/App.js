import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./styles/main_global.scss";
import Header from "./components/Header/Header.jsx";
import Companies from "./components/Companies/Companies.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Companies />
    </div>
  );
};

export default App;
