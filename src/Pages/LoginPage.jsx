import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/actions/userActions";
// import { useToasts } from "react-toast-notifications";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  // const { addToast } = useToasts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      process.env.REACT_APP_BACK_END_URL + "/tokens",
      {
        user: userName,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("respuesta", response.data);

    if (response.data) {
      dispatch(actions.setUser(response.data));
      history.push("/");
      // addToast("Bienvenido!", {
      //   autoDismiss: true,
      //   appearance: "success",
      // });
    }
  };
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
  return (
    <>
      <div className="container " style={{ maxWidth: "40rem" }}>
        <div
          className="wrapper"
          style={{ backgroundImage: `url(images/bg-registration-form-1.jpg)` }}
        >
          <div className="inner">
            <div className="image-holder">
              <img src="images/registration-form-1.jpg" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <h3>Login</h3>

              <div className="form-wrapper my-3">
                <input
                  placeholder="Email or username"
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

              <button className="btn btn-secondary my-3">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
