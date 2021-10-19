import React, { useState, useRef, useEffect, useContext } from "react";
import FeaturedItem from "./FeaturedItem";
import { BiBookmarkHeart } from "react-icons/bi";
import FeaturedProducts from "mocks/en-us/featured-products.json";
import PageContext from "context/PageContext";
import "./Featured.scss";

const Featured = () => {
  const { results } = FeaturedProducts;
  const featuredRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const { setCurrentPage } = useContext(PageContext);

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
    <div className="container">
      <h1 className="featured-title">
        <BiBookmarkHeart />
        ・Featured
      </h1>
      <div className="featured" ref={featuredRef} onScroll={onScrollCheck}>
        {results.map(({ id, data }) => (
          <FeaturedItem key={id} item={data} />
        ))}
      </div>
      <div className="featured__action-btns">
        <button
          className="btn prev-btn"
          onClick={() => onSlideX(false)}
          disabled={scrollX === 0}
        >
          &larr; Prev
        </button>
        <button
          className="btn next-btn m__left-btn"
          onClick={() => onSlideX(true)}
          disabled={scrollEnd}
        >
          Next &#8594;
        </button>
        <button className="btn m__left-btn" onClick={onShowBrowseAllPage}>
          Browse all
        </button>
      </div>
    </div>
  );
};

export default Featured;
