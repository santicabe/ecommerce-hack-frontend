import "./App.css";
import Navbar from "./components/extra_components/Navbar";
import Footer from "./components/extra_components/Footer";
import { Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Modal from "./components/extra_components/Modal";
import Login from "./components/Pages/Login";
import Cart from "./components/extra_components/Cart";
import Register from "./components/Pages/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/article/:slug" component={Modal} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <Footer />
    </div>
  );
}

export default App;
