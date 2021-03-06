const CompaniesModalsDeleteCompany = () => {
  return (
    <>

      {/* Modal Delete company*/}
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


    </>

  );
};

export default CompaniesModalsDeleteCompany;