import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ Movie }) => {
  return (
    <Link to={`/movie/${Movie.imdbID}`}>
      <div className="w-[310px] h-[460px] m-6 relative rounded-lg overflow-hidden transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
        <div className="absolute top-0 w-full p-4 text-[#f9d3b4] opacity-0 transition-opacity hover:opacity-100">
          <p>{Movie.Year}</p>
        </div>
        <div className="w-full h-full">
          <img
            src={Movie.Poster !== 'N/A' ? Movie.Poster : 'https://via.placeholder.com/400'}
            alt={Movie.Title}
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#343739] hover:bg-transparent">
          <span className="uppercase text-xs tracking-wide font-medium text-[#f0f0f0]">
            {Movie.Type}
          </span>
          <h3 className="mt-2 font-roboto text-[#f9d3b4]">{Movie.Title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
