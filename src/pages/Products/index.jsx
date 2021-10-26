import React, { useContext, useState, useEffect } from 'react';
import ProductList from 'mocks/en-us/products.json';
import FilterSidebar from 'components/FilterSidebar';
import GlobalContext from 'context/GlobalContext';
import { BiGhost } from 'react-icons/bi';
import Pagination from 'components/Pagination';
import Loader from 'components/Loader';
import classNames from 'classnames';
import ProductItem from './ProductItem';
import styles from './Products.module.scss';

const Products = () => {
  const { results } = ProductList;
  const [data, setData] = useState([]);
  const [loadedData, setLoadedData] = useState(false);
  const { productFilteredBy } = useContext(GlobalContext);

  const containerStyles = {
    [styles['products-container']]: true,
    [styles['container-loading']]: !loadedData,
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
      setData(filteredProductData);
    } else {
      setData(results);
    }

    const timeOut = setTimeout(() => {
      setLoadedData(true);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [productFilteredBy, results]);

  return (
    <>
      <div className={classNames(containerStyles)}>
        {loadedData ? (
          <>
            <FilterSidebar />
            <h1 className={styles['product__main-title']}>Products</h1>
            <div className={styles['product-list']}>
              {data.length ? (
                data.map(({ id, data: pItem }) => (
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
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Products;
