import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import MovieFilters from '../components/MovieFilters';  
import PrivacyPolicy from '../components/Privacypolicy';
import TermsConditions from '../components/Terms-Conditions';
import NotFound from '../components/NotFound';
import MovieDetails from '../components/MovieDetails';
import MovieSearch from '../components/MovieWatch';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie-search" element={<MovieSearch />} />
        <Route path="/movies/top-rated" element={<MovieFilters />} />
        <Route path="/movies/popular" element={<MovieFilters />} />
        <Route path="/movies/new-releases" element={<MovieFilters />} />
        <Route path="/movies/upcoming" element={<MovieFilters />} />
        <Route path="/movies/genres" element={<MovieFilters />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={ <NotFound />} />
        <Route path="/404" element={<h1>Page Not Found</h1>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

