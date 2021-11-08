import React from 'react';
import { BiCategory } from 'react-icons/bi';
import useAxiosRequest from 'utils/hooks/useAxiosRequest';
import Loader from 'components/Loader';
import classNames from 'classnames';
import { CATEGORIES_URL } from 'utils/constants';
import ErrorBoundary from 'components/ErrorBoundary';
import CategoryItem from './CategoryItem';
import styles from './Categories.module.scss';

const Categories = () => {
  const { data: categories, isLoading } = useAxiosRequest(CATEGORIES_URL);
  const { results } = Object.keys(categories).length
    ? categories
    : { results: [] };

  const containerStyles = {
    [styles['categories-container']]: true,
    [styles['container-loading']]: isLoading,
  };

  return (
    <div className={classNames(containerStyles)}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={styles['category-title']}>
            <BiCategory />
            ・Categories
          </h1>
          <div className={styles.categories}>
            {results.map((item) => {
              const { id } = item;
              return (
                <ErrorBoundary key={id}>
                  <CategoryItem item={item} />
                </ErrorBoundary>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
