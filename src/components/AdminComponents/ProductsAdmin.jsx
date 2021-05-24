import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function ProductsAdmin() {
  const [productos, setProductos] = useState([]);
  const [item, setItem] = useState([]);

  const handleClick = (e) => setItem(e);

  const url =
    "https://ecommerce-hack-back-j8jdpvzd0-joaquinetchegaray.vercel.app/products";

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(url);
        setProductos(response.data.products);
        //console.log(response.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <h3 className="mb-5">Products</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((item) => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>$ {item.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleClick(item)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col">
            <h4 className="mb-3">Edit:</h4>
            <form action="" className="border border-secondary p-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                defaultValue={item.name}
              />
              <label htmlFor="description" className="mt-3">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="3"
                className="form-control"
                defaultValue={item.description}
              ></textarea>
              <label htmlFor="image" className="mt-3">
                Image
              </label>
              <input
                type="text"
                id="image"
                className="form-control"
                defaultValue={item.image}
              />
              <label htmlFor="price" className="mt-3">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="form-control"
                defaultValue={item.price}
              />
              <label htmlFor="categoryId" className="mt-3">
                Category Id
              </label>
              <input
                type="number"
                name="categoryId"
                id="categoryId"
                className="form-control"
                defaultValue={item.categoryId}
              />
              <label htmlFor="stock" className="mt-3">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                className="form-control"
                defaultValue={item.stock}
              />
              <label htmlFor="isFeatured" className="mt-3">
                Is Featured
              </label>
              <input
                type="text"
                id="isFeatured"
                className="form-control"
                defaultValue={item.isFeatured}
              />
              <label htmlFor="slug" className="mt-3">
                Slug
              </label>
              <input
                type="text"
                id="slug"
                className="form-control"
                defaultValue={item.slug}
              />
              <button type="submit" className="btn btn-primary mt-4">
                Save!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsAdmin;
