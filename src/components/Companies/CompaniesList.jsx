
const CompaniesList = () => {
  return (

    <>
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
    </>

  );
};

export default CompaniesList;