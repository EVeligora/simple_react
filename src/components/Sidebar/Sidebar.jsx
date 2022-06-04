
const Sidebar = () => {
  return (
    <>
      <div className="flex-shrink-0 p-3 border-end w-100 h-100">
        <div className="collapse show" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <a href="/companies" className="link-dark d-inline-flex text-decoration-none rounded fs-5">
                Companies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;