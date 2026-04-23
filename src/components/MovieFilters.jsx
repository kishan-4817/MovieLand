import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import Header from './Header';
import Footer from './Footer';
import { searchOmdbMovies } from '../services/movieSearch';

import '../App.css';
import '../Index.css';
const CATEGORY_CONFIG = {
  'top-rated': {
    title: 'Award Winners',
    description: 'OMDb does not provide real ranked feeds, so this shelf uses a strong seed search for acclaimed films.',
    defaultQuery: 'The Godfather',
  },
  popular: {
    title: 'Popular Picks',
    description: 'A reliable browse shelf built from strong mainstream title searches instead of empty category feeds.',
    defaultQuery: 'Batman',
  },
  'new-releases': {
    title: 'Modern Releases',
    description: 'A current-feeling shelf seeded with newer high-profile titles that OMDb can actually return.',
    defaultQuery: 'Dune',
  },
  upcoming: {
    title: 'Big Franchises',
    description: 'OMDb cannot provide a true upcoming feed, so this shelf uses active franchise searches instead.',
    defaultQuery: 'Mission Impossible',
  },
  genres: {
    title: 'Genre Search',
    description: 'Search by genre or mood and keep the same standardized browse experience.',
    defaultQuery: 'science fiction',
  },
};

const MovieFilters = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = location.pathname.split('/').pop();
  const config = useMemo(() => CATEGORY_CONFIG[category] || CATEGORY_CONFIG.popular, [category]);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(config.defaultQuery);
  const [activeQuery, setActiveQuery] = useState(config.defaultQuery);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const requestedQuery = searchParams.get('query')?.trim() || '';

  const fetchMovies = async (query) => {
    setLoading(true);
    setError('');

    try {
      const result = await searchOmdbMovies(query || config.defaultQuery, { type: 'movie' });
      setMovies(result.movies);
      setActiveQuery(result.query || config.defaultQuery);
      setError(result.error);
    } catch (fetchError) {
      setMovies([]);
      setError('Something went wrong while loading movies.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const nextQuery = requestedQuery || config.defaultQuery;
    setSearchTerm(nextQuery);
    fetchMovies(nextQuery);
  }, [requestedQuery, config.defaultQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextQuery = searchTerm.trim();

    if (!nextQuery) {
      setError('Enter a movie title to begin searching.');
      setMovies([]);
      return;
    }

    setSearchParams({ query: nextQuery });
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--accent-gold)]">
              Browse
            </p>
            <h1 className="mt-4 text-5xl leading-[0.92] sm:text-6xl">{config.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              {config.description}
            </p>
          </div>

          <SearchBar
            id={`browse-search-${category}`}
            label={`Search within ${config.title}`}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onSubmit={handleSubmit}
            placeholder="Search inside this browse page"
          />
        </section>

        <section className="mt-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                Current Search
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
                {activeQuery}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
              This page now uses the same search shell, card layout, and spacing logic as
              the homepage.
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
                Browse State
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

export default MovieFilters;
