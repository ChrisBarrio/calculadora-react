import './styles/App.css';
import Boton from './components/Boton';
import Screen from './components/Screen';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Swal from 'sweetalert2';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      Swal.fire('Por favor debe ingresar valores para realizar los cálculos.');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora React</h1>
      <div className="contenedor-calculadora">
        <Screen input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
