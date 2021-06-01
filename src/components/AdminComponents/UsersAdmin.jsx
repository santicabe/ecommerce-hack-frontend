import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";

function UsersAdmin() {
  const user = useSelector((state) => state.userReducer);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isActive, setisActive] = useState("");
  const [edit, setEdit] = useState(false);

  console.log(data);

  const handleEdit = (e) => setEdit(e);
  const handleClick = (e) => setData(e);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACK_END_URL + "/users",
        {
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
    await axios.patch(
      process.env.REACT_APP_BACK_END_URL + `/users/${user.userId}`,
      {
        userName,
        email,
        role,
        isActive,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    getUsers();
  }

  return (
    <div>
      <h3 className="mb-5 text-center">Users</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Is Active</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>
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
                  action=""
                  onSubmit={onFormSubmit}
                  className="border border-secondary p-3 mb-4"
                >
                  <div className="text-start">
                    <label htmlFor="userName" className="form-label text-start">
                      Username
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="UserName"
                      className="form-control"
                      defaultValue={data.userName}
                    />
                  </div>
                  <label htmlFor="email" className="mt-3">
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    className="form-control"
                    defaultValue={data.email}
                  />
                  <label htmlFor="role" className="mt-3">
                    Role
                  </label>
                  {data.role === "admin" ? (
                    <select id="role" name="role" className="form-control">
                      <option value="client">Client</option>
                      <option selected="admin">Admin</option>
                    </select>
                  ) : (
                    <select id="role" name="role" className="form-control">
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
                    >
                      <option selected={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  ) : (
                    <select
                      id="isActive"
                      name="isActive"
                      className="form-control"
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
                </form>{" "}
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
