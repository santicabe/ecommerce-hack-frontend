import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function OrdersAdmin() {
  const user = useSelector((state) => state.userReducer);
  const [orders, setOrders] = useState([]);
  const [showProducts, setShowProducts] = useState(0);
  const [singleOrder, setSingleOrder] = useState([]);

  const handleShowProducts = (e) => setShowProducts(e);

  const getOrders = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACK_END_URL + "/orders",
        {
          params: { id: user.userId },

          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setOrders(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getOrders();
  }, [user.token]);

  return (
    <div>
      <h3 className="text-center">Orders</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">User Id</th>
                  <th scope="col">Purchase Date</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Show Products</th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((item) => (
                    <tr>
                      <td>{item.id && item.id}</td>
                      <td>{item.userId && item.userId}</td>
                      <td>{item.updatedAt && item.updatedAt}</td>
                      <td>{item.totalPrice && item.totalPrice}</td>
                      <td>{item.status.name && item.status.name}</td>

                      <td>
                        {" "}
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => {
                            handleShowProducts(1);
                            setSingleOrder(item);
                          }}
                        >
                          View Products
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="col">
            {showProducts === 1 ? (
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Description</th>
                      <th scope="col">Quantity</th>

                      <th scope="col">Unit Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {singleOrder.products &&
                      singleOrder.products.map((item) => (
                        <tr>
                          <td>{item.name && item.name}</td>
                          <td>{item.description && item.description}</td>
                          <td>
                            {item.orderProduct.productQuantity &&
                              item.orderProduct.productQuantity}
                          </td>
                          <td>
                            {item.orderProduct.productPrice &&
                              item.orderProduct.productPrice}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      handleShowProducts(0);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersAdmin;
