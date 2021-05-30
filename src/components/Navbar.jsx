import "../cozastore/css/main.css";
import "../cozastore/css/util.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchBox from "./SearchBox";
// import "./js/hamburger";

import React from "react";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let productsAmount = 0;

  cart.forEach((item) => {
    productsAmount += item.quantity;
  });

  return (
    <div className="bg-danger">
      <header className="header-v2">
        <div className="container-menu-desktop trans-03 ">
          <div className="wrap-menu-desktop ">
            <nav className="limiter-menu-desktop container">
              <span className="logo">
                <img
                  src="https://image.flaticon.com/icons/png/512/3184/3184948.png"
                  alt="IMG-LOGO"
                />
                <h4
                  className="ml-3 text-dark"
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontWeight: "80px",
                  }}
                >
                  {" "}
                  <strong>HackCommerce</strong>
                </h4>
              </span>

              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className="active-menu">
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Cart">
                      <span>Shop</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile">
                      <span>Profile</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/login">
                      <span>Login</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/register">
                      <span>Register</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/admin">
                      <span>Admin</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="wrap-icon-header flex-w flex-r-m ">
                <div className="flex-c-m h-full p-r-24 position_relative">
                  <SearchBox />
                </div>
                <div className="flex-c-m h-full p-lr-10 ">
                  <div
                    className="icon-header-item cl2 hov-cl1 trans-04  p-r-11 icon-header-noti js-show-cart "
                    data-notify={productsAmount}
                  >
                    <Link to="/cart">
                      <i className="zmdi zmdi-shopping-cart"></i>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex-c-m h-full p-l-18 p-r-25 bor5"
                  style={{ fontFamily: "Poppins-Regular", fontWeight: "80px" }}
                >
                  Logout
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="wrap-header-mobile">
          <div className="logo-mobile">
            <a href="/" className="logo ml-4 mt-1">
              <img
                src="https://image.flaticon.com/icons/png/512/3184/3184948.png"
                style={{ width: "30px" }}
                alt="IMG-LOGO"
              />
              <h4
                className="ml-3 text-dark"
                style={{ fontFamily: "Poppins-Regular", fontWeight: "100px" }}
              >
                <strong>HC</strong>
              </h4>
            </a>
          </div>
          <div className="wrap-icon-header flex-w flex-r-m h-full m-r-15">
            <div className="flex-c-m h-full p-lr-10 ">
              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
                data-notify={productsAmount}
              >
                <Link to="/cart">
                  <i className="zmdi zmdi-shopping-cart"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* button hamburguesa */}
          <button
            className="navbar-toggler first-button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent20"
            aria-controls="navbarSupportedContent20"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`animated-icon1 ${isMenuOpen && "open"}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div
            className={`collapse navbar-collapse menu-mobile ${
              isMenuOpen && "show"
            }`}
            id="navbarSupportedContent20"
          >
            <ul className="navbar-nav mr-auto button-item">
              <li>
                <Link to="/" className="nav-item">
                  <span className="button-item">Home</span>
                </Link>
              </li>

              <li>
                <a href="product.html" className="nav-item">
                  <span className="button-item">Shop</span>
                </a>
              </li>

              <li>
                <Link to="/profile" className="nav-item">
                  <span className="button-item">Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-item">
                  <span className="button-item">Login</span>
                </Link>
              </li>

              <li>
                <Link to="/register" className="nav-item">
                  <span className="button-item">Register</span>
                </Link>
              </li>
              <li>
                <Link to="/admin" className="nav-item">
                  <span className="button-item">Admin</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div> */}
          {/* <div className="menu-mobile">
            <ul className="main-menu-m">
              <li className="active-menu">
                <Link to="/" className="nav-item">
                  <span className="nav-link">Home</span>
                </Link>
              </li>

              <li>
                <Link to="/cart">
                  <span>Shop</span>
                </Link>
              </li>

              <li>
                <Link to="/profile">
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </li>

              <li>
                <Link to="/register">
                  <span>Register</span>
                </Link>
              </li>
              <li>
                <Link to="/admin">
                  <span>Admin</span>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
