/*
*****
App_ejercicio5_v1.js
(videotutorial 5)
*****
*/

/*
UTILIZANDO AXIOS
*/

import "./styles.css";
import { useEffect, useState } from 'react';
import { Note } from "./Note_ejercicio_5.js";
import { getAllNotes } from "./services/notes/getAllNotes";
import { createNote } from "./services/notes/createNote";

export default function App() {
  //inicializa la API con un tipo de elemento que va a recibir en este caso un array
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState('');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getAllNotes()
        .then(notes => {
          setNotes(notes);
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

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    setError('');
    createNote(noteToAddToState)
      .then(newNote => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      })
      .catch((e) => {
        console.error(e);
        setError('La API ha petado');
      });

    console.log(noteToAddToState);

    /*como tengo el control del inpu*/
    /*he colocado en el imput el value, puedo borrar su valor*/
    setNewNote("");
  }


  if (loading) {
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
      {error ? error : ""}
    </div>
  );
}