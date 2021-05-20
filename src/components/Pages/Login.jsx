// import "../../colorlib-regform-17/css/style.css"
import React from "react";

function Login() {
 //funcion para verificar el Login, la constante checkCredentials se tiene que hacer un onSumbit del form en Login
  // const checkCredentials = (event) => {
  //   event.preventDefault();
  //   const getToken = async () => { //falta setear el Token, pero se genera el token con esta data
  //     try {
  //       const response = await axios.post(`aca va el link de la API`, {
  //         email: email,
  //         password: password,
  //       });
  //       console.log(response.data);
  //       if (response.data)
  //         dispatch({
  //           type: "SET_USER",
  //           payload: response.data,
  //         });
  //     } catch (err) {
  //       setMessageError(true);
  //     }
  //   };
  //   getToken();
  // };
  return <div><div
        className="wrapper"
        style={{backgroundImage:`url(images/bg-registration-form-1.jpg)`}}
      >
        <div className="inner">
          <div className="image-holder">
            <img src="images/registration-form-1.jpg" alt="" />
          </div>
          <form action="">
            <h3>Login</h3>
            <div className="form-wrapper">
              <input type="text" placeholder="Username" className="form-control" />
              <i className="zmdi zmdi-account"></i>
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
              />
              <i className="zmdi zmdi-lock"></i>
            </div>
            <button>
              Login
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div></div>;
}

export default Login;
