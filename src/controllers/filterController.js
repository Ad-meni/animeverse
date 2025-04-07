// Función para filtrar animes por género
export const filterAnimesByGenre = (animes, genre) => {
    return animes.filter((anime) =>
      anime.genres.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
  };