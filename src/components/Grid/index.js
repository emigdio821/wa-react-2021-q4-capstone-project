import React from "react";
import GridItem from "./GridItem";
import { BiCategory } from "react-icons/bi";
import ProductCategories from "mocks/en-us/product-categories.json";
import "./Grid.scss";

const Grid = () => {
  const { results } = ProductCategories;

  return (
    <div className="container">
      <h1 className="category-title">
        <BiCategory />
        ・Categories
      </h1>
      <div className="grid">
        {results.map(({ id, data }) => (
          <GridItem key={id} item={data} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
