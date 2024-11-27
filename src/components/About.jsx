import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80"
          alt="Cinema"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About CinemaScope</h1>
          <p className="text-xl md:text-2xl mb-8">Your gateway to the world of cinema</p>
          <a href="#contact" className="bg-[#f9d3b4] text-black px-6 py-2 rounded-md hover:bg-[#f9d3b4] transition duration-300">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Founded in 2010, CinemaScope has been at the forefront of movie entertainment, 
                delivering the latest films and classic favorites to audiences worldwide. We believe 
                in the power of storytelling to inspire, entertain, and bring people together.
              </p>
              <p className="text-lg">
                Our team of film enthusiasts is passionate about curating the best movie experiences 
                for our viewers. With a focus on quality, diversity, and customer satisfaction, 
                we've grown to become a leading name in the world of online cinema.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Movie theater"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=128&h=128&q=80",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80",
              "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=128&h=128&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80",
              "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=128&h=128&q=80",
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&h=128&q=80"
            ].map((src, index) => (
              <div key={index} className="bg-[#343739] rounded-lg shadow-md p-6 flex flex-col items-center">
                <img
                  src={src}
                  alt={`Team member ${index + 1}`}
                  className="w-32 h-32 rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-gray-300">Film Curator</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Diverse Selection", description: "We curate a wide range of films to cater to all tastes and preferences." },
              { title: "Quality Streaming", description: "We ensure high-quality streaming for the best viewing experience." },
              { title: "Film Appreciation", description: "We foster a community that appreciates and discusses cinema." }
            ].map((item, index) => (
              <div key={index} className="bg-[#343739] rounded-lg shadow-md p-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 bg-[#333] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cinema Journey?</h2>
          <p className="text-xl mb-8">Join CinemaScope and explore the world of movies</p>
          <a href="#signup" className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition duration-300">
            Sign Up Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}