import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function CategoriesAdmin() {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

  const handleClick = (e) => setData(e);

  const url = process.env.REACT_APP_BACK_END_URL + "/category";

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(url);
        setCategories(response.data.categories);
        //console.log(response.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, [url]);
  return (
    <div>
      <div>
        <h3 className="mb-5">Categories</h3>
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
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
                  name="name"
                  className="form-control"
                  defaultValue={data.name}
                />
                <button type="submit" className="btn btn-primary mt-4">
                  Save
                </button>
              </form>
              <h4 className="mb-3 mt-5">Create:</h4>
              <form action="" className="border border-secondary p-3">
                <label htmlFor="newName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="newName"
                  name="newName"
                  className="form-control"
                />
                <button type="submit" className="btn btn-primary mt-4">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesAdmin;
