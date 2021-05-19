import "./App.css";
import Navbar from "./components/extra_components/Navbar";
import Footer from "./components/extra_components/Footer";
import { Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Modal from "./components/extra_components/Modal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/modal" component={Modal} />
      <Footer />
    </div>
  );
}

export default App;
