import React from 'react';
import PropTypes from 'prop-types';
import styles from './Categories.module.scss';

const CategoryItem = ({ item }) => {
  const {
    name,
    main_image: { url },
  } = item;

  return (
    <div
      className={`${styles['categories-item']} ${styles['zoom-in']}`}
      style={{ backgroundImage: `url("${url}")` }}
    >
      <div className={styles['item-content']}>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main_image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
