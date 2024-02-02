import React from 'react'
import "../Styles/Trending.css";

const Trending = () => {
  return (
    <div>
      <div className="container-fluid mx-o chooseSection">
        <div className="container">
          <div className="px-4 py-5 text-center">
            <h5 className="display-5 fw-bold fs-1 text-body-emphasis trendHead">
              Trending <span className="span-txt">Products</span>
            </h5>
            <div className="">
              <p className="leadText mb-4">
                From Buzz to Brilliance: Trending Products that are stealing the
                spotlight. Elevate your Everyday with the Best in Demand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending