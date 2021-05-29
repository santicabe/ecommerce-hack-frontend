import React from "react";
import { useEffect, useState } from "react";
import actions from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CartSingleItem({ item }) {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const [ProductToCart, setProductToCart] = useState({});

  useEffect(() => {
    setProductToCart({
      name: item.name,
      quantity: itemQuantity,
    });
  }, [itemQuantity, item.name]);

  const handleClickOnCartADD = (e) => {
    dispatch(actions.add_1(ProductToCart));
  };
  const handleClickOnCartSUBSTRACT = (e) => {
    dispatch(actions.substract_1(ProductToCart));
  };

  const handleClickRubbish = (e) => {
    e.preventDefault();
    console.log("Hola wey");
  };

  return (
    <tr className="table_row">
      <td className="column-1">
        <div className="how-itemcart1">
          <img src={item.image} alt={item.name} />
        </div>
      </td>
      <td className="column-2">{item.name}</td>
      <td className="column-3">$ {item.price}</td>

      <td className="column-4">
        <div className="wrap-num-product flex-w m-l-auto m-r-0">
          <div
            onClick={() => {
              if (itemQuantity > 1) setItemQuantity(itemQuantity - 1);
              handleClickOnCartSUBSTRACT();
            }}
            className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
          >
            <i className="fs-16 zmdi zmdi-minus"></i>
          </div>
          <input
            className="mtext-104 cl3 txt-center num-product"
            type="number"
            name="num-product"
            value={itemQuantity}
          />

          <div
            onClick={() => {
              setItemQuantity(itemQuantity + 1);
              handleClickOnCartADD();
            }}
            className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
          >
            <i className="fs-16 zmdi zmdi-plus"></i>
          </div>
        </div>
      </td>

      <td className="column-5">${item.price * item.quantity} </td>
      <td className="column-6">
        <link rel="stylesheet" href="">
          <i
            onClick={handleClickRubbish}
            className="fa fa-trash ml-5 bg-red"
            style={{ fontSize: "1.3rem" }}
            aria-hidden="true"
          ></i>{" "}
        </link>
      </td>
    </tr>
  );
}

export default CartSingleItem;
