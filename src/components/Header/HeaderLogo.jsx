import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const HeaderLogo = () => {
  return (

    <Link to="/" className="d-flex align-items-center" style={{ height: '60px' }}>
      <img src={logo} className="h-100" alt="logo" />
    </Link>

  );
};

export default HeaderLogo;