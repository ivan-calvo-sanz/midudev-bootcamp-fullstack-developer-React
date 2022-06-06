/*
*****
index_ejercicio3_videotutorial3_v1.js
*****
*/

/*
realizado utilizando 1 unico estado
(uniendo los 2 estados de la v0)
*/

import { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
  //const [left,setLeft]=useState(0)
  //const [right,setRight]=useState(0)

  //creo un objeto "counters" y le indico un estado
  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    clicks: 0,
    mensaje: 'Mensaje en el estado'
  });

  const handleClickLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1,
      clicks:counters.clicks+1
    });
  }

  const handleClickRight = () => {
    const newCountersState = {
      //spred operator (esparcir) es una forma de indicarle a javascript que lo que se quiere es 
      //recuperar todas las propiedades de un objeto
      ...counters,
      right: counters.right + 1,
      clicks:counters.clicks+1
    }
    setCounters(newCountersState);
  };


  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p>Clicks totales:{counters.clicks}</p>
      <p>{counters.mensaje}</p>
    </div>
  )
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);