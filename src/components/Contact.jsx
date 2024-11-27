import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Header from './Header';
import Footer from './Footer';

const MAPBOX_TOKEN = 'YOUR_MAPBOX_TOKEN_HERE';

const Contact = () => {
  const [viewState, setViewState] = useState({
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 13
  });

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-r from-[#f9d3b4] to-transparent bg-clip-text text-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white text-center mb-12">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#343739] to-[#212426] text-white font-bold py-2 px-4 rounded-md hover:from-[#454545] hover:to-[#181818] transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-[#f9d3b4] mr-4" />
                <span className="text-[#f9d3b4]">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-[#f9d3b4] mr-4" />
                <span className="text-[#f9d3b4]">contact@example.com</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-[#f9d3b4] mr-4" />
                <span className="text-[#f9d3b4]">123 Cool Street, Awesome City, 12345</span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-[#f9d3b4] mt-8 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon Icon={FaFacebookF} href="https://facebook.com" color="#f9d3b4" />
              <SocialIcon Icon={FaTwitter} href="https://twitter.com" color="#f9d3b4" />
              <SocialIcon Icon={FaLinkedinIn} href="https://linkedin.com" color="#f9d3b4" />
              <SocialIcon Icon={FaInstagram} href="https://instagram.com" color="#f9d3b4" />
            </div>
            
            <h3 className="text-xl font-semibold text-[#f9d3b4] mt-8 mb-4">Find Us</h3>
            <div className="h-64 rounded-lg overflow-hidden">
              <Map
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                mapboxAccessToken={MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                className="w-full h-full"
              >
                <Marker longitude={-74.0060} latitude={40.7128} color="red" />
              </Map>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-purple-600 to-blue-500 p-3 rounded-full text-white hover:from-purple-700 hover:to-blue-600 transition duration-300"
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export default Contact;

