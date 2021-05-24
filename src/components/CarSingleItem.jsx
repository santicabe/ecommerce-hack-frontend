import React from "react";

function CarSingleItem({ item }) {
  return (
    <tr className="table_row">
      <td className="column-1">
        <div className="how-itemcart1">
          <img src={item.image} alt={item.name} />
        </div>
      </td>
      <td className="column-2">{item.name}</td>
      <td className="column-3">$ {item.price}</td>
      <td className="column-4">{item.quantity}</td>
      <td className="column-5">$ {item.price}</td>
    </tr>
  );
}

export default CarSingleItem;
