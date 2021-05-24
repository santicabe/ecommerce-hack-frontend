import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function UsersAdmin() {
  const [usuarios, setUsuarios] = useState([]);
  const [data, setData] = useState([]);

  const handleClick = (e) => setData(e);

  const url = "";

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(url);
        setUsuarios(response.data.products);
        //console.log(response.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      <h3 className="mb-5">Users</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Is Active</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((item) => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.userName}</td>
                    <td>$ {item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.isActive}</td>
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
              <label htmlFor="userName" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="userName"
                name="UserName"
                className="form-control"
                defaultValue={data.userName}
              />
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
              {data.isActive === true ? (
                <select id="isActive" name="isActive" className="form-control">
                  <option selected="true">True</option>
                  <option value="false">False</option>
                </select>
              ) : (
                <select id="isActive" name="isActive" className="form-control">
                  <option value="true">True</option>
                  <option selected="false">False</option>
                </select>
              )}

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

export default UsersAdmin;
