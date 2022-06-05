const Companies = () => {
  return (

    <>
      <h1 class="display-5 fw-bold text-center mb-4">Companies</h1>
      <div className="list-group w-auto mb-4">
        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100">
            <div className="d-flex align-items-center">
              <h6 className="mb-0">Microsoft</h6>
            </div>
            <div className="d-flex ms-auto">
              <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editCompany">Edit</button>

              <button type="button" class="btn btn-outline-danger ms-3" data-bs-toggle="modal" data-bs-target="#deleteCompany">Delete</button>

            </div>
          </div>
        </div>
        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100">
            <div className="d-flex align-items-center">
              <h6 className="mb-0">Apple</h6>
            </div>
            <div className="d-flex ms-auto">
              <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editCompany">Edit</button>

              <button type="button" class="btn btn-outline-danger ms-3" data-bs-toggle="modal" data-bs-target="#deleteCompany">Delete</button>

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col w-100">
          <button type="button" class="btn btn-secondary btn-lg w-100" data-bs-toggle="modal" data-bs-target="#addCompany">Add company</button>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="editCompany" tabIndex={-1} aria-labelledby="editCompanyLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editCompanyLabel">Edit company</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="">
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Company name" />
                  <label htmlFor="floatingInput">Company name</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="deleteCompany" tabIndex={-1} aria-labelledby="deleteCompanyLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteCompanyLabel">Delete company</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              Are you sure?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="addCompany" tabIndex={-1} aria-labelledby="addCompanyLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCompanyLabel">Add company</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="">
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Company name" />
                  <label htmlFor="floatingInput">Company name</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Companies;