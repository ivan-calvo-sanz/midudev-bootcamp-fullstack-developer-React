/*
*****
index_ejercicio3_videotutorial3_v3.js
*****
*/

/*
realizado utilizando 1 unico estado
(uniendo los 2 estados de la v0)
utilizando arrays
y RENDERIZADO CONDICIONAL
*/

import { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const WarningNotUsed = () => {
  return <h1>Todavía no se ha usado el contador</h1>
}

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(", ")}</p>
}

const INITIAL_COUNTER_STATE = {
  left: 0,
  right: 0,
  mensaje: 'Mensaje en el estado'
}



const App = () => {
  //const [left,setLeft]=useState(0)
  //const [right,setRight]=useState(0)

  //creo un objeto "counters" y le indico un estado
  const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);

  //creo el array clicks
  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1,
    });


    setClicks(prevClicks => {
      return [...prevClicks, 'L']
    })
  }

  const handleClickRight = () => {
    const newCountersState = {
      //spred operator (esparcir) es una forma de indicarle a javascript que lo que se quiere es 
      //recuperar todas las propiedades de un objeto
      ...counters,
      right: counters.right + 1,
    }
    setCounters(newCountersState);

    setClicks(prevClicks => {
      return [...prevClicks, 'R']
    })
  };

  const handleReset = () => {
    setCounters(INITIAL_COUNTER_STATE);
    setClicks([]);
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p>Clicks totales:{clicks.length}</p>
      <p><button onClick={handleReset}>Reset</button></p>
      {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks} />}
    </div>
  )
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);