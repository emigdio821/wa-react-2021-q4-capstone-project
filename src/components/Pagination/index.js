import React from "react";
import classNames from "classnames";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  const pages = [1, 2, 3];
  const btnStyles = {
    [[styles.btn]]: true,
    [[styles.primary]]: true,
    [[styles["page-btn"]]]: true,
  };

  return (
    <ul className={styles["page-numbers"]}>
      <li>
        <button className={classNames(btnStyles)} disabled>
          &larr; Prev
        </button>
      </li>
      {pages.map((page) => (
        <li key={page}>
          <button className={classNames(btnStyles)} disabled>
            {page}
          </button>
        </li>
      ))}
      <li>
        <button className={classNames(btnStyles)} disabled>
          Next &#8594;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
