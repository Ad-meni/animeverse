import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//este archivo es el punto de entrada de react, aqui configuramos
//la carga principal, estilos y archivos los cargamos aqui, ademas que el componente
// principal o raiz llamddo app, crea un contenedor html con id root en public
// index.html, donde se carga todo esto/