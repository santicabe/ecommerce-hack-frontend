import logo from './logo.svg';
import './App.css';
import MensajeBienvenida from '../src/components/Welcome'

function App() {
  return (
    <div className="App">
      <MensajeBienvenida nombre="Martina" />,
      <MensajeBienvenida nombre="Nicolas" />,
      <MensajeBienvenida nombre="Juan" />,
    </div>
  );
}

export default App;
