import React from 'react';
import { BiGhost } from 'react-icons/bi';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles['error-container']}>
    <div className={styles.error}>
      <BiGhost />
      <br />
      <h1>
        not found
        {' '}
        <span>|</span>
      </h1>
    </div>
  </div>
);

export default NotFound;
