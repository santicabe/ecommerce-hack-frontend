import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function ProductsAdmin() {
  const history = useHistory();
  const [productos, setProductos] = useState([]);
  const [item, setItem] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [isFeatured, setIsFeatured] = useState(true);
  // const [slug, setSlug] = useState("");

  const user = useSelector((state) => state.user);

  const handleClick = (e) => setItem(e);

  const url = process.env.REACT_APP_BACK_END_URL + "/products/admin";
  const url2 = process.env.REACT_APP_BACK_END_URL + `/user/${item.id}`;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(url);
        setProductos(response.data.products);
        console.log(response.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(avatar);
    const formData = new FormData();
    // const fields = {
    //   name: name,
    //   description: description,
    //   image: image,
    //   price: price,
    //   stock: stock,
    //   categoryId: categoryId,
    //   isFeatured: isFeatured,
    //   slug: slug,
    // };

    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("categoryId", categoryId);
    formData.append("stock", stock);
    formData.append("isFeatured", isFeatured);
    // formData.append("slug", slug);

    const sendData = async () => {
      try {
        const response = await axios.patch(url2, formData, {
          headers: {
            "content-type": "multipart/form-data",
            // Authorization: `Bearer ${user.token}`,
          },
        });
        // console.log(response);
        if (response.data) {
          // dispatch({
          //   type: "SET_USER",
          //   payload: response.data,
          // });
          dispatch({ type: "SET_VISIT_USER", payload: response.data._doc });
        }
      } catch (err) {
        console.log(err);
      }
    };
    sendData();
    // history.push(`/username/${username}`);
    history.goBack();
  };

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
            <form
              // action="POST"
              className="border border-secondary p-3"
              onSubmit={onFormSubmit}
            >
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={name}
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

              {/* <label htmlFor="slug" className="mt-3">
                Slug
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                className="form-control"
                defaultValue={item.slug}
                onChange={(e) => setSlug(e.target.value)}
              /> */}
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
