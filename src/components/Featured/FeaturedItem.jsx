import React from 'react';
import PropTypes from 'prop-types';
import formatCurrency from 'helpers/currency';
import styles from './Featured.module.scss';

const FeaturedItem = ({ item }) => {
  const {
    name,
    alt,
    category: { slug: categorySlug },
    price,
    mainimage: { url },
  } = item;

  return (
    <div className={styles['featured-item']}>
      <img src={url} alt={alt} className={styles['featured-img']} />
      <h3 className={styles['featured-item-title']} title={name}>
        {name}
      </h3>
      <div className={styles['category-container']}>
        <span className={styles['category-name']}>{categorySlug}</span>
      </div>
      <div className={styles['price-container']}>
        <span className={styles.price}>{formatCurrency(price)}</span>
      </div>
    </div>
  );
};

export default FeaturedItem;

FeaturedItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    alt: PropTypes.string,
    category: PropTypes.shape({ slug: PropTypes.string.isRequired }).isRequired,
    price: PropTypes.number.isRequired,
    mainimage: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
