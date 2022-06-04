import logo from "../../images/logo.png";

const Header = () => {
  return (
    // <header className="header">
    //   <div className="container header__in">
    //     <div className="header__logo">
    //       <div className="logo">
    //         <img src={logo} className="logo__img" alt="logo" />
    //       </div>
    //     </div>
    //     <nav className="header__menu_w">
    //       <ul className="menu">
    //         <li className="menu__item">
    //           <a href="/login" className="menu__link btn btn-outline-primary">
    //             Login
    //           </a>
    //         </li>
    //         <li className="menu__item">
    //           <a href="/companies" className="menu__link btn btn-outline-primary">
    //             Companies
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>


    <header className="text-bg-light border-bottom fixed-top">
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={logo} className="" alt="logo" />
          </a>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/companies" className="nav-link px-2 link-secondary">Companies</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <a href="/login" className="btn btn-outline-primary me-2">Login</a>
            {/* <button type="button" className="btn btn-primary">Sign-up</button> */}
          </div>

        </div>
      </div>
    </header>

  );
};

export default Header;