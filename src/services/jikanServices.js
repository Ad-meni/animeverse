import axios from 'axios';
import { formatAnimeList } from '../models/animeModel';

// URL de la API de Jikan
const JIKAN_API_URL = 'https://api.jikan.moe/v4/anime';

// Función para obtener animes desde la API
export const getAnimes = async () => {
  try {
    const response = await axios.get(JIKAN_API_URL); // Solicita datos a la API
    return formatAnimeList(response.data.data); // Procesa los datos usando el modelo
  } catch (error) {
    console.error('Error al obtener animes:', error.message); // Muestra el error en consola
    throw error; // Lanza el error para que sea manejado externamente
  }
};