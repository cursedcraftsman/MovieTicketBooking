 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=212870d6f4626aa05072fa8d8a982013&language=en-US&page=1';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h2>Popular Movies</h2>
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`} className="movie-link">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </Link>
            <Link 
              to={`/book/${movie.id}`} 
              state={{ movie }} 
              className="book-movie-button"
            >
              Book Ticket
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
