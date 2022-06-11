/*
*****
App_ejercicio4_v2.js
(videotutorial 4)
*****
*/

import "./styles.css";
import { useState } from 'react';
import { Note } from "./Note.js";

//hago que las Notas por props
export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    //console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const handleSubmit = (event) => {
    /*para evitar el comportamiento por defecto que tiene el Submit 
    de actualizar la página cada vez que lo ejecutamos */
    event.preventDefault();
    console.log("crear nota");
    console.log(newNote)

    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };

    console.log(noteToAddToState);

    /*para modificar un array hay que crear uno nuevo*/
    /*al array le concatenamos el nuevo elemento añadir*/
    setNotes(notes.concat(noteToAddToState));
    /*como tengo el control del inpu*/
    /*he colocado en el imput el value, puedo borrar su valor*/
    setNewNote("");
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  }

  if (typeof notes === "undefined" || notes.length === 0) {
    return "No tenemos notas que mostrar";
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? 'Show all' : 'Show only important'}</button>
      <ol>
        {notes
        /* El filtro devuelve un booleano*/
        .filter((note)=>{
          if(showAll===true) return true;
          return note.important===true;
        })
        .map(note => <Note key={note.id} id={note.id} content={note.content} date={note.date} />)}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </div>
  );
}