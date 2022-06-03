import logo from "./logo.svg";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./scss/reset.scss";
import "./scss/main.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Companies />
    </div>
  );
};
const Header = () => {
  return (
    <header className="header">
      <div className="header__in">
        <div className="logo_w">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <nav className="header__menu_w">
          <ul className="menu">
            <li className="menu__item">
              <a href="/login" className="menu__link">
                Login
              </a>
            </li>
            <li className="menu__item">
              <a href="/companies" className="menu__link">
                Companies
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Companies = () => {
  return (
    <div>
      <div className="container">Companies</div>;
    </div>
  );
};

export default App;
