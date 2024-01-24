const liStyle = {
  width: '100%',
  border: 'solid 0.5px #666',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden'
}

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '15px'
}

export function ListOfMovies ({ movies }) {
  return (
    <ul style={ulStyle}>
      {movies.map((movie) => (
        <li
          key={movie.id}
          style={liStyle}
        >
          <img
            src={movie.poster}
            alt={movie.title}
            style={{
              objectFit: 'cover'
            }}
          />
          <span style={{ textAlign: 'center' }}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </span>
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

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />
}
