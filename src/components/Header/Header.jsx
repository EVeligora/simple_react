import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__in">
        <div className="logo">
          <img src={logo} className="logo__img" alt="logo" />
        </div>
        <nav className="header__menu_w">
          <ul className="menu">
            <li className="menu__item">
              <a href="/login" className="menu__link btn btn-outline-primary">
                Login
              </a>
            </li>
            <li className="menu__item">
              <a href="/companies" className="menu__link btn btn-outline-primary">
                Companies
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;