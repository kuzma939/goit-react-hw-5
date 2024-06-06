
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';
import { fetchTrendingMovies } from '../../api'
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
    
  }, []);

 
  return (
    <div className={styles.container}>
      <h1>Popular Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;