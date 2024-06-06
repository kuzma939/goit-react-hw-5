import axios from 'axios';
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWI3YTRkMTU2YjQzZmJmY2IzZDZiMWI2YjhhMjg2OSIsInN1YiI6IjY2MjYwN2ExMmUyYjJjMDE2MzY2YzNhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DCXTjqR4WGMSjuwgSUwPue9aExYzezKxcMhPgFTNSlw"
//const API_KEY = import.meta.env.REACT_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

export const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
