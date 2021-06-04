import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

function UsersAdmin() {
  const user = useSelector((state) => state.userReducer);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const [role, setRole] = useState("");
  const [isActive, setIsActive] = useState("");
  const [edit, setEdit] = useState(false);

  console.log(data);
  const { addToast } = useToasts();

  console.log(role);
  console.log(isActive);

  const handleEdit = (e) => setEdit(e);
  const handleClick = (e) => setData(e);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACK_END_URL + "/users",
        {
          params: { id: user.userId },

          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setUsers(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  async function onFormSubmit(e) {
    e.preventDefault();
    const response = await axios.patch(
      process.env.REACT_APP_BACK_END_URL + `/usersAdmin/${data.id}`,
      {
        role,
        isActive,
      },
      {
        params: { id: user.userId },

        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    getUsers();
    setEdit(false);
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
      <h3 className="mb-5 text-center">Users</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col" className="w-2">
                    Name
                  </th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">isActive</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td
                        style={{
                          wordBreak: "break-all",
                          wordWrap: "break-word",
                        }}
                      >
                        {item.firstName} {item.lastName}
                      </td>
                      <td>{item.email}</td>
                      <td>{item.role}</td>
                      <td>{String(item.isActive)}</td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => {
                            handleClick(item);
                            handleEdit(true);
                            window.scrollTo(0, 0);
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
          <div className="col-md-4">
            {edit === true ? (
              <div>
                {" "}
                <h4 className="mb-3 text-center">Edit:</h4>
                <form
                  className="border border-secondary p-3 mb-4"
                  onSubmit={onFormSubmit}
                >
                  <label htmlFor="role" className="mt-3">
                    Role
                  </label>
                  {data.role === "admin" ? (
                    <select
                      id="role"
                      name="role"
                      className="form-control"
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="client">Client</option>
                      <option selected="admin">Admin</option>
                    </select>
                  ) : (
                    <select
                      id="role"
                      name="role"
                      className="form-control"
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option selected="client">Client</option>
                      <option value="admin">Admin</option>
                    </select>
                  )}

                  <label htmlFor="isActive" className="mt-3">
                    Is active
                  </label>
                  {String(data.isActive) === "true" ? (
                    <select
                      id="isActive"
                      name="isActive"
                      className="form-control"
                      onChange={(e) => setIsActive(e.target.value)}
                    >
                      <option selected={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  ) : (
                    <select
                      id="isActive"
                      name="isActive"
                      className="form-control"
                      onChange={(e) => setIsActive(e.target.value)}
                    >
                      <option value={true}>True</option>
                      <option selected={false}>False</option>
                    </select>
                  )}
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
  );
}

export default UsersAdmin;
