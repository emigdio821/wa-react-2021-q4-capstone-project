import React, { useState, useEffect } from 'react';
import { BiFilter } from 'react-icons/bi';
import useScrollListener from 'utils/hooks/useScrollListener';
import classNames from 'classnames';
import { CATEGORIES_URL } from 'utils/constants';
import useAxiosRequest from 'utils/hooks/useAxiosRequest';
import Loader from 'components/Loader';
import styles from './FilterSidebar.module.scss';
import FilterSidebarItem from './FilterSidebarItem';

const FilterSidebar = () => {
  const scroll = useScrollListener();
  const [scrolledWindow, setScrolledWindow] = useState(false);
  const { data: categories, isLoading } = useAxiosRequest({
    url: CATEGORIES_URL,
  });
  const { results } = Object.keys(categories).length
    ? categories
    : { results: [] };

  useEffect(() => {
    if (scroll.y > 80 && scroll.y - scroll.lastY > 0) {
      setScrolledWindow(true);
    } else {
      setScrolledWindow(false);
    }
  }, [scroll.lastY, scroll.y]);

  const sidebarClasses = {
    [styles.sidebar]: true,
    [styles['dynamic-sidebar']]: scrolledWindow,
    [styles['navbar-loading']]: isLoading,
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
            {results.map((item) => {
              const { id } = item;
              return <FilterSidebarItem key={id} item={item} />;
            })}
          </ul>
        </>
      )}
    </nav>
  );
};

export default FilterSidebar;
