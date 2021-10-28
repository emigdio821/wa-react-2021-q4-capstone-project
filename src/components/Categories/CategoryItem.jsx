import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Categories.module.scss';

const CategoryItem = ({ item }) => {
  const {
    slugs: { 0: categorySlug },
    data: {
      name,
      main_image: { url },
    },
  } = item;

  const categoriesStyles = {
    [styles['no-decoration']]: true,
    [styles['categories-link']]: true,
  };

  return (
    <Link
      to={`/products?category=${categorySlug}`}
      className={classNames(categoriesStyles)}
    >
      <div
        className={`${styles['categories-item']} ${styles['zoom-in']}`}
        style={{ backgroundImage: `url("${url}")` }}
      >
        <div className={styles['item-content']}>
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  item: PropTypes.shape({
    slugs: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      main_image: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};
