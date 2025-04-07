
export const filterAnimesByGenre = (animes, genre) => {
    return animes.filter((anime) =>
      anime.genres.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
  };
  //con esto creamos la logica para filtrar animes por genero, obteniendo el genre y 
  // los animes y devolviendo solamente los animes que tengan ese genero y los que no los oculta