import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';
import { searchMovies } from '../../api';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query') || '');
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      if (query) {
        fetchMovies(query);
      }
    }, [query]);
  
    const fetchMovies = async (query) => {
      try {
        searchMovies(query).then(setMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    const handleSearch = async (e) => {
      e.preventDefault();
      const form = e.target;
      const newQuery = form.elements.query.value;
      setSearchParams({ query: newQuery });
      setQuery(newQuery);
    
    };
  
    return (
      <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit" className={styles.button}>Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
    );
  };
  
  export default MoviesPage;
 