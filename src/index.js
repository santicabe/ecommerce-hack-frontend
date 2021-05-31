import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { MyCustomToastContainer } from "./components/MyCustomToastContainer.jsx";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastProvider
              components={{ ToastContainer: MyCustomToastContainer }}
              placement="top-right"
              placementOffset={[200, 50]}
            >
              <App />
            </ToastProvider>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
