import styles from './MovieItem.module.css';
import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import commonImage from '../../UI/commonImage.png';
import { ReactComponent as MovieItemLogo } from '../../UI/movie.svg';
export const MovieItem = ({ id, poster, title }) => {
  const location = useLocation();

  return (
    <li className={styles.item}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={styles.link}
      >
        <div className={styles.poster}>
          {poster !== null ? (
            <picture>
              <source
                srcSet={`https://themoviedb.org/t/p/w500${poster}`}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={`https://themoviedb.org/t/p/w342${poster}`}
                media="(min-width: 768px)"
              />
              <img
                alt={title}
                className={styles.itemImage}
                loading="lazy"
                src={`https://themoviedb.org/t/p/w342${poster}`}
              />
            </picture>
          ) : (
            <img
              className={styles.itemImage}
              src={commonImage}
              alt="no poster"
              loading="lazy"
            />
          )}
          <div className={styles.overlay}>
            <p>Show more details</p>
            <div className={styles.icon}>
              <MovieItemLogo />
            </div>
          </div>
          {/*<p >.</p>*/}
        </div>
        <div className={styles.title}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  poster: propTypes.string,
};
