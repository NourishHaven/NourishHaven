import React from "react";
import "../Styles/ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="container-fluid mx-o chooseSection">
      <div className="container py-5">
        <div className="px-4 py-5 text-center">
          <h3 className="display-5 fw-bold text-body-emphasis chooseHead">
            Why <span className="span-txt">Choose</span> Us?
          </h3>
          <div className="">
            <p className="leadText mb-4">
              Discover how our commitment to holistic wellness transforms your
              shopping experience into a journey of health and vitality.
            </p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100 whiteCard py-4">
                  <div className="card-body">
                    <h5 className="CardTitle-Green mb-3">
                      transparency you can taste
                    </h5>
                    <p className="CardText-pry">
                      Learn about our commitment to transparency, providing you
                      with a clear understanding of the origins and processes
                      behind every product.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 greenCard py-4">
                  <div className="card-body">
                    <h5 className="CardTitle-White mb-3">
                      Sustainable choices, satisfying lives
                    </h5>
                    <p className="CardText-tet">
                      Delve into the sustainability practices that set us apart,
                      making your choices not only good for you but also for thr
                      planet. Drive deep with us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 whiteCard py-4">
                  <div className="card-body">
                    <h5 className="CardTitle-Green mb-3">
                      nature’s bounty at your doorstep
                    </h5>
                    <p className="CardText-pry">
                      Discover why our organic food selection stands out in
                      delivering the purest gifts from the earth. Choose us to
                      experience best and maintain your health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
