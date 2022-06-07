/*
*****
index_ejercicio3_videotutorial3_v4.js
*****
*/

/*
UN UNICO ESTADO
RRECORRIENDO UN ARRAY PARA EL CALCULO DEclicks RIGHT o LEFT
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

const App = () => {
  //creo el array clicks
  const [clicks, setClicks] = useState([]);

  const handleClickLeft = (event) => {
    setClicks(prevClicks => {
      return [...prevClicks, 'L']
    })
  }

  const handleClickRight = (event) => {
    setClicks(prevClicks => {
      return [...prevClicks, 'R']
    })
  }

  const handleReset = () => {
    setClicks([]);
  }

  const left = clicks.filter(click => click === 'L');
  const right = clicks.filter(click => click === 'R');


  return (
    <div>
      {left.length}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {right.length}
      <p>Clicks totales:{clicks.length}</p>
      <p><button onClick={handleReset}>Reset</button></p>
      {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks} />}
    </div>
  )
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);