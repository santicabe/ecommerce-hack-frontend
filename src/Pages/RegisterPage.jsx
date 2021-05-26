import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/actions/userActions";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [adress, setAdress] = useState("");
  // const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      process.env.REACT_APP_BACK_END_URL + "/users",

      {
        firstName,
        lastName,
        userName,
        email,
        password,
        // adress,
        // phone,
      },
      {
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        //   "Content-Type": "application/json",
        // },
      }
    );
    console.log("respuesta", response.data);
    if (response.data) {
      dispatch(actions.setUser(response.data));
      history.push("/");
    }
  };

  return (
    <>
      <div className="container" style={{ maxWidth: "40rem" }}>
        <div
          className="wrapper"
          style={{ backgroundImage: `url(images/bg-registration-form-1.jpg)` }}
        >
          <div className="inner border border-secondary p-3 mb-3 mt-3">
            <div className="image-holder">
              <img src="images/registration-form-1.jpg" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <h3>Register</h3>
              <div className="form-group mt-3">
                <input
                  placeholder="First Name"
                  className="form-control"
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  autoComplete="off"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="form-wrapper my-3">
                <input
                  placeholder="Last Name"
                  className="form-control"
                  id="lastName"
                  type="text"
                  name="lastName"
                  required
                  autoComplete="off"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="form-wrapper my-3">
                <input
                  placeholder="Username"
                  className="form-control"
                  id="userName"
                  type="text"
                  name="userName"
                  required
                  autoComplete="off"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div className="form-wrapper my-3">
                <input
                  placeholder="Email Address"
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-wrapper my-3">
                <input
                  placeholder="Password"
                  className="form-control"
                  id="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="off"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button class="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04 mb-2 mt-3">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
