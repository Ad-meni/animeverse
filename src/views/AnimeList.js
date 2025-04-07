import React, { useState, useEffect } from 'react';
import { getAnimes } from '../services/jikanServices';
import { filterAnimesByGenre } from '../controllers/filterController';
import { translateText } from '../services/translateService';
import Menu from './Menu'; // Importa el menú lateral interactivo
import './AnimeList.css';

const AnimeList = () => {
    const [animes, setAnimes] = useState([]);
    const [filteredAnimes, setFilteredAnimes] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null); // Estado para el cuadro expandido
    const [genre, setGenre] = useState(''); // Género seleccionado
    const [language, setLanguage] = useState('en'); // Idioma para traducción (por defecto inglés)
    const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú lateral
  
    // Opciones de géneros predefinidos
    const genres = [
      'Action',
      'Adventure',
      'Comedy',
      'Drama',
      'Fantasy',
      'Romance',
      'Sci-Fi',
      'Mystery',
      'Supernatural',
      'Suspense',
      'Ecchi',
      'Horror',
      'Sports',
      'Award Winning',
      'Avant Garde',
      'Gourmet'
    ];
  
    // Maneja la expansión del cuadro (Ver más / Cerrar)
const handleExpandCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id); // Alterna entre expandir o colapsar
  };

    useEffect(() => {
      const fetchAnimes = async () => {
        try {
          const animeList = await getAnimes(); // Obtiene la lista de animes desde la API
          setAnimes(animeList); // Guarda la lista completa de animes
          setFilteredAnimes(animeList.slice(0, 12)); // Muestra solo los primeros 6 animes inicialmente
        } catch (error) {
          console.error('Error cargando animes:', error.message);
        }
      };
  
      fetchAnimes();
    }, []);
  
    const handleFilterByGenre = (selectedGenre) => {
      const filtered = selectedGenre
        ? filterAnimesByGenre(animes, selectedGenre).slice(0, 6)
        : animes.slice(0, 11); // Si no hay género, muestra los primeros 6
      setFilteredAnimes(filtered);
      setGenre(selectedGenre); // Actualiza el género seleccionado
    };
  
    const handleReset = () => {
      setGenre('');
      setLanguage('en');
      setFilteredAnimes(animes.slice(0, 6)); // Vuelve a mostrar los primeros 6
    };
  
    const handleTranslate = async () => {
      try {
        const translated = await Promise.all(
          filteredAnimes.map(async (anime) => {
            const translatedSynopsis = await translateText(anime.synopsis, language);
            return { ...anime, synopsis: translatedSynopsis };
          })
        );
        setFilteredAnimes(translated);
      } catch (error) {
        console.error('Error en la traducción:', error.message);
      }
    };
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen); // Alterna el estado del menú lateral
    };
  
    return (
      <div>
        {/* Menú lateral interactivo */}
        <Menu
  genres={genres}
  onReset={handleReset}
  onSelectGenre={handleFilterByGenre}
  isOpen={menuOpen}
  toggleMenu={toggleMenu}
/>
        
        {/* Contenido principal con margen dinámico */}
        <div className={`main-content ${menuOpen ? 'menu-open' : ''}`}>
        <h1 className="title">Encuentra informacion sobre diferentes tipos de animes</h1>
  
          {/* Traductor */}
          <div className="translation-container">
    <label htmlFor="language-select">Elige un idioma:</label>
    <select
        id="language-select"
        className="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
    >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
        <option value="ja">日本語</option>
    </select>
    <button
        className="translate-button"
        onClick={handleTranslate}
    >
        Traducir
    </button>
</div>
  
          {/* Lista de animes */}
          <div className="anime-grid">
            {filteredAnimes.map((anime) => (
              <div
                className={`anime-card ${expandedCard === anime.id ? 'expanded' : ''}`}
                key={anime.id}
              >
                <img src={anime.image} alt={anime.title} className="anime-image" />
                <h3 className="anime-title">{anime.title}</h3>
                <p className="anime-synopsis">
                  {expandedCard === anime.id
                    ? anime.synopsis
                    : anime.synopsis.length > 100
                    ? `${anime.synopsis.slice(0, 100)}...`
                    : anime.synopsis}
                </p>
                <button
                  className="expand-button"
                  onClick={() => handleExpandCard(anime.id)}
                >
                  {expandedCard === anime.id ? 'Cerrar' : 'Ver más'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AnimeList;