import "./App.css";
import Navbar from "./components/extra_components/Navbar";
import Footer from "./components/extra_components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Modal from "./components/extra_components/Modal";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/modal" component={Modal} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
