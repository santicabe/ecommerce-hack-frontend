import React from "react";
import "../../colorlib-regform-17/css"

function Login() {
 //funcion para verificar el Login, la constante checkCredentials se tiene que hacer un onSumbit del form en Login
  const checkCredentials = (event) => {
    event.preventDefault();
    const getToken = async () => { //falta setear el Token, pero se genera el token con esta data
      try {
        const response = await axios.post(`aca va el link de la API`, {
          email: email,
          password: password,
        });
        console.log(response.data);
        if (response.data)
          dispatch({
            type: "SET_USER",
            payload: response.data,
          });
      } catch (err) {
        setMessageError(true);
      }
    };
    getToken();
  };
  return <div></div>;
}

export default Login;
