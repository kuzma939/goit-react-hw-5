import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './MovieDetailsPage.module.css';
import { fetchMovieDetails } from '../../api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchDetails = async () => {
        try {
          const movieData = await fetchMovieDetails(movieId);
          setMovie(movieData);
        } catch (error) {
          console.error('Failed to fetch movie details:', error);
        }
      };
  
      fetchDetails();
    }, [movieId]);

  return (
    <div className={styles.container}>
      {movie && (
        <>
          <Link to={backLinkHref} className={styles.backLink}>Go back</Link>
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={styles.image} />
          <p>{movie.overview}</p>
          <ul>
            <li>
              <Link to="cast" className={styles.link}>Cast</Link>
            </li>
            <li>
              <Link to="reviews" className={styles.link}>Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;