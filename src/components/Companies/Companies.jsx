const Companies = () => {
  return (

    <div className="container">
      <h1 class="display-5 fw-bold text-center mb-4">Companies</h1>
      <div className="list-group w-auto">
        <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">List group item heading</h6>
              <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
            </div>
            <small className="opacity-50 text-nowrap">now</small>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">

          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Another title here</h6>
              <p className="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
            </div>
            <small className="opacity-50 text-nowrap">3d</small>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">

          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Third heading</h6>
              <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
            </div>
            <small className="opacity-50 text-nowrap">1w</small>
          </div>
        </a>
      </div>
    </div>

  );
};

export default Companies;