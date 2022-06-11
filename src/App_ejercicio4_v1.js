/*
*****
App_ejercicio4_v1.js
(videotutorial 4)
*****
*/

/*
EXTRAER A UN NUEVO FICHERO COMPONENTE
Trabajando mediante "Módulos"
Creo "Note.js" y en el exporto el elemento
*/

import React from 'react';
import "./styles.css";
import Note from "./Note.js";

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