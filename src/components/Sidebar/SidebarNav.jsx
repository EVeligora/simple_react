import { Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <>
      <nav className="collapse show" id="home-collapse">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/companies" className="link-dark d-inline-flex text-decoration-none rounded fs-5 nav-link">
              Companies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/test" className="link-dark d-inline-flex text-decoration-none rounded fs-5 nav-link">
              Test
            </Link>
          </li>

        </ul>

      </nav>
    </>
  );
};

export default SidebarNav;