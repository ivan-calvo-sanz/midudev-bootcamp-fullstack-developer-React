/*
*****
index_ejercicio5.js
(videotutorial 5)
*****
*/

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import "./styles.css";
import App from "./App.js";

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render( // deprecated starting React 18
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);