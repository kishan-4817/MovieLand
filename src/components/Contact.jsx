import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-[#f9d3b4] to-transparent bg-clip-text text-transparent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white text-center mb-12">Get in Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
              <form className="space-y-4 pb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#343739] to-[#212426] text-white font-bold py-2 px-4 rounded-md hover:from-[#454545] hover:to-[#181818] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="dark:bg-[#212426] bg-white p-8">
              <h2 className="text-2xl font-bold text-[#f9d3b4] mb-6">For Work Inquiry</h2>
              <div className="space-y-4">
                <div className="flex items-center dark:bg-[#2f2f2f] bg-[#efefef] rounded-full dark:p-2 p-2">
                  <PhoneIcon className="h-6 w-6 mr-4 dark:text-[#ffffff] text-[#343739]" />
                  <span className="dark:text-[#ffffff] text-[#343739]">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center dark:bg-[#2f2f2f] bg-[#efefef] rounded-full dark:p-2 p-2">
                  <EnvelopeIcon className="h-6 w-6 mr-4 dark:text-[#ffffff] text-[#343739]" />
                  <span className="dark:text-[#ffffff] text-[#343739]">contact@example.com</span>
                </div>
                <div className="flex items-center dark:bg-[#2f2f2f] bg-[#efefef] rounded-full dark:p-2 p-2">
                  <MapPinIcon className="h-6 w-6 mr-4 dark:text-[#ffffff] text-[#343739]" />
                  <span className="dark:text-[#ffffff] text-[#343739]">123 Cool Street, Awesome City, 12345</span>
                </div>
              </div>
                         
              <h3 className="text-xl font-semibold text-[#f9d3b4] mt-8 mb-4">Find Us</h3>
              <div className="relative h-64 rounded-md overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.00622685000001!3d40.7127841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d0339219%3A0xc80b8f662f6f3f5!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1663244442351!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

