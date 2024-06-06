import { NavLink } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => (
  <ul className={styles.list}>
    {movies.map(movie => (
      <li key={movie.id} className={styles.item}>
        <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
      </li>
    ))}
  </ul>
);

export default MovieList;

