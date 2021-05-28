import "../cozastore/css/main.css";
import "../cozastore/css/util.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import React from "react";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer);
  let productsAmount = 0;
  console.log(cart);
  cart.forEach((item) => {
    productsAmount += item.quantity;
    console.log(productsAmount);
  });

  return (
    <div className="bg-danger">
      <header className="header-v2">
        <div className="container-menu-desktop trans-03 ">
          <div className="wrap-menu-desktop ">
            <nav className="limiter-menu-desktop ">
              <a href="/" className="logo ml-5">
                <img
                  src="https://image.flaticon.com/icons/png/512/3184/3184948.png"
                  //https://image.flaticon.com/icons/png/512/4710/4710022.png
                  //https://image.flaticon.com/icons/png/512/3184/3184948.png

                  alt="IMG-LOGO"
                />
                <h4
                  className="ml-3 text-dark"
                  style={{ fontFamily: "Poppins-Regular", fontWeight: "80px" }}
                >
                  {" "}
                  <strong>HackCommerce</strong>
                </h4>
              </a>
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className="active-menu">
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <a href="product.html">Shop</a>
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

              <div className="wrap-icon-header flex-w flex-r-m h-full">
                <div className="flex-c-m h-full p-r-24">
                  <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
                    <i className="zmdi zmdi-search"></i>
                  </div>
                </div>
                <div className="flex-c-m h-full p-lr-10 ">
                  <div
                    className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart mr-2"
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
            <div className="flex-c-m h-full p-r-10">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
                <i className="zmdi zmdi-search"></i>
              </div>
            </div>
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
          <button
            class="navbar-toggler second-button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent23"
            aria-controls="navbarSupportedContent23"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="animated-icon2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent23">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div> */}
          <div className="menu-mobile">
            <ul className="main-menu-m">
              <li className="active-menu">
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <a href="product.html">Shop</a>
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
        </div>
      </header>
    </div>
  );
}

export default Navbar;
