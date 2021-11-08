import React from 'react';
import PropTypes from 'prop-types';
import formatCurrency from 'helpers/currency';
import AddToCartBtn from 'components/AddToCartBtn';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Zoom, Navigation, Pagination } from 'swiper';
import styles from './ProductItem.module.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Swiper.scss';

SwiperCore.use([Zoom, Navigation, Pagination]);

const ProductItem = ({ item }) => {
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
        <AddToCartBtn item={item} />
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
      stock: PropTypes.number.isRequired,
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
