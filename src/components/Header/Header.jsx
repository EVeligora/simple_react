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


    <header className="text-bg-light border-bottom fixed-top" style={{ height: '100px' }}>
      <div className="container-xxl h-100">
        <div className="d-flex flex-wrap align-items-center py-3 h-100" >
          <a href="/" className="d-flex align-items-center" style={{ height: '60px' }}>
            <img src={logo} className="h-100" alt="logo" />
          </a>

          <div className="ms-auto">
            <a href="/login" className="btn btn-outline-primary">Login</a>
            {/* <button type="button" className="btn btn-primary">Sign-up</button> */}
          </div>

        </div>
      </div>
    </header>

  );
};

export default Header;