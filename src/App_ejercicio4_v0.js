/*
*****
App_ejercicio4_v0.js
(videotutorial 4)
*****
*/

import React from 'react';
import "./styles.css";
//aimport App from './App';

const Note=({id,content,date})=>{
  //console.log(note);
  return (<li><p><small><time>{date}</time></small></p><p>{content}</p></li>)
}

export default function App({notes}) {
  if (typeof notes === "undefined" || notes.length === 0) {
    return "No tenemos notas que mostrar";
  }

  return (
    <ol>
      {notes.map(note => <Note key={note.id} id={note.id} content={note.content} date={note.date} />)}
    </ol>
  );
}