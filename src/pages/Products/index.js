import React, { useContext, useState, useEffect, useCallback } from "react";
import ProductItem from "./ProductItem";
import ProductList from "mocks/en-us/products.json";
import Sidebar from "components/Sidebar";
import GlobalContext from "context/GlobalContext";
import { BiGhost } from "react-icons/bi";
import "./Products.scss";

const Products = () => {
  const { results } = ProductList;
  const [data, setData] = useState(results);
  const { productFilteredBy } = useContext(GlobalContext);

  const onFilterData = useCallback(() => {
    if (productFilteredBy.length > 0) {
      const filteredProductData = results.filter(
        ({
          data: {
            category: { slug },
          },
        }) => productFilteredBy.includes(slug)
      );
      setData(filteredProductData);
    } else {
      setData(results);
    }
  }, [productFilteredBy, results]);

  useEffect(() => {
    onFilterData();
  }, [onFilterData]);

  return (
    <div className="page-container">
      <Sidebar />
      <h1 className="product__main-title">Products</h1>
      <div className="product-list">
        {data.length > 0 ? (
          data.map(({ id, data }) => <ProductItem key={id} item={data} />)
        ) : (
          <div className="product__not-found">
            No products found... <BiGhost />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
