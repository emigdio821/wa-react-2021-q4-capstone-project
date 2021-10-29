import React, { useState } from 'react';
import classNames from 'classnames';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import GridItem from 'components/GridItem';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

const Pagination = ({ items, itemsPerPage, showDescription }) => {
  const [currPage, setCurrPage] = useState(1);

  const handlePageNumber = (e) => {
    setCurrPage(Number(e.target.id));
  };

  const handlePrevBtn = () => {
    setCurrPage(currPage - 1);
  };

  const handleNextBtn = () => {
    setCurrPage(currPage + 1);
  };

  const pages = [];

  const lastItemIdx = currPage * itemsPerPage;
  const firstItemIdx = lastItemIdx - itemsPerPage;
  const currItems = items.slice(firstItemIdx, lastItemIdx);

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i += 1) {
    pages.push(i);
  }

  const btnStyles = {
    [[styles.btn]]: true,
    [[styles.primary]]: true,
    [[styles['page-btn']]]: true,
  };

  return (
    <>
      <div className={styles.grid}>
        {currItems.map((item) => (
          <GridItem key={item.id} item={item} showDesc={showDescription} />
        ))}
      </div>
      <div className={styles['pagination-container']}>
        <ul className={styles['page-numbers']}>
          <li>
            <button
              type="button"
              className={classNames(btnStyles)}
              onClick={handlePrevBtn}
              disabled={currPage === pages[0]}
            >
              <BiChevronLeft />
              {' '}
              Prev
            </button>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <button
                id={page}
                type="button"
                onClick={handlePageNumber}
                disabled={currPage === page}
                className={classNames(btnStyles)}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className={classNames(btnStyles)}
              onClick={handleNextBtn}
              disabled={currPage === pages[pages.length - 1]}
            >
              Next
              {' '}
              <BiChevronRight />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;

Pagination.defaultProps = {
  showDescription: false,
  itemsPerPage: 12,
};

Pagination.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsPerPage: PropTypes.number,
  showDescription: PropTypes.bool,
};
