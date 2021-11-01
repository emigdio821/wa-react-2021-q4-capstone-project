import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { PRODUCT_URL } from 'utils/constants';
import useAxiosRequest from 'utils/hooks/useAxiosRequest';
import ProductItem from 'components/ProductItem';
import classNames from 'classnames';
import NotFound from 'pages/NotFound';
import styles from './Product.module.scss';

const Product = () => {
  const { id: paramId } = useParams();
  const url = `${PRODUCT_URL}${paramId}%22%29+%5D%5D`;
  const { data: categories, isLoading } = useAxiosRequest(url);
  const { results } = Object.keys(categories).length
    ? categories
    : { results: [] };

  const containerStyles = {
    [styles['product-container']]: true,
    [styles['container-loading']]: isLoading,
    [styles['container-not-found']]: !results.length,
  };

  return (
    <div className={classNames(containerStyles)}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!results.length ? (
            <NotFound />
          ) : (
            <div className={styles['item-container']}>
              <h1>Product details</h1>
              {results.map((item) => (
                <ProductItem key={item.id} item={item} productDesc />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Product;
