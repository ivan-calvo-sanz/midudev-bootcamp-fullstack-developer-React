/*
*****
App_ejercicio5_v0.js
(videotutorial 5)
*****
*/

/*
UTILIZANDO FETCH
*/

import "./styles.css";
import { useEffect, useState } from 'react';
import { Note } from "./Note_ejercicio_5.js";

export default function App() {
  //inicializa la API con un tipo de elemento que va a recibir en este caso un array
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          setNotes(json)
          setLoading(false);
        });
    }, 2000);
  }, []);

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
      title: newNote,
      body: newNote
    };

    console.log(noteToAddToState);

    /*para modificar un array hay que crear uno nuevo*/
    /*al array le concatenamos el nuevo elemento añadir*/
    setNotes(notes.concat(noteToAddToState));
    /*como tengo el control del inpu*/
    /*he colocado en el imput el value, puedo borrar su valor*/
    setNewNote("");
  }

  
  if(loading){
    return "Cargando...";
  }

  if (typeof notes === "undefined" || notes.length === 0) {
    return "No tenemos notas que mostrar";
  }

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes
          .map(note => <Note key={note.id} title={note.title} body={note.body} />)}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </div>
  );
}