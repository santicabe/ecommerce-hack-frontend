import { useEffect, useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

function ProductsAdmin() {
  // const history = useHistory();
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [isFeatured, setIsFeatured] = useState(true);
  const [edit, setEdit] = useState(false);

  const user = useSelector((state) => state.userReducer);
  // const dispatch = useDispatch();
  const handleClick = (e) => setItem(e);
  const handleEdit = (e) => setEdit(e);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACK_END_URL + "/products/admin",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("categoryId", categoryId);
    formData.append("stock", stock);
    formData.append("isFeatured", isFeatured);

    const sendData = async () => {
      try {
        await axios({
          method: "PATCH",
          url: process.env.REACT_APP_BACK_END_URL + `/products/${item.id}`,
          data: formData,
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
    sendData();
    // history.push(`/article/${slug}`);   encontrar forma de llegar a "slug"
  };

  return (
    <div>
      <h3 className="mb-5 text-center">Products</h3>
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
                {products &&
                  products.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>$ {item.price}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => {
                            handleEdit(true);
                            handleClick(item);
                          }}
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
            {edit === true ? (
              <div>
                {" "}
                <h4 className="mb-3 text-center">Edit:</h4>
                <form
                  //action="POST"
                  className="border border-secondary rounded p-3"
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
                      <option selected={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  ) : (
                    <select
                      id="isFeatured"
                      name="isFeatured"
                      className="form-control"
                      onChange={(e) => setIsFeatured(e.target.value)} //ver si funciona
                    >
                      <option value={true}>True</option>
                      <option selected={false}>False</option>
                    </select>
                  )}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-4"
                      onClick={() => handleEdit(false)}
                    >
                      Save
                    </button>
                  </div>
                </form>
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

export default ProductsAdmin;
