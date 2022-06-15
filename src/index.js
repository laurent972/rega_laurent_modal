import React from 'react';
import ReactDOM from 'react-dom/client';
import { Modal } from './lib';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>TOTO</h1>
    <button onClick={modal}>ModaliT</button>
    <Modal />
  </React.StrictMode>
);