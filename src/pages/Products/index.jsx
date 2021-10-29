import React, { useContext, useState, useEffect } from 'react';
import FilterSidebar from 'components/FilterSidebar';
import GlobalContext from 'context/GlobalContext';
import Pagination from 'components/Pagination';
import Loader from 'components/Loader';
import classNames from 'classnames';
import useAxiosRequest from 'utils/hooks/useAxiosRequest';
import { PRODUCTS_URL } from 'utils/constants';
import NotFound from 'pages/NotFound';
import styles from './Products.module.scss';

const Products = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { productFilteredBy } = useContext(GlobalContext);
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
