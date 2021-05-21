import React from "react";
import { useState } from "react";

// Funcion para hacer el registro del usuario, se activa con el form submit, se declara en cada input del form como value de ejemplo (firstname) y
// onChange de ese mismo input se declara la funcion que setEjemplo (setFirstname) del value.

/* const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState(""); */

function Register() {
  // const handSignUp = (event) => {
  //   event.preventDefault();
  //   const sendData = async () => {
  //     try {
  //       const response = await axios.post("aca va el link de la API", {
  //         firstname: firstname,
  //         lastname: lastname,
  //         email: email,
  //         username: username,
  //         password: password,
  //       });
  //       // console.log(response);
  //       if (response.data)
  //         dispatch({
  //           type: "SET_USER",
  //           payload: response.data,
  //         });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   sendData();
  // };

  return (
    <>
      <div className="container">
        <div
          className="wrapper"
          style={{ backgroundImage: `url(images/bg-registration-form-1.jpg)` }}
        >
          <div className="inner">
            <div className="image-holder">
              <img src="images/registration-form-1.jpg" alt="" />
            </div>
            <form action="">
              <h3>Registration Form</h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
              <div className="form-wrapper">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                />
                <i className="zmdi zmdi-account"></i>
              </div>
              <div className="form-wrapper">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="form-control"
                />
                <i className="zmdi zmdi-email"></i>
              </div>
              <div className="form-wrapper">
                <select name="" id="" className="form-control">
                  <option value="" disabled selected>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="femal">Female</option>
                  <option value="other">Other</option>
                </select>
                <i
                  className="zmdi zmdi-caret-down"
                  style={{ fontSize: "17px" }}
                ></i>
              </div>
              <div className="form-wrapper">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
                <i className="zmdi zmdi-lock"></i>
              </div>
              <div className="form-wrapper">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                />
                <i className="zmdi zmdi-lock"></i>
              </div>
              <button>
                Register
                <i className="zmdi zmdi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
