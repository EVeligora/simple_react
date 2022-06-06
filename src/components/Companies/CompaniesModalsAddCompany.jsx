const CompaniesModalsAddCompany = (props) => {
  function close() {
    if (props.OnCancel) {
      props.OnCancel();
    }
  }

  return (
    <>
      {/* Modal Add company*/}
      <div className="modal fade show d-block" id="addCompany" tabIndex={-1} aria-labelledby="addCompanyLabel">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCompanyLabel">
                {props.id > 0 ? 'edit' : 'add'}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close} />
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
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={close}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default CompaniesModalsAddCompany;