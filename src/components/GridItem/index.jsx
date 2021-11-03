import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatCurrency from 'helpers/currency';
import AddToCartBtn from 'components/AddToCartBtn';
import styles from './GridItem.module.scss';

const GridItem = ({ item, showDesc }) => {
  const { id, data } = item;
  const {
    name,
    price,
    short_description: shortDescription,
    mainimage: { url, alt },
    category: { slug: categorySlug },
  } = data;

  return (
    <div className={styles['grid-item']}>
      <Link to={`/product/${id}`} className={styles['no-decoration']}>
        <img src={url} alt={alt} className={styles['grid-img']} />
      </Link>
      <h2 className={styles['grid-item-title']} title={name}>
        {name}
      </h2>
      <span className={styles['category-name']}>
        {categorySlug.replaceAll('--', ' & ')}
      </span>
      {showDesc && (
        <div className={styles['description-container']}>
          <p className={styles['product-description']}>{shortDescription}</p>
        </div>
      )}
      <AddToCartBtn item={item} />
      <div className={styles['price-container']}>
        <span className={styles.price}>{formatCurrency(price)}</span>
      </div>
    </div>
  );
};

export default GridItem;

GridItem.defaultProps = {
  showDesc: false,
};

GridItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      short_description: PropTypes.string,
      mainimage: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
      category: PropTypes.shape({ slug: PropTypes.string.isRequired })
        .isRequired,
    }),
  }).isRequired,
  showDesc: PropTypes.bool,
};
