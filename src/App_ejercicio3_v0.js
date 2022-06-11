/*
*****
App_ejercicio3_v0.js
(videotutorial 3)
*****
*/

/*
realizado utilizando 2 estados
*/

import {useState} from 'react';
import './styles.css';

export default function App () {
  const [left,setLeft]=useState(0)
  const [right,setRight]=useState(0)

  return(
    <div>
      {left}
      <button onClick={()=> setLeft(left+1)}>left</button>
      <button onClick={()=> setRight(right+1)}>right</button>
      {right}
    </div>
  )
}