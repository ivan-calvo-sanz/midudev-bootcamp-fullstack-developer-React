/*
*****
index_ejercicio4.js
(videotutorial 4)
*****
*/

/*
FORMULARIOS
*/

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import "./styles.css";
import App from "./App.js";

//creo un array de objetos
const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30 17:30:31",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30 18:39:34",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of",
    date: "2019-05-30 19:20:14",
    important: true
  }
];

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render( // deprecated starting React 18
  <React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>,
);