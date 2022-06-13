import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import CompaniesList from "./CompaniesList";


class CompaniesPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="py-5">
          <div className="mb-5">
            <h1 className="display-5 fw-bold text-center mb-4">Companies</h1>
            <CompaniesList showChildren={true}>
              <span>asdasdasdasds</span>
            </CompaniesList>
          </div>
          <Pagination />
        </section>
      </React.Fragment>
    )
  }
}

export default CompaniesPage;
