import React from 'react';
import { BiHomeHeart } from 'react-icons/bi';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.loading}>
    <div className={styles['loading-container']}>
      <span className={styles['loading-text']}>
        <BiHomeHeart />
      </span>
    </div>
  </div>
);

export default Loader;
