import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Loader from 'components/Loader';
import { CATEGORIES_URL } from 'utils/constants';
import { BiFilter, BiXCircle } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import useAxiosRequest from 'utils/hooks/useAxiosRequest';
import useScrollListener from 'utils/hooks/useScrollListener';
import { product } from 'context/Types';
import FilterSidebarItem from './FilterSidebarItem';
import styles from './FilterSidebar.module.scss';

const FilterSidebar = () => {
  const scroll = useScrollListener();
  const [scrolledWindow, setScrolledWindow] = useState(false);
  const [clearedFilter, setClearedFilter] = useState(false);
  const { dispatch, productFilteredBy } = useGlobalContext();
  const { data: categories, isLoading } = useAxiosRequest(CATEGORIES_URL);
  const { results } = Object.keys(categories).length
    ? categories
    : { results: [] };

  const handleClearFilters = () => {
    setClearedFilter(true);
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      handleClearFilters();
    }
  };

  useEffect(() => {
    if (scroll.y > 80 && scroll.y - scroll.lastY > 0) {
      setScrolledWindow(true);
    } else {
      setScrolledWindow(false);
    }
    if (clearedFilter) {
      setClearedFilter(false);
      dispatch({ type: product.clearFilters });
    }
  }, [scroll.y, clearedFilter]);

  const sidebarClasses = {
    [styles.sidebar]: true,
    [styles['dynamic-sidebar']]: scrolledWindow,
    [styles['navbar-loading']]: isLoading,
  };

  const clearBtnClasses = {
    [styles['sidebar-item']]: true,
    [styles['clear-filter']]: true,
  };

  return (
    <nav className={classNames(sidebarClasses)}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className={`${styles['sidebar-title']} ${styles.uppercase}`}>
            <BiFilter />
            <span className={styles['sidebar__item-title']}>Filter by</span>
          </h3>
          <ul className={styles['sidebar-nav']}>
            <li className={styles['sidebar__item-title-mobile']}>
              <BiFilter />
            </li>
            {!!productFilteredBy.length && (
              <li>
                <span
                  role="button"
                  tabIndex="0"
                  onKeyDown={handleKeyDown}
                  onClick={handleClearFilters}
                  className={classNames(clearBtnClasses)}
                >
                  <BiXCircle />
                  Clear filters
                </span>
              </li>
            )}
            {results.map((item) => {
              const { id } = item;
              return (
                <FilterSidebarItem
                  key={id}
                  item={item}
                  isCleared={clearedFilter}
                />
              );
            })}
          </ul>
        </>
      )}
    </nav>
  );
};

export default FilterSidebar;
