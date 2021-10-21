import React, { useContext, useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductList from "mocks/en-us/products.json";
import FilterSidebar from "components/FilterSidebar";
import GlobalContext from "context/GlobalContext";
import { BiGhost } from "react-icons/bi";
import styles from "./Products.module.scss";

const Products = () => {
  const { results } = ProductList;
  const [data, setData] = useState(results);
  const { productFilteredBy } = useContext(GlobalContext);

  useEffect(() => {
    if (!!productFilteredBy.length) {
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

  return (
    <div className={styles["products-container"]}>
      <FilterSidebar />
      <h1 className={styles["product__main-title"]}>Products</h1>
      <div className={styles["product-list"]}>
        {!!data.length ? (
          data.map(({ id, data }) => <ProductItem key={id} item={data} />)
        ) : (
          <div className={styles["product__not-found"]}>
            No products found... <BiGhost />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
