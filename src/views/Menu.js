import React from 'react';
import './Menu.css'; // Importa los estilos

const Menu = ({ genres, onReset, onSelectGenre, isOpen, toggleMenu }) => {
  const handleGenreClick = (genre) => {
    onSelectGenre(genre);
    toggleMenu(); // Cierra el menú al seleccionar
  };

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