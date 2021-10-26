import React from "react";
import GridItem from "./CategoryItem";
import { BiCategory } from "react-icons/bi";
import ProductCategories from "mocks/en-us/product-categories.json";
import styles from "./Categories.module.scss";

const Categories = () => {
  const { results } = ProductCategories;

  return (
    <div className={styles["categories-container"]}>
      <h1 className={styles["category-title"]}>
        <BiCategory />
        ・Categories
      </h1>
      <div className={styles.categories}>
        {results.map(({ id, data }) => (
          <GridItem key={id} item={data} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
