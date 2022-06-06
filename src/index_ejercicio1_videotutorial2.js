/*
*****
index_ejercicio1_videotutorial2.js
*****
*/

import React from 'react'
import ReactDOM from 'react-dom'


//creo componente Title
const Title = (props) => {
  return <h1>{props.course}</h1>
}

//creo componente Parte
const Parte = (props) => {
  return (
    <p>{props.part} {props.ejercicio}</p>
  )
}

//creo componente Totales
const Totales = (props) => {
  return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course} />
      <Parte part={part1} ejercicio={exercises1} />
      <Parte part={part2} ejercicio={exercises2} />
      <Parte part={part3} ejercicio={exercises3} />
      <Totales exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))