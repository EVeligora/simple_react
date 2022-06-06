import CompaniesModalsAddCompany from "./CompaniesModalsAddCompany";
import CompaniesModalsDeleteCompany from "./CompaniesModalsDeleteCompany";
import React, { useState } from 'react';

const CompaniesList = (props) => {
  const [companyId, setCompanyId] = React.useState(0);
  const [showCompanyModal, setShowCompanyModal] = React.useState(false);
  function onEditClick() {
    setCompanyId(1);
    setShowCompanyModal(true);
  }
  function onAddClick() {
    setCompanyId(0);
    setShowCompanyModal(true);
  }
  return (

    <>
      <div className="list-group w-auto mb-4">
        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100">
            <div className="d-flex align-items-center">
              <h6 className="mb-0">Microsoft</h6>
            </div>
            <div className="d-flex ms-auto">
              <button type="button" class="btn btn-outline-secondary" onClick={onEditClick}>Edit</button>

              <button type="button" class="btn btn-outline-danger ms-3" data-bs-toggle="modal" data-bs-target="#deleteCompany">Delete</button>

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col w-100">
          <button type="button" class="btn btn-secondary btn-lg w-100" onClick={onAddClick}>Add company</button>
        </div>
      </div>
      {props.showChildren && props.children}
      {showCompanyModal && <CompaniesModalsAddCompany id={companyId} OnCancel={() => { setCompanyId(0); setShowCompanyModal(false); }} />}
      {/* <CompaniesModalsDeleteCompany /> */}
    </>
  );
};

export default CompaniesList;