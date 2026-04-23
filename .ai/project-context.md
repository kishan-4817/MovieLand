# Project Overview

MovieLand is a React movie discovery app with OMDb search, Firebase auth, and a shared cinematic UI system.
The project is mid-redesign: the homepage, auth flow, contact page, dedicated search page, and movie details are updated, while several inner pages still use the older UI.

# Tech Stack

* React 18
* React Router DOM
* Tailwind CSS
* Firebase Auth
* react-firebase-hooks
* OMDb API
* Axios
* Headless UI
* Heroicons

# Features Status

* ✅ Route-based SPA with public pages, auth pages, browse pages, and movie details
* ✅ Cinematic homepage redesign with shared theme tokens
* ✅ Shared header, footer, search bar, and result-card system
* ✅ URL-driven search on home, browse, and dedicated movie-search pages
* ✅ Firebase email/password login and registration
* ✅ Contact page redesigned with the shared form/layout system
* ✅ Dedicated movie-search page now returns OMDb results in the shared search layout
* ✅ OMDb-powered movie search and browse pages
* ✅ Movie details page redesigned into the shared visual system
* ✅ About page redesigned into the shared visual system
* ✅ Production build currently passes after ESLint cleanup
* ❌ Profile and legal pages are not aligned with the new design system
* ❌ Search enhancements like suggestions, filters, sorting, and skeletons are not implemented
* ❌ API logic is only partially centralized
* ❌ User features like watchlist, favorites, and persistence are not implemented

# Current Focus

Continuing the migration of the remaining older pages after fixing the CI-blocking ESLint issues and stale local lint cache.

# Next Steps

1. Update `Profile.jsx` and legal pages to use the new system.
2. Continue centralizing API logic and add better loading/error states.
3. Normalize or remove the remaining legacy browse routes if they are no longer needed.
4. Decide whether Watchmode is removed or reintroduced later as a secondary provider.

# Key Files

* `src/index.js` - React entry point
* `src/App.js` - top-level app wrapper
* `src/routes/AppRoutes.jsx` - all client routes
* `src/App.css` - theme tokens and shared UI styles
* `src/components/Home.jsx` - redesigned homepage and OMDb search surface
* `src/components/Header.jsx` - shared navigation shell
* `src/components/Footer.jsx` - shared footer and quick-search links
* `src/components/SearchBar.jsx` - reusable themed search form
* `src/components/MediaCard.jsx` - shared result-card UI
* `src/components/MovieFilters.jsx` - shared browse page layout
* `src/components/MovieWatch.jsx` - dedicated movie-search page using the shared search/results layout
* `src/components/Login.jsx` - redesigned login page
* `src/components/Register.jsx` - redesigned register page
* `src/components/About.jsx` - redesigned brand/story page
* `src/components/Contact.jsx` - simplified shared-theme contact page and inquiry form
* `src/components/MovieDetails.jsx` - redesigned single-movie detail page
* `src/firebase.js` - Firebase initialization
* `src/services/movieSearch.js` - shared OMDb search helper
* `src/services/movieDetails.js` - shared OMDb movie-details helper
* `ENHANCEMENTS.md` - detailed product/design tracker
* `BRAND_DIRECTION.md` - approved visual direction notes

# Known Issues

* `Profile.jsx` still uses older styling patterns.
* API keys are used client-side; sensitive API usage is not hidden behind a backend.
* Search UX still lacks suggestions, debouncing, sorting, and skeleton loaders.
* Legacy browse routes still exist, but the footer now avoids fake OMDb categories that return empty results.
* Routing/content naming is improved but not fully normalized across the app.
* Browserslist data is outdated; build passes, but the update warning still appears.

# Setup Instructions

Install dependencies with `npm install`.
Add required `REACT_APP_FIREBASE_*` values to `.env`.
Run locally with `npm start`.

# Notes for AI

* Keep changes minimal
* Do not break existing logic
* Follow existing patterns
