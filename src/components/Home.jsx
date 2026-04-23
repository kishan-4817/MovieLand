import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import Header from './Header';
import Footer from './Footer';
import { searchOmdbMovies } from '../services/movieSearch';

import '../App.css';
import '../Index.css';

const CURATED_SEARCHES = [
  'The Dark Knight',
  'Interstellar',
  'The Matrix',
  'Blade Runner',
  'Inception',
  'Star Wars',
];

const DISCOVERY_NOTES = [
  'Cinematic-first search experience with quieter UI and stronger hierarchy.',
  'Faster paths from curiosity to title details, recommendations, and saved picks.',
  'A design system foundation that can grow into watchlists, personalization, and richer APIs.',
];

const HERO_STATS = [
  { label: 'Mood', value: 'Atmospheric' },
  { label: 'Browse Style', value: 'Editorial' },
  { label: 'Next Layer', value: 'Watchlists' },
];

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeQuery, setActiveQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const defaultQuery = useMemo(
    () => CURATED_SEARCHES[Math.floor(Math.random() * CURATED_SEARCHES.length)],
    []
  );
  const requestedQuery = searchParams.get('query')?.trim() || '';

  const searchMovies = async (title) => {
    setLoading(true);
    setError('');

    try {
      const result = await searchOmdbMovies(title);
      setMovies(result.movies);
      setActiveQuery(result.query);
      setError(result.error);
    } catch (fetchError) {
      setMovies([]);
      setActiveQuery(title.trim());
      setError('Something went wrong while loading movies.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialQuery = requestedQuery || defaultQuery;
    setSearchTerm(initialQuery);
    searchMovies(initialQuery);
  }, [requestedQuery, defaultQuery]);

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
      <main className="bg-[var(--surface-base)] text-[var(--text-primary)]">
        <section
          className="relative isolate overflow-hidden border-b border-[var(--surface-border)]"
          style={{ background: 'var(--hero-bg)' }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:3rem_3rem]" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_22rem] lg:gap-12">
              <div className="max-w-3xl">
                <p className="inline-flex items-center rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--accent-gold)] backdrop-blur-sm" style={{ borderColor: 'var(--hero-border)', background: 'var(--hero-panel)' }}>
                  Cinematic Discovery Refined
                </p>
                <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.9] sm:text-6xl lg:text-7xl" style={{ color: 'var(--text-primary)' }}>
                  MovieLand
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 sm:text-[1.15rem]" style={{ color: 'var(--hero-copy)' }}>
                  Search films through a calmer, more premium interface built to feel
                  closer to a cinema journal than a crowded catalog.
                </p>

                <div className="mt-8 max-w-3xl">
                  <SearchBar
                    id="home-movie-search"
                    label="Search the MovieLand homepage"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onSubmit={handleSubmit}
                    placeholder="Search for a film, franchise, or late-night classic"
                    variant="hero"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {CURATED_SEARCHES.map((query) => (
                    <button
                      key={query}
                      type="button"
                      onClick={() => {
                        setSearchTerm(query);
                        setSearchParams({ query });
                      }}
                      className="rounded-full px-4 py-2 text-sm transition duration-300 hover:border-[var(--accent-gold)]/40 hover:text-[var(--accent-gold)]"
                      style={{
                        border: '1px solid var(--hero-border)',
                        background: 'var(--hero-panel-soft)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {query}
                    </button>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {HERO_STATS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl px-4 py-4 backdrop-blur-sm"
                      style={{ border: '1px solid var(--hero-border)', background: 'var(--hero-panel-soft)' }}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: 'var(--hero-muted)' }}>
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-medium" style={{ color: 'var(--hero-copy)' }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <aside
                className="rounded-[2rem] p-6 backdrop-blur-md"
                style={{ border: '1px solid var(--hero-border)', background: 'var(--hero-panel)' }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--accent-gold)]">
                  Tonight&apos;s Cue
                </p>
                <h2 className="mt-4 text-4xl leading-[0.96]" style={{ color: 'var(--hero-copy)' }}>
                  Search less. Land on something worth watching faster.
                </h2>
                <div className="mt-6 space-y-4 pt-6" style={{ borderTop: '1px solid var(--hero-border)' }}>
                  {DISCOVERY_NOTES.map((note) => (
                    <p
                      key={note}
                      className="border-l pl-4 text-sm leading-7"
                      style={{ borderColor: 'var(--hero-border)', color: 'var(--hero-copy)' }}
                    >
                      {note}
                    </p>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                Now Exploring
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
                {activeQuery ? `Results for "${activeQuery}"` : 'Curated results'}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
              A tighter discovery shelf with cleaner spacing, more responsive cards,
              and less wasted room between sections.
            </p>
          </div>

          {loading ? (
            <div className="app-panel mt-10 rounded-[2rem] px-8 py-16 text-center text-[var(--text-muted)]">
              Loading movies...
            </div>
          ) : movies.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {movies.map((movie) => (
                <MovieCard Movie={movie} key={movie.imdbID} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-[var(--surface-border)] bg-[var(--surface-panel)] px-8 py-16 text-center dark:border-white/8 dark:bg-white/4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-gold)]">
                Search State
              </p>
              <h3 className="mt-4 text-3xl text-[var(--text-primary)]">{error || 'No movies found'}</h3>
              <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-[var(--text-muted)]">
                Try a classic title, a major franchise, or one of the curated prompts
                above to start shaping the collection.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
