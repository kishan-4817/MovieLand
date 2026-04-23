import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  explore: [
    { label: 'Movie Search', to: '/movie-search?query=Interstellar' },
    { label: 'Popular Picks', to: '/movies/popular?query=Batman' },
    { label: 'Sci-Fi Shelf', to: '/movies/genres?query=Science%20Fiction' },
    { label: 'Crime Classics', to: '/movie-search?query=The%20Godfather' },
  ],
  studio: [
    { label: 'About MovieLand', to: '/about' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-conditions' },
  ],
  quick: [
    { label: 'Batman', to: '/?query=Batman' },
    { label: 'Interstellar', to: '/?query=Interstellar' },
    { label: 'Inception', to: '/?query=Inception' },
    { label: 'Blade Runner', to: '/?query=Blade%20Runner' },
  ]
};

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[var(--surface-border)] bg-[var(--surface-base)] pb-8 pt-20 text-[var(--text-primary)] dark:border-white/10 dark:bg-[#070a0e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8 xl:gap-24">
          
          {/* Brand Column */}
          <div className="flex flex-col lg:col-span-6 pr-0 lg:pr-8">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-gold)]">
              MovieLand
            </p>
            <h2 className="mt-5 font-[var(--font-display)] text-3xl leading-tight tracking-wide text-[var(--text-primary)] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              A calmer way to search, browse, and return to the films worth remembering.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--text-muted)] opacity-90 sm:text-base">
              This product is evolving from a movie search app into a more cinematic
              discovery experience with stronger design, richer data, and better user
              tools.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6 lg:gap-8 pt-2 lg:pt-0">
            {/* Explore */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--text-primary)] opacity-80 mb-1">
                Explore
              </h3>
              <ul className="flex flex-col gap-3.5">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-gold)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--text-primary)] opacity-80 mb-1">
                Studio
              </h3>
              <ul className="flex flex-col gap-3.5">
                {footerLinks.studio.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-gold)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Search */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--text-primary)] opacity-80 mb-1">
                Quick Finds
              </h3>
              <ul className="flex flex-col gap-3.5">
                {footerLinks.quick.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-gold)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-[var(--surface-border)] pt-8 text-sm font-medium text-[var(--text-muted)] dark:border-white/10 md:flex-row shadow-sm">
          <p className="opacity-80">© {new Date().getFullYear()} MovieLand System</p>
          <div className="flex items-center gap-8 opacity-80">
            <Link to="/privacy-policy" className="transition-colors duration-200 hover:text-[var(--text-primary)]">Privacy</Link>
            <Link to="/terms-conditions" className="transition-colors duration-200 hover:text-[var(--text-primary)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
