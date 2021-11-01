import React from 'react';
import classNames from 'classnames';
import NotFound from 'pages/NotFound';
import Loader from 'components/Loader';
import { SEARCH_URL } from 'utils/constants';
import { useLocation } from 'react-router-dom';
import Pagination from 'components/Pagination';
import useAxiosRequest from 'utils/hooks/useAxiosRequest';
import styles from './Search.module.scss';

const Search = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const searchQuery = queryParams.get('q');
  const url = `${SEARCH_URL}${searchQuery}%22)%5D%5D&lang=en-us&pageSize=20`;
  const { data: categories, isLoading } = useAxiosRequest(url);
  const { results } = Object.keys(categories).length
    ? categories
    : { results: [] };

  const containerStyles = {
    [styles['search-container']]: true,
    [styles['container-loading']]: isLoading,
  };

  return (
    <div className={classNames(containerStyles)}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!results.length ? (
            <NotFound msg={`nothing found for "${searchQuery}"`} noHeight />
          ) : (
            <>
              <h1>Products found</h1>
              <Pagination items={results} showDescription />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
