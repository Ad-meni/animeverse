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