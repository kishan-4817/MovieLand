import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import { searchOmdbMovies } from '../services/movieSearch';

const MovieSearchApp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [activeQuery, setActiveQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const requestedQuery = searchParams.get('query')?.trim() || '';

  const fetchMovies = async (searchValue) => {
    setLoading(true);
    setError('');

    try {
      const result = await searchOmdbMovies(searchValue, { type: 'movie' });
      setMovies(result.movies);
      setError(result.error);
      setActiveQuery(result.query);
    } catch (fetchError) {
      setMovies([]);
      setError('Something went wrong while loading search results.');
      setActiveQuery(searchValue.trim());
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const nextQuery = query.trim();

    if (!nextQuery) {
      setMovies([]);
      setError('Enter a movie title to begin searching.');
      return;
    }

    setSearchParams({ query: nextQuery });
  };

  useEffect(() => {
    const nextQuery = requestedQuery || 'Interstellar';
    setQuery(nextQuery);
    fetchMovies(nextQuery);
  }, [requestedQuery]);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <section className="app-panel rounded-[2rem] p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--accent-gold)]">
            Movie Search
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[0.92] sm:text-6xl">
            Search the catalog through the same calmer system used across MovieLand.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
            This page is now focused on reliable movie results first, with the same shared
            search shell, larger input surface, and consistent result cards as the homepage.
          </p>

          <div className="mt-8">
            <SearchBar
              id="watch-search"
              label="Search the movie catalog"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onSubmit={handleSearch}
              placeholder="Search by title, franchise, or classic favorite"
            />
          </div>
        </section>

        <section className="mt-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                Search Results
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
                {activeQuery ? `Results for "${activeQuery}"` : 'Curated results'}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
              A larger search surface, consistent cards, and cleaner result spacing to match
              the rest of the site.
            </p>
          </div>

          {loading ? (
            <div className="app-panel mt-10 rounded-[2rem] px-8 py-14 text-center text-[var(--text-muted)]">
              Loading movies...
            </div>
          ) : movies.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {movies.map((movie) => (
                <MovieCard Movie={movie} key={movie.imdbID} />
              ))}
            </div>
          ) : (
            <div className="app-panel mt-10 rounded-[2rem] px-8 py-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-gold)]">
                Search State
              </p>
              <h3 className="mt-4 text-3xl">{error || 'No movies found'}</h3>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MovieSearchApp;
