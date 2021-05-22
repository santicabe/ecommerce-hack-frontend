import React from "react";

function CarSingleItem({ item }) {
  console.log(item);
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
          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
            <i className="fs-16 zmdi zmdi-minus"></i>
          </div>

          <input
            className="mtext-104 cl3 txt-center num-product"
            type="number"
            name="num-product2"
            defaultValue="1"
          />

          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
            <i className="fs-16 zmdi zmdi-plus"></i>
          </div>
        </div>
      </td>
      <td className="column-5">$ {item.price}</td>
    </tr>
  );
}

export default CarSingleItem;
