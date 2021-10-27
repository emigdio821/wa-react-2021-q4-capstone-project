import React from 'react';
import classNames from 'classnames';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import styles from './Pagination.module.scss';

const Pagination = () => {
  const pages = [1, 2, 3];
  const btnStyles = {
    [[styles.btn]]: true,
    [[styles.primary]]: true,
    [[styles['page-btn']]]: true,
  };

  return (
    <ul className={styles['page-numbers']}>
      <li>
        <button type="button" className={classNames(btnStyles)} disabled>
          <BiChevronLeft />
          {' '}
          Prev
        </button>
      </li>
      {pages.map((page) => (
        <li key={page}>
          <button type="button" className={classNames(btnStyles)} disabled>
            {page}
          </button>
        </li>
      ))}
      <li>
        <button type="button" className={classNames(btnStyles)} disabled>
          Next
          {' '}
          <BiChevronRight />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
