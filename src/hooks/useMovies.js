import responseMovies from '../mocks/results-ok.json'
// import { API_ENDPOINT, API_KEY } from '../utils/constants'

export default function useMovies (query) {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  /*
  const getMovies = async () => {
    const response = await fetch(`${API_ENDPOINT}?apikey=${API_KEY}&s=${query}`)
    const data = await response.json()
    return data.Search
  }

  return { movies: mappedMovies, getMovies }
  */

  return { movies: mappedMovies }
}
