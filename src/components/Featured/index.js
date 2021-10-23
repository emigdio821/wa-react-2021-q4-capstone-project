import React, { useState, useRef, useEffect, useContext } from "react";
import FeaturedItem from "./FeaturedItem";
import { BiBookmarkHeart } from "react-icons/bi";
import FeaturedProducts from "mocks/en-us/featured-products.json";
import GlobalContext from "context/GlobalContext";
import styles from "./Featured.module.scss";

const Featured = () => {
  const { results } = FeaturedProducts;
  const featuredRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const { setCurrentPage } = useContext(GlobalContext);

  const onHandleScrollEnd = () => {
    const featureDiv = featuredRef.current;
    if (
      Math.floor(featureDiv.scrollWidth - featureDiv.scrollLeft) <=
      featureDiv.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  useEffect(() => {
    featuredRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      featuredRef.current.scrollLeft += e.deltaY * 6;
    });
  }, []);

  const onScrollCheck = () => {
    const featureDiv = featuredRef.current;
    setScrollX(featureDiv.scrollLeft);
    onHandleScrollEnd();
  };

  const onSlideX = (nextBtn) => {
    const featureDiv = featuredRef.current;
    if (!nextBtn) {
      featureDiv.scrollLeft -= featureDiv.offsetWidth;
      setScrollX(scrollX - featureDiv.offsetWidth);
    } else {
      featureDiv.scrollLeft += featureDiv.offsetWidth;
      setScrollX(scrollX + featureDiv.offsetWidth);
    }
    onHandleScrollEnd();
  };

  const onShowBrowseAllPage = () => {
    setCurrentPage("/products");
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles["featured-container"]}>
      <h1 className={styles["featured-title"]}>
        <BiBookmarkHeart />
        ・Featured
      </h1>
      <div
        className={styles.featured}
        ref={featuredRef}
        onScroll={onScrollCheck}
      >
        {results.map(({ id, data }) => (
          <FeaturedItem key={id} item={data} />
        ))}
      </div>
      <div className={styles["featured__action-btns"]}>
        <button
          className={`${styles.btn} ${styles.primary} ${styles["prev-btn"]}`}
          onClick={() => onSlideX(false)}
          disabled={scrollX === 0}
        >
          &larr; Prev
        </button>
        <button
          className={`${styles.btn} ${styles.primary} ${styles["next-btn"]} ${styles["m__left-btn"]}`}
          onClick={() => onSlideX(true)}
          disabled={scrollEnd}
        >
          Next &#8594;
        </button>
        <button
          className={`${styles.btn} ${styles.primary} ${styles["m__left-btn"]}`}
          onClick={onShowBrowseAllPage}
        >
          View all products
        </button>
      </div>
    </div>
  );
};

export default Featured;
