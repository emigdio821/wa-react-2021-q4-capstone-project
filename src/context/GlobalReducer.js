import { product, cart } from './Types';

const initialState = {
  cartItems: [],
  productFilteredBy: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case product.addFilter:
      return {
        ...state,
        productFilteredBy: [...state.productFilteredBy, action.payload],
      };
    case product.removeFilter:
      return {
        ...state,
        productFilteredBy: state.productFilteredBy.filter(
          (filter) => filter !== action.payload,
        ),
      };
    case product.clearFilters:
      return {
        ...state,
        productFilteredBy: [],
      };
    case cart.addItem:
      return {
        ...state,
        cart: [...state.cartItems, action.payload],
      };
    case cart.removeItem:
      return {
        ...state,
        cart: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export { initialState, reducer };
