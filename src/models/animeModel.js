// Función para estructurar un unico anime
export const formatAnime = (anime) => ({
    id: anime.mal_id, // ID unico del anime
    title: anime.title, // Título del anime
    synopsis: anime.synopsis, // Sinopsis del anime
    image: anime.images.jpg.image_url, // URL de la imagen del anime
    genres: anime.genres.map((genre) => genre.name), // Extrae los nombres de los géneros
  });
  //con esto obtenemos esos datos de cada anime, asi siendo el id, titulo, decripcion, imagen y ademas el genero
  // Función para estructurar una lista de animes
  export const formatAnimeList = (animeList) => {
    return animeList.map((anime) => formatAnime(anime)); // Aplica formatAnime a cada elemento
  };