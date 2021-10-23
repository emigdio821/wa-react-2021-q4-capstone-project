import React from 'react';
import { BiCoffee } from 'react-icons/bi';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer>
    <div className={styles['footer-container']}>
      <div className="footer-item">
        <a
          href="https://github.com/emigdio821"
          target="_blank"
          rel="noreferrer"
          className={styles['footer-link']}
        >
          <span className={styles['github-link']}>
            @emigdio821
            {' '}
            <BiCoffee />
          </span>
        </a>
      </div>
      <div className={styles['footer-item']}>
        Ecommerce created during
        {' '}
        <a
          href="https://www.wizeline.com/"
          target="_blank"
          rel="noreferrer"
          className={`${styles['footer-link']} ${styles.wizeline}}`}
        >
          <span>WIZE</span>
          <span style={{ color: '#ff4d4f' }}>LINE</span>
        </a>
        ’s
        {' '}
        <a
          href="https://academy.wizeline.com/"
          target="_blank"
          rel="noreferrer"
          className={styles['footer-link']}
        >
          Academy
        </a>
        {' '}
        React
        <span style={{ fontWeight: 'bold' }}>Bootcamp</span>
      </div>
    </div>
  </footer>
);

export default Footer;
