import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import LogIn from "./LoginPage";
function EditUser() {
  const user = useSelector((state) => state.userReducer);

  const [userToEdit, setUserToEdit] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [userLoggedIn, setUserLoggedIn] = useState([]);

  const handleClick = (e) => setUserToEdit(e);
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
  }, [user.userId]);

  async function onFormSubmit(e) {
    e.preventDefault();
    await axios.patch(
      process.env.REACT_APP_BACK_END_URL + `/users/${user.userId}`,
      {
        firstName,
        lastName,
        email,
        phone,
        address,
        password,
      },
      {
        headers: {
          // Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
  }
  if (userLoggedIn === null) {
    return (
      <>
        <h1>Logueate</h1>
        <LogIn />
      </>
    );
  }
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
                      <th scope="row">
                        <strong>Firstname</strong>
                      </th>
                      <td>{userLoggedIn.firstName}</td>
                    </tr>
                    <tr>
                      <th scope="row">Lastname</th>
                      <td>{userLoggedIn.lastName}</td>
                    </tr>

                    <tr>
                      <th scope="row">Email</th>
                      <td>{userLoggedIn.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone</th>
                      <td>{userLoggedIn.phone}</td>
                    </tr>
                    <tr>
                      <th scope="row">Address</th>
                      <td>{userLoggedIn.address}</td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick(userLoggedIn)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <h4 className="mb-3 mt-5">Edit user:</h4>
            <div className="container mw-50 mb-5">
              <form action="" className="border p-3" onSubmit={onFormSubmit}>
                <label htmlFor="userName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="FirstName"
                  className="form-control"
                  defaultValue={userToEdit.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName" className="mt-3">
                  Last Name
                </label>
                <input
                  name="lastName"
                  id="lastName"
                  className="form-control"
                  defaultValue={userToEdit.lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="email" className="mt-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  defaultValue={userToEdit.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="phone" className="mt-3">
                  Phone
                </label>
                <input
                  name="phone"
                  id="phone"
                  className="form-control"
                  defaultValue={userToEdit.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="address" className="mt-3">
                  Address
                </label>
                <input
                  name="address"
                  id="address"
                  className="form-control"
                  defaultValue={userToEdit.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor="password" className="mt-3">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  // defaultValue={userToEdit.password}
                  onChange={(e) => setPassword(e.target.value)}
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

export default EditUser;
