import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import MovieCard from './MovieCard';
import SearchIcon from '../assets/search.svg';
import Header from './Header';
import Footer from './Footer';

import '../App.css';
import '../Index.css';

const API_KEY = 'd2e19e09';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const MovieFilters = () => {
    const { category } = useParams();
    const [Movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovies = useCallback(async () => {
        setLoading(true);
        setError(null);

        let url = `${API_ENDPOINT}`;

        if (category === 'top-rated') {
            url += '&type=movie&sort=rating';
        } else if (category === 'popular') {
            url += '&type=movie&s=popular';
        } else if (category === 'new-releases') {
            url += '&type=movie&s=new';
        } else if (category === 'upcoming') {
            url += '&type=movie&s=upcoming';
        } else if (category === 'genres' && SearchTerm) {
            url += `&type=movie&s=${SearchTerm}`;
        } else {
            const moviesList = ['Harry', 'Avengers', 'Batman', 'Spiderman', 'Iron Man', 'Thor', 'Captain America', 'Black Widow', 'The Hulk', 'Wonder Woman', 'Superman', 'Justice League', 'The Flash', 'Green Lantern', 'Aquaman', 'Shazam', 'Hellboy'];
            const randomIndex = Math.floor(Math.random() * moviesList.length);
            const randomMovie = moviesList[randomIndex];
            url += `&s=${randomMovie}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === 'True') {
                setMovies(data.Search);
            } else {
                setMovies([]);
                setError(data.Error);
            }
        } catch (err) {
            setError('Something went wrong!');
        } finally {
            setLoading(false);
        }
    }, [category, SearchTerm]);

    useEffect(() => { fetchMovies(); }, [fetchMovies]);

    return (
        <>
            <Header />
            <div className="p-4 sm:p-16 flex flex-col justify-center items-center">
                <h1 className="hidden sm:block my-8 text-6xl tracking-wide font-bold bg-gradient-to-r from-[#f9d3b4] to-transparent bg-clip-text text-transparent">
                    MovieLand
                </h1>
                <div className="w-full sm:w-4/5 my-8 sm:my-10 flex items-center justify-center p-4 sm:p-6 rounded-full bg-[#1f2123] shadow-neu">
                    <input
                        type="text"
                        placeholder="Search for a movie"
                        value={SearchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 border-none text-2xl font-raleway font-medium pr-4 outline-none text-[#a1a1a1] bg-[#1f2123]"
                    />
                    <img
                        src={SearchIcon}
                        alt="search"
                        onClick={() => fetchMovies()}
                        className="w-9 h-9 cursor-pointer"
                    />
                </div>

                {loading && <p>Loading...</p>}

                {Movies?.length > 0 ? (
                    <div className="w-full mt-12 flex justify-center items-center flex-wrap">
                        {Movies.map((movie) => (
                            <MovieCard Movie={movie} key={movie.imdbID} />
                        ))}
                    </div>
                ) : error ? (
                    <div className="w-full mt-12 flex justify-center items-center">
                        <h2 className="text-xl font-raleway text-[#f9d3b4]">{error}</h2>
                    </div>
                ) : (
                    <div className="w-full mt-12 flex justify-center items-center">
                        <h2 className="text-xl font-raleway text-[#f9d3b4]">No movies found</h2>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default MovieFilters;
