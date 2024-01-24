import Movies from './components/movies'
import useMovies from './hooks/useMovies'

function App () {
  const { movies } = useMovies()

  const globalStyles = {
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
    gap: '10px',
    width: '100%'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.query.value.trim()

    console.log(query)
  }

  return (
    <div style={globalStyles}>
      <header>
        <h1 style={{ textAlign: 'center' }}>Movies Search Tool</h1>
        <form
          onSubmit={handleSubmit}
          className='form'
          style={{ display: 'flex' }}
        >
          <input
            required
            name='query'
            type='text'
            placeholder='Search for a movie'
          />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main style={{ width: '90vw' }}>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
