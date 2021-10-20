import React from "react";
import ProductItem from "./ProductItem";
import ProductList from "mocks/en-us/products.json";
import Sidebar from "components/Sidebar";
import "./Products.scss";

const Products = () => {
  const { results } = ProductList;

  return (
    <div className="page-container">
      <Sidebar />
      <h1 className="product__main-title">Product list</h1>
      <div className="product-list">
        {results.map(({ id, data }) => (
          <ProductItem key={id} item={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
