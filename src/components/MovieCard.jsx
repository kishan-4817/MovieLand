import React from 'react';
import { Link } from 'react-router-dom';

import MediaCard from './MediaCard';

const MovieCard = ({ Movie }) => {
  return (
    <Link
      to={`/movie/${Movie.imdbID}`}
      className="block"
    >
      <MediaCard
        title={Movie.Title}
        subtitle={Movie.Type || 'Movie'}
        meta={Movie.Year || 'Archive'}
        imageSrc={Movie.Poster !== 'N/A' ? Movie.Poster : ''}
      />
    </Link>
  );
};

export default MovieCard;
