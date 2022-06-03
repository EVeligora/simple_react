import Header from "./components/Header/Header"
import Companies from "./components/Companies/Companies";
import "./styles/main_global.scss";

const App = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="base">
          <Companies />
        </div>
      </div>
    </div>
  );
};

export default App;
