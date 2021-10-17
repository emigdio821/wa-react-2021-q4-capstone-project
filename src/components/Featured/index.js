import React from "react";
import FeaturedItem from "./FeaturedItem";
import FeaturedProducts from "mocks/en-us/featured-products.json";
import "./Featured.scss";

const Featured = () => {
  const { results } = FeaturedProducts;

  return (
    <div className="container">
      <h1 className="featured-title">Featured products</h1>
      <div className="featured">
        {results.map(({ id, data }) => (
          <FeaturedItem key={id} item={data} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
