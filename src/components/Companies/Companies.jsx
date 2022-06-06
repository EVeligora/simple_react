import Pagination from "../Pagination/Pagination";
import CompaniesList from "./CompaniesList";

const Companies = () => {
  return (
    <>
      <section className="py-5">
        <div className="mb-5">
          <h1 class="display-5 fw-bold text-center mb-4">Companies</h1>
          <CompaniesList showChildren={true}>
            <span>asdasdasdasds</span>
          </CompaniesList>
        </div>
        <Pagination />
      </section>
    </>
  );
};

export default Companies;