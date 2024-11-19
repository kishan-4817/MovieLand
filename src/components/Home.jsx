import { useEffect, useState, React }  from 'react';

import MovieCard from './MovieCard';
import SearchIcon from '../assets/search.svg';
import Header from './Header';
import Footer from './Footer';

import '../App.css';
import '../Index.css';

const API_KEY = 'd2e19e09';
const API_ENDPOINT = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

const Home = () => {
    useEffect(() => {
        SearchMovies('Fast and Furious');
    }, []);
    
    const [Movies, setMovies] = useState({});
    const [SearchTerm, setSearchTerm] = useState('');

    const SearchMovies = async (title) => {
    const response = await fetch(`${API_ENDPOINT}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    };
    
    return (
    <>
    <Header />
    <div className="p-16 flex flex-col justify-center items-center">
        <h1 className="my-8 text-6xl tracking-wide font-bold bg-gradient-to-r from-[#f9d3b4] to-transparent bg-clip-text text-transparent">
        MovieLand
        </h1>
        <div className="w-4/5 my-8 flex items-center justify-center p-6 rounded-full bg-[#1f2123] shadow-neu">
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
            onClick={() => SearchMovies(SearchTerm)}
            className="w-9 h-9 cursor-pointer"
        />
        </div>

        {Movies?.length > 0 ? (
        <div className="w-full mt-12 flex justify-center items-center flex-wrap">
            {Movies.map((movie) => (
            <MovieCard Movie={movie} key={movie.id} />
            ))}
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

export default Home;