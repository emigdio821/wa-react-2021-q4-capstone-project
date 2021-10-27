import React, { useContext, useState, useEffect } from 'react';
import FilterSidebar from 'components/FilterSidebar';
import GlobalContext from 'context/GlobalContext';
import { BiGhost } from 'react-icons/bi';
import Pagination from 'components/Pagination';
import Loader from 'components/Loader';
import classNames from 'classnames';
import useAxiosRequest from 'utils/hooks/useAxiosRequest';
import { PRODUCTS_URL } from 'utils/constants';
import ProductItem from './ProductItem';
import styles from './Products.module.scss';

const Products = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { productFilteredBy } = useContext(GlobalContext);
  const { data: categories, isLoading } = useAxiosRequest({
    url: PRODUCTS_URL,
  });
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
            {filteredData.length ? (
              filteredData.map(({ id, data: pItem }) => (
                <ProductItem key={id} item={pItem} />
              ))
            ) : (
              <div className={styles['product__not-found']}>
                No products found...
                {' '}
                <BiGhost />
              </div>
            )}
          </div>
          <div className={styles.pagination}>
            <Pagination />
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
