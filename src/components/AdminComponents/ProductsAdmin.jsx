import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function ProductsAdmin() {
  const [productos, setProductos] = useState([]);
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [isFeatured, setIsFeatured] = useState(true);
  const [slug, setSlug] = useState("");

  const handleClick = (e) => setItem(e);

  const url = process.env.REACT_APP_BACK_END_URL + "/products/admin";
  const url2 = process.env.REACT_APP_BACK_END_URL + `/user/${item.id}`;

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

  useEffect(() => {
    const updateProducts = async () => {
      try {
        const response = await axios.patch(url2);
        setProductos(response.data.products);
        //console.log(response.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    updateProducts();
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
            <form action="POST" className="border border-secondary p-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                defaultValue={item.name}
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <label htmlFor="image" className="mt-3">
                Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="form-control"
                defaultValue={item.image}
                onChange={(e) => setImage(e.target.value)}
              />
              <label htmlFor="price" className="mt-3">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                defaultValue={item.price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlFor="categoryId" className="mt-3">
                Category
              </label>
              <input
                type="number"
                name="categoryId"
                id="categoryId"
                className="form-control"
                defaultValue={item.categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
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
                onChange={(e) => setStock(e.target.value)}
              />
              <label htmlFor="isFeatured" className="mt-3">
                Is Featured
              </label>
              {item.isFeatured ? (
                <select
                  id="isFeatured"
                  name="isFeatured"
                  className="form-control"
                  onChange={(e) => setIsFeatured(e.target.value)} //ver si funciona
                >
                  <option selected="true">True</option>
                  <option value="false">False</option>
                </select>
              ) : (
                <select
                  id="isFeatured"
                  name="isFeatured"
                  className="form-control"
                  onChange={(e) => setIsFeatured(e.target.value)} //ver si funciona
                >
                  <option value="true">True</option>
                  <option selected="false">False</option>
                </select>
              )}

              <label htmlFor="slug" className="mt-3">
                Slug
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                className="form-control"
                defaultValue={item.slug}
                onChange={(e) => setSlug(e.target.value)}
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
