import React from 'react'
import "../Styles/Organic.css";

const Organic = () => {
  return (
    <div>
      <div className="container-fluid OrganicImg  m-0 py-2">
        <div className="container py-5">
          <div className="row align-items-center g-5 py-5 mb-5">
            <div className="col-md-6 col-xs-12 mb-5">
              <h4 className="display-5 fw-bold text-white w-75 lh-5 mb-3 mt-2">
                Looking for fresh organic food?
              </h4>
              <p className="leadText text-white w-75">
                Discover a world of pure goodness with our collection. Dive into
                a bounty of nature’s finest, carefully curated to bring you
                wholesome, organic delights that nourish both body and soul.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-Sign px-4  py-2">
                  Sign Up Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organic