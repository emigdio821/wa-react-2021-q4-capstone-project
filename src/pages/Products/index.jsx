import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import NotFound from 'pages/NotFound';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import { PRODUCTS_URL } from 'utils/constants';
import FilterSidebar from 'components/FilterSidebar';
import { useGlobalContext } from 'context/GlobalContext';
import useAxiosRequest from 'utils/hooks/useAxiosRequest';
import styles from './Products.module.scss';

const Products = () => {
  const { productFilteredBy } = useGlobalContext();
  const [filteredData, setFilteredData] = useState([]);
  const { data: categories, isLoading } = useAxiosRequest(PRODUCTS_URL);
  const { results } = Object.keys(categories).length
    ? categories
    : { results: [] };

  const containerStyles = {
    [styles['products-container']]: true,
    [styles['container-loading']]: isLoading,
  };

  useEffect(() => {
    if (productFilteredBy.length) {
      const filteredProductData = results.filter(
        ({
          data: {
            category: { slug },
          },
        }) => productFilteredBy.includes(slug),
      );
      setFilteredData(filteredProductData);
    } else {
      setFilteredData(results);
    }
  }, [productFilteredBy, !isLoading]);

  return (
    <div className={classNames(containerStyles)}>
      <FilterSidebar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={styles['product__main-title']}>Products</h1>
          <div className={styles['product-list']}>
            {!filteredData.length ? (
              <NotFound msg="no products found" noHeight />
            ) : (
              <Pagination items={filteredData} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
