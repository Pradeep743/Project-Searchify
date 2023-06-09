import { useState } from 'react';
import './Search.css';

const Search = () => {

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  

  const searchMovieList = async (e) => {
    e.preventDefault();

    const url = `http://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_API_KEY}&language-eng-US&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setMovies(data.Search)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <form className='form' onSubmit={searchMovieList}>
        <label className='label' htmlFor="query">Movie Name: </label>
        <input className='input' type="text" id='search' name='query' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className='button' type="submit">Search</button>
      </form>
      
      <div className="card-list">
        {movies.filter(movie => movie.Poster !== "N/A").map((movie) =>
          <div className='card' key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title + ' poster'} className='card-image' />

            <div className="card-content">
              <h2 className="card-title">{movie.Title}</h2>
              <p>type: {movie.Type}</p>
              <p>release year: {movie.Year}</p>
            </div>
          </div>
          )
        }
      </div>
    </>
  )
}

export default Search