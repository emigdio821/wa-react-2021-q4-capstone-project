import React from 'react';
import { Link } from 'react-router-dom';
import { BiBookmarkHeart } from 'react-icons/bi';
import useAxiosRequest from 'utils/hooks/useAxiosRequest';
import Loader from 'components/Loader';
import { FEATURED_URL } from 'utils/constants';
import classNames from 'classnames';
import Pagination from 'components/Pagination';
import styles from './Featured.module.scss';

const Featured = () => {
  const { data: categories, isLoading } = useAxiosRequest(FEATURED_URL);
  const { results } = Object.keys(categories).length
    ? categories
    : { results: [] };

  const containerClasses = {
    [styles['featured-container']]: true,
    [styles['featured__container-loading']]: isLoading,
  };

  return (
    <div className={classNames(containerClasses)}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={styles['featured-title']}>
            <BiBookmarkHeart />
            ・Featured
          </h1>
          <Pagination items={results} />
          <div className={styles['featured__action-btns']}>
            <Link to="/products" className={styles['no-decoration']}>
              <button
                type="button"
                className={`${styles.btn} ${styles.primary}`}
              >
                Browse all
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
