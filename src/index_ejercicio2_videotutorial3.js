/*
*****
index_ejercicio2_videotutorial3.js
*****
*/

import React from 'react'
import ReactDOM from 'react-dom'

import { useState } from 'react';

/*
const Counter = (props) =>{
  return <h1>{props.contador}</h1>;
};
*/

const Counter = ({contador}) =>{
  return <h1>{contador}</h1>;
};


const App = (props) => {
  //utilizo el estado
  const [contadorValue, updateContador] = useState(0);

  const handleClick = () => {
    updateContador(contadorValue + 1);
  }

  const handleClickReset = () => {
    updateContador(0)
  }

  const isEven = contadorValue % 2 === 0;
  const mensajePar = isEven ? "Es par" : "Es impar";



  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter contador={contadorValue}/>
      <p>{mensajePar}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))