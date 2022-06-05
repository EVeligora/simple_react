import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="text-bg-light border-bottom fixed-top" style={{ height: '100px' }}>
      <div className="container-xxl h-100">
        <div className="d-flex flex-wrap align-items-center py-3 h-100" >
          <HeaderLogo />
          <HeaderNav />
        </div>
      </div>
    </header>

  );
};

export default Header;