import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const principles = [
  {
    title: 'Calmer discovery',
    description: 'We are shaping MovieLand around cleaner search, better hierarchy, and less visual clutter.',
  },
  {
    title: 'Cinematic tone',
    description: 'The product should feel closer to a film journal than a noisy catalog of disconnected cards.',
  },
  {
    title: 'Better foundations',
    description: 'Shared surfaces, typography, and search patterns give the app a system we can keep building on.',
  },
];

const milestones = [
  'Shared homepage, auth, contact, search, and movie-detail design system',
  'OMDb-based search flows with cleaner result presentation',
  'A foundation for future watchlists, personalization, and richer metadata',
];

export default function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <section className="app-panel rounded-[2rem] p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--accent-gold)]">
                About MovieLand
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl leading-[0.92] sm:text-6xl">
                A movie app being reshaped into a calmer, more intentional discovery experience.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
                MovieLand started as a straightforward movie search project and is now being rebuilt
                into a more cinematic product with stronger design foundations, clearer browsing,
                and better room for future features.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[var(--surface-border)] bg-[var(--surface-panel-strong)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                Current Direction
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
                Design first, cleaner search, reusable UI, and a product language that feels
                premium without becoming complicated.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="app-panel rounded-[2rem] p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent-gold)]">
              What We Are Building
            </p>
            <div className="mt-8 grid gap-5">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-[var(--surface-border)] bg-[var(--surface-panel-strong)] p-5"
                >
                  <h2 className="text-3xl leading-tight text-[var(--text-primary)]">{item.title}</h2>
                  <p className="mt-3 text-base leading-7 text-[var(--text-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <section className="app-panel rounded-[2rem] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent-gold)]">
                Progress
              </p>
              <ul className="mt-6 space-y-4">
                {milestones.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.25rem] border border-[var(--surface-border)] bg-[var(--surface-panel-strong)] px-5 py-4 text-base leading-7 text-[var(--text-primary)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="app-panel rounded-[2rem] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent-gold)]">
                Next Layer
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
                The next steps are finishing the remaining older pages, improving the API layer,
                and adding the user features that make the product feel personal.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="app-button-primary">
                  Contact Us
                </Link>
                <Link to="/movie-search?query=Interstellar" className="app-button-secondary">
                  Explore Movies
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
