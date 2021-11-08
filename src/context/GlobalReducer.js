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
    case cart.addItem: {
      const { payload } = action;
      const itemId = payload.item.id;
      const exists = state.cartItems.some(({ id }) => id === itemId);

      if (exists) {
        const items = state.cartItems.map((item) => (item.id === itemId
          ? { ...payload.item, qty: item.qty + payload.qty }
          : { ...item }));
        return { ...state, cartItems: items };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload.item, qty: payload.qty }],
      };
    }
    case cart.removeItem:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case cart.updateItem: {
      return {
        ...state,
        cartItems: state.cartItems.map((item) => (item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : { ...item })),
      };
    }
    default:
      return state;
  }
};

export { initialState, reducer };
