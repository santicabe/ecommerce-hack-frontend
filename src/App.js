import "./App.css";
import Navbar from "./components/extra_components/Navbar";
import Footer from "./components/extra_components/Footer";

import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
