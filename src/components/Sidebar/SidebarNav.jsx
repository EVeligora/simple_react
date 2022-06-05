
const SidebarNav = () => {
  return (
    <>
      <nav className="collapse show" id="home-collapse">
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li>
            <a href="/companies" className="link-dark d-inline-flex text-decoration-none rounded fs-5">
              Companies
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarNav;