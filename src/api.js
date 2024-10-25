 
import axios from 'axios';

const API_KEY = '212870d6f4626aa05072fa8d8a982013';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return data;
};
