import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import NotFound from '../components/NotFound';

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
        <Route path="*" element={ <NotFound />} />
        <Route path="/404" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

