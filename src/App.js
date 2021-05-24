import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Modal from "./components/Modal";
import LoginPage from "./Pages/LoginPage";
import Cart from "./components/Cart.jsx";
import RegisterPage from "./Pages/RegisterPage";
import AdminPage from "./Pages/AdminPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path="/article/:slug" component={Modal} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/admin" component={AdminPage} />
      <Footer />
    </div>
  );
}

export default App;
