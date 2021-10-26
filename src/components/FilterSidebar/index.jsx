import React, { useState, useEffect } from 'react';
import ProductCategories from 'mocks/en-us/product-categories.json';
import { BiFilter } from 'react-icons/bi';
import useScrollListener from 'hooks/useScrollListener';
import classNames from 'classnames';
import FilterSidebarItem from './FilterSidebarItem';
import styles from './FilterSidebar.module.scss';

const FilterSidebar = () => {
  const scroll = useScrollListener();
  const { results } = ProductCategories;
  const [scrolledWindow, setScrolledWindow] = useState(false);

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
  };

  return (
    <>
      <nav className={classNames(sidebarClasses)}>
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
      </nav>
    </>
  );
};

export default FilterSidebar;
