/** @format */

import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import './app.css';

import FilmCard from './FilmCard.jsx';

//API key: 4f6a34e1

const API_URL = 'http://omdbapi.com?apikey=4f6a34e1';

const App = () => {
 const [movies, setMovies] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');

 const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title} `);
  const data = await response.json();
  setMovies(data.Search);
 };
 useEffect(() => {
  searchMovies('');
 }, []);

 return (
  <div className="app">
   <h1>Film Search</h1>
   <div className="search">
    <input
     placeholder="Search for a film!"
     value={searchTerm}
     onChange={(e) => {
      setSearchTerm(e.target.value);
     }}
    />

    <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
   </div>

   {movies?.length > 0 ? (
    <div className="container">
     {movies.map((movie) => (
      <FilmCard movie={movie} />
     ))}
    </div>
   ) : (
    <div className="empty">
     <h2> No films found!</h2>
    </div>
   )}
  </div>
 );
};

export default App;
