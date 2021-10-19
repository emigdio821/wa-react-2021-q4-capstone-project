import React from "react";
import ProductItem from "./ProductItem";
import ProductList from "mocks/en-us/products.json";
import "./Products.scss"

const Products = () => {
  const { results } = ProductList;

  return (
    <div className="page-container">
      <h1>This is the Product List Page</h1>
      <div className="product-list">
        {results.map(({ id, data }) => (
          <ProductItem key={id} item={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
