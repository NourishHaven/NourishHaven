import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className="mainFooter fixed-bottom">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
          <div className="col mb-3">
            <h5 className="Signup-text text-white">
              Sign up for our newsletters
            </h5>
            <form className="d-flex" role="search">
              <input
                className="form-control subscribe"
                type="search"
                placeholder="Email Address"
                aria-label="Search"
              />
              <button className="btn btnSub" type="submit">
                Subscribe
              </button>
            </form>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5 className="mb-4 text-white">Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/products" className="nav-link p-0 text-white">
                  Products
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/pricing" className="nav-link p-0 text-white">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-white">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/conatact" className="nav-link p-0 text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="mb-4 text-white">Products</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Fruits/ Vegetables
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Poultry/SeaFood
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Legumes/Grains
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Diary Products
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Tubers
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="mb-4 text-white">Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link hto="/" className="nav-link p-0 text-white">
                  Help & FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Delivery Options
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  <i className="bi bi-twitter-x me-3 fs-5"></i>
                  <i className="bi bi-instagram fs-5"></i>
                  <i className="bi bi-facebook ms-3 fs-5"></i>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer