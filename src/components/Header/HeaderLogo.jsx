import logo from "../../images/logo.png";

const HeaderLogo = () => {
  return (

    <a href="/" className="d-flex align-items-center" style={{ height: '60px' }}>
      <img src={logo} className="h-100" alt="logo" />
    </a>

  );
};

export default HeaderLogo;