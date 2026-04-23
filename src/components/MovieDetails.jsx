import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import { getMovieDetails } from '../services/movieDetails';

const detailItems = (movieDetails) => [
  { label: 'Genre', value: movieDetails.Genre },
  { label: 'Director', value: movieDetails.Director },
  { label: 'Writer', value: movieDetails.Writer },
  { label: 'Language', value: movieDetails.Language },
  { label: 'Country', value: movieDetails.Country },
  { label: 'Awards', value: movieDetails.Awards },
  { label: 'Production', value: movieDetails.Production },
  { label: 'Box Office', value: movieDetails.BoxOffice },
];

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError('');

      try {
        const data = await getMovieDetails(id);
        setMovieDetails(data);
      } catch (detailsError) {
        setMovieDetails(null);
        setError(detailsError.message || 'Unable to load movie details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {loading ? (
          <div className="app-panel rounded-[2rem] px-8 py-16 text-center text-[var(--text-muted)]">
            Loading movie details...
          </div>
        ) : error ? (
          <div className="app-panel rounded-[2rem] px-8 py-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-gold)]">
              Detail State
            </p>
            <h1 className="mt-4 text-3xl">{error}</h1>
            <Link to="/" className="app-button-primary mt-8">
              Return Home
            </Link>
          </div>
        ) : movieDetails ? (
          <div className="space-y-10">
            <section className="app-panel overflow-hidden rounded-[2rem]">
              <div className="grid gap-0 lg:grid-cols-[22rem_minmax(0,1fr)]">
                <div className="relative h-full min-h-[24rem] overflow-hidden border-b border-[var(--surface-border)] lg:border-b-0 lg:border-r">
                  <img
                    src={
                      movieDetails.Poster !== 'N/A'
                        ? movieDetails.Poster
                        : 'https://fakeimg.pl/800x1200/111827/f5f1e8?text=MovieLand'
                    }
                    alt={movieDetails.Title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(5,8,12,0.24)_55%,rgba(5,8,12,0.7)_100%)]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent-gold)] backdrop-blur-sm">
                    {movieDetails.Year || 'Archive'}
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--accent-gold)]">
                    Movie Details
                  </p>
                  <h1 className="mt-4 max-w-3xl text-5xl leading-[0.92] sm:text-6xl">
                    {movieDetails.Title}
                  </h1>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
                    {movieDetails.Plot}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {[movieDetails.Type, movieDetails.Rated, movieDetails.Runtime]
                      .filter(Boolean)
                      .map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--surface-border)] bg-[var(--surface-panel-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]"
                        >
                          {item}
                        </span>
                      ))}
                  </div>

                  {movieDetails.Ratings?.length ? (
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {movieDetails.Ratings.slice(0, 3).map((rating) => (
                        <div
                          key={rating.Source}
                          className="rounded-[1.25rem] border border-[var(--surface-border)] bg-[var(--surface-panel-strong)] px-4 py-4"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent-gold)]">
                            {rating.Source}
                          </p>
                          <p className="mt-2 text-2xl text-[var(--text-primary)]">{rating.Value}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
              <div className="app-panel rounded-[2rem] p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent-gold)]">
                  Story Notes
                </p>
                <h2 className="mt-4 text-4xl">Cast, release, and production context</h2>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {detailItems(movieDetails).map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-[var(--surface-border)] bg-[var(--surface-panel-strong)] p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent-gold)]">
                        {item.label}
                      </p>
                      <p className="mt-3 text-base leading-7 text-[var(--text-primary)]">
                        {item.value && item.value !== 'N/A' ? item.value : 'Not available'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="app-panel rounded-[2rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent-gold)]">
                  Quick Facts
                </p>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
                      Released
                    </p>
                    <p className="mt-2 text-lg text-[var(--text-primary)]">
                      {movieDetails.Released && movieDetails.Released !== 'N/A'
                        ? movieDetails.Released
                        : 'Not available'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
                      Actors
                    </p>
                    <p className="mt-2 text-lg leading-8 text-[var(--text-primary)]">
                      {movieDetails.Actors && movieDetails.Actors !== 'N/A'
                        ? movieDetails.Actors
                        : 'Not available'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
                      Website
                    </p>
                    {movieDetails.Website && movieDetails.Website !== 'N/A' ? (
                      <a
                        href={movieDetails.Website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-gold)]"
                      >
                        Visit Site
                      </a>
                    ) : (
                      <p className="mt-2 text-lg text-[var(--text-primary)]">Not available</p>
                    )}
                  </div>
                </div>
              </aside>
            </section>
          </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
};

export default MovieDetails;
