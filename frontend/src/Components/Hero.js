import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Hero.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Hero = () => {
  return (
    <div className="container-fluid heroImg  m-0 py-2">
      <div className="container py-5">
        <div className="row align-items-center g-5 py-5 mb-5">
          <div className="col-md-6 col-xs-12 mb-5">
            <h5 className="sub-text mt-5">100% Genuine Products</h5>
            <h1 className="display-5 fw-bold text-body-emphasis w-75 lh-5 mb-3 mt-2">
              Tasty & Healthy <span className="span-txt">Organic</span> Food
            </h1>
            <p className="leadText w-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore daery jhio gers gtraa asder
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-Explore px-4  py-2"
              >
                Explore Products
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
