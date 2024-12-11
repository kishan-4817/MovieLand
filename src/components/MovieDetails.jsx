import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const API_KEY = 'd2e19e09';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(`${API_ENDPOINT}&i=${id}`);
            const data = await response.json();
            setMovieDetails(data);
        };
        fetchMovieDetails();
    }, [id]);

    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#212426] text-white p-8">
                {movieDetails ? (
                    <div className="mx-auto max-w-2xl">
                        <h1 className="text-4xl font-bold mb-4">{movieDetails.Title}</h1>
                        <img
                            src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'https://via.placeholder.com/400'}
                            alt={movieDetails.Title}
                            className="w-full h-auto mb-6 rounded-lg shadow-lg"
                        />
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 pr-4 md:pr-8 mb-4 md:mb-8">
                                <p><strong>Year:</strong> {movieDetails.Year}</p>
                                <p><strong>Genre:</strong> {movieDetails.Genre}</p>
                            </div>
                            <div className="w-1/2 md:w-2/3 pl-4 md:pl-8 mb-4 md:mb-8">
                                <p><strong>Director:</strong> {movieDetails.Director}</p>
                                <p><strong>Plot:</strong> {movieDetails.Plot}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 pr-4 md:pr-8 mb-4 md:mb-8">
                                <p><strong>Language:</strong> {movieDetails.Language}</p>
                                <p><strong>Country:</strong> {movieDetails.Country}</p>
                            </div>
                            <div className="w-1/2 md:w-2/3 pl-4 md:pl-8 mb-4 md:mb-8">
                                <p><strong>Awards:</strong> {movieDetails.Awards}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 pr-4 md:pr-8 mb-4 md:mb-8">
                                <p><strong>BoxOffice:</strong> {movieDetails.BoxOffice}</p>
                                <p><strong>Production:</strong> {movieDetails.Production}</p>
                            </div>
                            <div className="w-1/2 md:w-2/3 pl-4 md:pl-8 mb-4 md:mb-8">
                                <p><strong>Website:</strong> {movieDetails.Website}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-full">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default MovieDetails;

