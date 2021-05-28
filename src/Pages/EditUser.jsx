import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function EditUser() {
  const user = useSelector((state) => state.userReducer);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_BACK_END_URL + `/users/${user.userId}`
        );
        setUserLoggedIn(response.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <div>
      <h3 className="ltext-103 cl5">User</h3>

      <div class="container">
        <div class="row align-items-start">
          <div class="col">
            <div className="container mw-50 mb-5 d-flex justify-content-start flex-column">
              <h4 className="mb-3 mt-5">Account details</h4>
              <div>
                <table class="table table-striped border">
                  <tbody>
                    <tr>
                      <td scope="row">
                        <strong>Firstname</strong>
                      </td>
                      <td>{userLoggedIn.firstName}</td>
                    </tr>
                    <tr>
                      <td scope="row">Lastname</td>
                      <td>{userLoggedIn.lastName}</td>
                    </tr>
                    <tr>
                      <td scope="row">UserName</td>
                      <td>{userLoggedIn.userName}</td>
                    </tr>
                    <tr>
                      <td scope="row">Email</td>
                      <td>{userLoggedIn.email}</td>
                    </tr>
                    <tr>
                      <td scope="row">Phone</td>
                      <td>{userLoggedIn.phone}</td>
                    </tr>
                    <tr>
                      <td scope="row">Address</td>
                      <td>{userLoggedIn.address}</td>
                    </tr>
                  </tbody>
                </table>
                <button className="btn btn-primary">Edit</button>
              </div>
            </div>
          </div>
          <div class="col">
            <h4 className="mb-3 mt-5">Edit user:</h4>
            <div className="container mw-50 mb-5">
              <form action="" className="border p-3">
                <label htmlFor="userName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="FirstName"
                  className="form-control"
                  //   defaultValue={data.userName}
                />
                <label htmlFor="lastName" className="mt-3">
                  Last Name
                </label>
                <input
                  name="lastName"
                  id="lastName"
                  className="form-control"
                  //   defaultValue={data.email}
                />
                <label htmlFor="email" className="mt-3">
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  className="form-control"
                  //   defaultValue={data.email}
                />
                <label htmlFor="phone" className="mt-3">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="form-control"
                  //   defaultValue={data.email}
                />
                <label htmlFor="password" className="mt-3">
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  className="form-control"
                  //   defaultValue={data.email}
                />
                <label htmlFor="address" className="mt-3">
                  Address
                </label>
                <input
                  name="address"
                  id="address"
                  className="form-control"
                  //   defaultValue={data.email}
                />

                <button type="submit" className="btn btn-primary mt-4">
                  Save!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
