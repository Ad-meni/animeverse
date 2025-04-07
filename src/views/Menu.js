import React from 'react';
import './Menu.css'; // Importa los estilos

const Menu = ({ genres, onReset, onSelectGenre, isOpen, toggleMenu }) => {
  const handleGenreClick = (genre) => {
    onSelectGenre(genre);
    toggleMenu(); // Cierra el menú al seleccionar
  };
  //esto de aqui define una funcion llamada menu, recibe props, ademas
  // de esto tambien otra funcion dentro de esta llamada handlegenreclick, donde
  // se ejecuta al seleccionar un genero, osea que el genero se almacena en la variable
  // genre y se manda a la funcion gandlegenreclick para usarlo como genero seleccionado
  // luego como vemos abajo, al precionar una opcion se cierra el menu /
  return (
    <>
      {/* Botón de menú */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </button>

      {/* Menú lateral */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <h2>Categorías</h2>
        <ul className="menu-list">
          {genres.map((genre) => (
            <li key={genre} onClick={() => handleGenreClick(genre)} className="menu-item">
              {genre}
            </li>
          ))}
        </ul>
        <button className="reset-button" onClick={onReset}>
          Categoria Todos
        </button>
      </div>
    </>
  );
};

export default Menu;
//este archivo implementa un menu lateral interactivo, permite seleccionar
// la categoria de anime que se quieren mostrar o resetear la opcion ingresada
// funciona con props para de esta forma recibir las categorias o generos disponibles/