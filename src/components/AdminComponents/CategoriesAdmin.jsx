import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

function CategoriesAdmin() {
  const user = useSelector((state) => state.userReducer);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(0);
  const [name, setName] = useState("");
  console.log(data);
  const { addToast } = useToasts();

  const handleClick = (e) => setData(e);
  const handleEdit = (e) => setEdit(e);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACK_END_URL + "/category",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setCategories(response.data.categories);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategories();
  }, [user.token]);

  async function onFormSubmit(e) {
    e.preventDefault();
    const response = await axios.patch(
      process.env.REACT_APP_BACK_END_URL + `/category/${data.id}`,
      {
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setEdit(0);
    getCategories();
    if (response.data) {
      addToast("Done!", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      addToast("Try again!", {
        autoDismiss: true,
        appearance: "warning",
      });
    }
  }

  async function onFormSubmitCreate(e) {
    e.preventDefault();
    const response = await axios.post(
      process.env.REACT_APP_BACK_END_URL + `/category`,
      {
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setEdit(0);
    getCategories();
    if (response.data) {
      addToast("Done!", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      addToast("Try again!", {
        autoDismiss: true,
        appearance: "warning",
      });
    }
  }
  return (
    <div>
      <div>
        <h3 className="mb-5 text-center">Categories</h3>
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
                          onClick={() => {
                            handleClick(item);
                            handleEdit(1);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center">
                <button
                  className="btn btn-primary "
                  onClick={() => handleEdit(2)}
                >
                  Create
                </button>
              </div>
            </div>
            <div className="col mb-4">
              {edit === 1 ? (
                <div>
                  <h4 className="mb-3 text-center">Edit:</h4>
                  <form
                    action=""
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
                      defaultValue={data.name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="text-center">
                      {" "}
                      <button type="submit" className="btn btn-primary mt-4">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              ) : edit === 2 ? (
                <div>
                  <h4 className="mb-3 text-center">Create:</h4>
                  <form
                    action=""
                    className="border border-secondary p-3"
                    onSubmit={onFormSubmitCreate}
                  >
                    <label htmlFor="newName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="newName"
                      name="newName"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary mt-4">
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
    </div>
  );
}

export default CategoriesAdmin;
