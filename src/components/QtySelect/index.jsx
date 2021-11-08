import React from 'react';
import PropTypes from 'prop-types';
import { cart } from 'context/Types';
import { BiTrash } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import styles from './QtySelect.module.scss';

const QtySelect = ({ id, qty, opts }) => {
  const { dispatch } = useGlobalContext();

  const selectOptions = (stock) => {
    const options = [];
    for (let i = 1; i <= stock; i += 1) {
      options.push(i);
    }

    return options;
  };

  const handleQtyChange = (e) => {
    const { value } = e.target;
    const itemId = e.target.getAttribute('itemID');

    dispatch({
      type: cart.updateItem,
      payload: { id: itemId, qty: Number(value) },
    });
  };

  return (
    <>
      <select
        itemID={id}
        name="qtySelect"
        defaultValue={qty}
        className={styles['qty-select']}
        onChange={handleQtyChange}
      >
        {selectOptions(opts).map((opt) => (
          <option key={`${opt}-qty-option`} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <BiTrash
        title="Remove from cart"
        className={styles['delete__item-btn']}
        onClick={() => dispatch({ type: cart.removeItem, payload: id })}
      />
    </>
  );
};

export default QtySelect;

QtySelect.propTypes = {
  id: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  opts: PropTypes.number.isRequired,
};
