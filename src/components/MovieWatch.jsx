import React, { useState } from 'react';
import axios from 'axios';

const MovieCard = ({ movie }) => {
  return (
    <div className="w-[310px] h-[460px] m-6 relative rounded-lg overflow-hidden transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
      <div className="absolute top-0 w-full p-4 text-[#f9d3b4] bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100">
        <p className="text-sm">{movie.year || 'N/A'}</p>
      </div>
      <div className="w-full h-full">
        <img
          src={movie.image_url || 'https://fakeimg.pl/310x460?text=Image&font=bebas?text=Image&font=bebas'}
          alt={movie.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#343739] bg-opacity-90 hover:bg-transparent transition-all">
        <span className="uppercase text-xs tracking-wide font-medium text-[#f0f0f0]">
          {movie.type || 'Movie'}
        </span>
        <h3 className="mt-2 font-roboto text-lg text-[#f9d3b4] truncate">{movie.name}</h3>
        {movie.watch_link && (
          <a
            href={movie.watch_link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-blue-500 underline"
          >
            Watch Now
          </a>
        )}
      </div>
    </div>
  );
};

const MovieSearchApp = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = '9oLoyRsGsSunlCBERLqs6HFaPNnFJvWM7GIz6XqR'; // Replace with your Watchmode API Key

  const fetchMovies = async (searchTitles) => {
    if (!searchTitles) return;

    setLoading(true);
    try {
      const response = await axios.get(`https://api.watchmode.com/v1/autocomplete-search/`, {
        params: {
          apiKey: apiKey,
          search_value: searchTitles.join(','),
          search_field: 'name',
          types: 'movie',
        },
      });

      const moviesWithLinks = await Promise.all(
        response.data.results.map(async (movie) => {
          const watchLinkResponse = await axios.get(`https://api.watchmode.com/v1/get-watch-link/`, {
            params: {
              apiKey: apiKey,
              movie_id: movie.id,
            },
          });
          return { ...movie, watch_link: watchLinkResponse.data.link };
        })
      );

      setMovies(moviesWithLinks || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMovies([]);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies([query]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Watchmode Movie Search</h1>
      </header>
      <main className="flex-grow p-6">
        <form onSubmit={handleSearch} className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search for movies..."
            className="border border-gray-300 rounded-l-lg p-2 w-1/2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-r-lg px-4 py-2 hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        {!loading && movies.length === 0 && query && (
          <p className="text-center text-gray-500">No results found for "{query}".</p>
        )}
      </main>
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>© 2024 Watchmode Movie Search App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MovieSearchApp;


