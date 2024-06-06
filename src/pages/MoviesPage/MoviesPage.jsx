import { useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';
import { searchMovies } from '../../api';

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
  
    const handleSearch = async (e) => {
      e.preventDefault();
      searchMovies(query).then(setMovies);
    
    };
  
    return (
      <div className={styles.container}>
        <h1>Search Movies</h1>
        <form onSubmit={handleSearch} className={styles.form}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.input}
            placeholder="Enter movie name"
          />
          <button type="submit" className={styles.button}>Search</button>
        </form>
        <MovieList movies={movies} />
      </div>
    );
  };
  
  export default MoviesPage;