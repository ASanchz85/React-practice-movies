export function ListOfMovies ({ movies }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {movies.map((movie) => (
        <li
          key={movie.id}
          style={{
            width: '100%',
            border: 'solid 0.5px #666',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={movie.poster}
            alt={movie.title}
            style={{ objectFit: 'cover' }}
          />
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </li>
      ))}
    </ul>
  )
}

export function NoMovies () {
  return <p>No movies found</p>
}

export default function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />
  )
}
