import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo1.png'  
import "../Styles/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link
              to="/"
              className="d-inline-flex link-body-emphasis text-decoration-none link"
            >
              <img src={logo} alt={"logo"} className="brand-logo" />
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link px-2 link">
                Products
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="nav-link px-2 link">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link px-2 link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link px-2 link">
                Contact
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-around mb-md-0">
              <li>
                <Link to="/account" className="nav-link px-2 link">
                  <i class="bi bi-person-circle me-2"></i>
                  Account
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-2 link">
                  <i class="bi bi-handbag"></i>
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
