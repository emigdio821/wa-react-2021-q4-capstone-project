import React, { useState, useEffect, useContext } from 'react';
import { BiFilter, BiXCircle } from 'react-icons/bi';
import useScrollListener from 'utils/hooks/useScrollListener';
import classNames from 'classnames';
import { CATEGORIES_URL } from 'utils/constants';
import useAxiosRequest from 'utils/hooks/useAxiosRequest';
import Loader from 'components/Loader';
import GlobalContext from 'context/GlobalContext';
import FilterSidebarItem from './FilterSidebarItem';
import styles from './FilterSidebar.module.scss';

const FilterSidebar = () => {
  const scroll = useScrollListener();
  const [scrolledWindow, setScrolledWindow] = useState(false);
  const [clearedFilter, setClearedFilter] = useState(false);
  const { clearProductFilter, productFilteredBy } = useContext(GlobalContext);
  const { data: categories, isLoading } = useAxiosRequest({
    url: CATEGORIES_URL,
  });
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
    if (clearedFilter) {
      setClearedFilter(false);
      clearProductFilter();
    }

    if (scroll.y > 80 && scroll.y - scroll.lastY > 0) {
      setScrolledWindow(true);
    } else {
      setScrolledWindow(false);
    }
  }, [scroll.lastY, scroll.y, clearedFilter]);

  const sidebarClasses = {
    [styles.sidebar]: true,
    [styles['dynamic-sidebar']]: scrolledWindow,
    [styles['navbar-loading']]: isLoading,
  };

  const clearBtnClasses = {
    [styles['sidebar-item']]: true,
    [styles['clear-filer']]: true,
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
