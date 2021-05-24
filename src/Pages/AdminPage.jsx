import React from "react";
import { useState } from "react";
import UsersAdmin from "../components/AdminComponents/UsersAdmin";
import ProductsAdmin from "../components/AdminComponents/ProductsAdmin";
import OrdersAdmin from "../components/AdminComponents/OrdersAdmin";
import CategoriesAdmin from "../components/AdminComponents/CategoriesAdmin";

function Admin() {
  const [menu, setMenu] = useState(0);
  const handleClick = (e) => setMenu(e);

  return (
    <div>
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">Admin</h3>
        </div>
        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
          {menu === 0 ? (
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
              data-filter="*"
              onClick={() => handleClick(0)}
            >
              Users
            </button>
          ) : (
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
              data-filter="*"
              onClick={() => handleClick(0)}
            >
              Users
            </button>
          )}
          {menu === 1 ? (
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
              data-filter="*"
              onClick={() => handleClick(1)}
            >
              Products
            </button>
          ) : (
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
              data-filter="*"
              onClick={() => handleClick(1)}
            >
              Products
            </button>
          )}
          {menu === 2 ? (
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
              data-filter="*"
              onClick={() => handleClick(2)}
            >
              Orders
            </button>
          ) : (
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
              data-filter="*"
              onClick={() => handleClick(2)}
            >
              Orders
            </button>
          )}
          {menu === 3 ? (
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
              data-filter="*"
              onClick={() => handleClick(3)}
            >
              Categories
            </button>
          ) : (
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
              data-filter="*"
              onClick={() => handleClick(3)}
            >
              Categories
            </button>
          )}
        </div>
        {menu === 0 ? (
          <UsersAdmin />
        ) : menu === 1 ? (
          <ProductsAdmin />
        ) : menu === 2 ? (
          <OrdersAdmin />
        ) : (
          <CategoriesAdmin />
        )}
      </div>
    </div>
  );
}

export default Admin;
