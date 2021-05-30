import "../cozastore/css/main.css";
import "../cozastore/css/util.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
// import "./js/hamburger";

import React from "react";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer);
  let productsAmount = 0;

  cart.forEach((item) => {
    productsAmount += item.quantity;
  });
  // return (
  //   <header>
  //     <div class="container-menu-desktop">
  //       <div class="top-bar">
  //         <div class="content-topbar flex-sb-m h-full container">
  //           <div class="left-top-bar">
  //             Free shipping for standard order over $100
  //           </div>

  //           <div class="right-top-bar flex-w h-full">
  //             <a href="#" class="flex-c-m trans-04 p-lr-25">
  //               Help FAQs
  //             </a>

  //             <a href="#" class="flex-c-m trans-04 p-lr-25">
  //               My Account
  //             </a>

  //             <a href="#" class="flex-c-m trans-04 p-lr-25">
  //               EN
  //             </a>

  //             <a href="#" class="flex-c-m trans-04 p-lr-25">
  //               USD
  //             </a>
  //           </div>
  //         </div>
  //       </div>

  //       <div class="wrap-menu-desktop">
  //         <nav class="limiter-menu-desktop container">
  //           <a href="#" class="logo">
  //             <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
  //           </a>

  //           <div class="menu-desktop">
  //             <ul class="main-menu">
  //               <li class="active-menu">
  //                 <a href="index.html">Home</a>
  //                 <ul class="sub-menu">
  //                   <li>
  //                     <a href="index.html">Homepage 1</a>
  //                   </li>
  //                   <li>
  //                     <a href="home-02.html">Homepage 2</a>
  //                   </li>
  //                   <li>
  //                     <a href="home-03.html">Homepage 3</a>
  //                   </li>
  //                 </ul>
  //               </li>

  //               <li>
  //                 <a href="product.html">Shop</a>
  //               </li>

  //               <li class="label1" data-label1="hot">
  //                 <a href="shoping-cart.html">Features</a>
  //               </li>

  //               <li>
  //                 <a href="blog.html">Blog</a>
  //               </li>

  //               <li>
  //                 <a href="about.html">About</a>
  //               </li>

  //               <li>
  //                 <a href="contact.html">Contact</a>
  //               </li>
  //             </ul>
  //           </div>

  //           <div class="wrap-icon-header flex-w flex-r-m">
  //             <div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
  //               <i class="zmdi zmdi-search"></i>
  //             </div>

  //             <div
  //               class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
  //               data-notify="2"
  //             >
  //               <i class="zmdi zmdi-shopping-cart"></i>
  //             </div>

  //             <a
  //               href="#"
  //               class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
  //               data-notify="0"
  //             >
  //               <i class="zmdi zmdi-favorite-outline"></i>
  //             </a>
  //           </div>

  //         </nav>
  //       </div>
  //     </div>

  //     <div class="wrap-header-mobile">
  //       <div class="logo-mobile">
  //         <a href="index.html">
  //           <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
  //         </a>
  //       </div>

  //       <div class="wrap-icon-header flex-w flex-r-m m-r-15">
  //         <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
  //           <i class="zmdi zmdi-search"></i>
  //         </div>

  //         <div
  //           class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
  //           data-notify="2"
  //         >
  //           <i class="zmdi zmdi-shopping-cart"></i>
  //         </div>

  //         <a
  //           href="#"
  //           class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
  //           data-notify="0"
  //         >
  //           <i class="zmdi zmdi-favorite-outline"></i>
  //         </a>
  //       </div>

  //       <div class="btn-show-menu-mobile hamburger hamburger--squeeze">
  //         <span class="hamburger-box">
  //           <span class="hamburger-inner"></span>
  //         </span>
  //       </div>
  //     </div>

  //     <div class="menu-mobile">
  //       <ul class="topbar-mobile">
  //         <li>
  //           <div class="left-top-bar">
  //             Free shipping for standard order over $100
  //           </div>
  //         </li>

  //         <li>
  //           <div class="right-top-bar flex-w h-full">
  //             <a href="#" class="flex-c-m p-lr-10 trans-04">
  //               Help FAQs
  //             </a>

  //             <a href="#" class="flex-c-m p-lr-10 trans-04">
  //               My Account
  //             </a>

  //             <a href="#" class="flex-c-m p-lr-10 trans-04">
  //               EN
  //             </a>

  //             <a href="#" class="flex-c-m p-lr-10 trans-04">
  //               USD
  //             </a>
  //           </div>
  //         </li>
  //       </ul>

  //       <ul class="main-menu-m">
  //         <li>
  //           <a href="index.html">Home</a>
  //           <ul class="sub-menu-m">
  //             <li>
  //               <a href="index.html">Homepage 1</a>
  //             </li>
  //             <li>
  //               <a href="home-02.html">Homepage 2</a>
  //             </li>
  //             <li>
  //               <a href="home-03.html">Homepage 3</a>
  //             </li>
  //           </ul>
  //           <span class="arrow-main-menu-m">
  //             <i class="fa fa-angle-right" aria-hidden="true"></i>
  //           </span>
  //         </li>

  //         <li>
  //           <a href="product.html">Shop</a>
  //         </li>

  //         <li>
  //           <a href="shoping-cart.html" class="label1 rs1" data-label1="hot">
  //             Features
  //           </a>
  //         </li>

  //         <li>
  //           <a href="blog.html">Blog</a>
  //         </li>

  //         <li>
  //           <a href="about.html">About</a>
  //         </li>

  //         <li>
  //           <a href="contact.html">Contact</a>
  //         </li>
  //       </ul>
  //     </div>

  //     <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
  //       <div class="container-search-header">
  //         <button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
  //           <img src="images/icons/icon-close2.png" alt="CLOSE" />
  //         </button>

  //         <form class="wrap-search-header flex-w p-l-15">
  //           <button class="flex-c-m trans-04">
  //             <i class="zmdi zmdi-search"></i>
  //           </button>
  //           <input
  //             class="plh3"
  //             type="text"
  //             name="search"
  //             placeholder="Search..."
  //           />
  //         </form>
  //       </div>
  //     </div>
  //   </header>
  // );

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
                  style={{ fontFamily: "Poppins-Regular", fontWeight: "80px" }}
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
            {/* <div className="flex-c-m h-full p-r-10">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
                  <i className="zmdi zmdi-search"></i>
                </div>
              </div> */}
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
              <Link to="/">
                <li class="nav-item active">
                  Home <span class="sr-only">(current)</span>
                </li>
              </Link>

              <li class="nav-item">
                <a class="nav-link" href="/">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
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
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
