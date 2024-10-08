import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_KEY = 'd2e19e09';
const API_ENDPOINT = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

const App = () => {
  useEffect(() => {
    SearchMovies('Fast and Furious');
  }, []);
  
  const [Movies, setMovies] = useState({});
  const [SearchTerm, setSearchTerm] = useState('');

  const SearchMovies = async (title) => {
    const response = await fetch(`${API_ENDPOINT}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  return (
    <div className="App">
      <h1> MovieLand </h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={SearchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => {SearchMovies(SearchTerm)}} />
      </div>
      <div className="container">
        {
          Movies?.length > 0 ? (
            <div className="container">
              {Movies.map((movie) => (
                <MovieCard Movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
