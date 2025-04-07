import React from 'react';
import AnimeList from './views/AnimeList'; // Asegúrate de que la ruta sea correcta
import Header from './views/Headers'
const App = () => {
  return (
    <div>
      <Header/>
      <AnimeList />
    </div>
  );
};

export default App;
//este archivo es lo principal de react, aqui definimos el componente principal de react
// con este podemos agregar otros componentes como vemos agregamos el header y el animelist
// y los organiza dentro de un contenedor jsx osea div que sirve para rendirizar, esto actua
// como estructura base y lo exportamos todo /