import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formatCurrency from 'helpers/currency';
import { BiCartAlt } from 'react-icons/bi';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Zoom, Navigation, Pagination } from 'swiper';
import styles from './ProductItem.module.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Swiper.scss';

SwiperCore.use([Zoom, Navigation, Pagination]);

const ProductItem = ({ item }) => {
  const [qty, setQty] = useState(1);
  const { data, tags } = item;
  const {
    sku,
    name,
    specs,
    price,
    images,
    short_description: shortDescription,
    category: { slug: categorySlug },
  } = data;

  const handleChangeQty = (e) => {
    const { id } = e.target;
    if (id === 'addBtn') {
      setQty(qty + 1);
    } else if (id === 'subtractBtn') {
      if (qty - 1 === 0) {
        return;
      }
      setQty(qty - 1);
    }
  };

  const handleChangeQtyInput = (e) => {
    const { value } = e.target;
    if (value >= 1) {
      setQty(value);
    }
  };

  const cartStyles = {
    [styles.btn]: true,
    [styles.yellow]: true,
    [styles.cart]: true,
  };

  return (
    <>
      <div className={styles['pitem-item']}>
        <Swiper
          zoom
          navigation
          style={{ marginBottom: 20 }}
          pagination={{
            clickable: true,
          }}
          className="product-swipper"
        >
          {images.map(({ image: { url: sUrl, alt: sAlt } }) => (
            <SwiperSlide key={`${sUrl}-slide`}>
              <div className="swiper-zoom-container">
                <img src={sUrl} alt={sAlt} className={styles['pitem-img']} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <h2 className={styles['pitem-item-title']} title={name}>
          {name}
        </h2>
        <span className={styles['category-name']}>
          {categorySlug.replaceAll('--', ' & ')}
        </span>
        <span className={styles['bold-font']}>
          SKU:
          {' '}
          {sku}
        </span>
        <div className={styles['tag-container']}>
          {tags.map((tagName) => (
            <span key={tagName} className={styles['tag-name']}>
              {tagName}
            </span>
          ))}
        </div>
        <div className={styles['description-container']}>
          <p className={styles['product-description']}>{shortDescription}</p>
        </div>
        <div className={styles['product__qty-container']}>
          <button
            type="button"
            id="subtractBtn"
            className={classNames(styles.btn, styles['input-number-decrement'])}
            onClick={handleChangeQty}
            disabled={qty === 1}
          >
            –
          </button>
          <input
            type="number"
            value={qty}
            id="productQty"
            name="productQty"
            className={styles['input-number']}
            onChange={handleChangeQtyInput}
          />
          <button
            type="button"
            id="addBtn"
            className={classNames(styles.btn, styles['input-number-increment'])}
            onClick={handleChangeQty}
          >
            +
          </button>
        </div>
        <div className={styles['cart-container']}>
          <span className={classNames(cartStyles)}>
            Add to cart
            <BiCartAlt />
          </span>
        </div>
        <div className={styles['price-container']}>
          <span className={styles.price}>{formatCurrency(price)}</span>
        </div>
      </div>
      <div className={styles['specs-table']}>
        <h4>Product specs</h4>
        <table>
          <tbody>
            {specs.map(({ spec_name: sName, spec_value: sValue }) => (
              <tr key={`${sName}-spec`}>
                <td style={{ fontWeight: 500 }}>{sName}</td>
                <td>{sValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.shape({
      sku: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      specs: PropTypes.arrayOf(PropTypes.object).isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string,
          }).isRequired,
        }),
      ).isRequired,
      short_description: PropTypes.string.isRequired,
      mainimage: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
      category: PropTypes.shape({ slug: PropTypes.string.isRequired })
        .isRequired,
    }),
  }).isRequired,
};
