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
      const itemId = payload.id;
      const exists = state.cartItems.some(({ id }) => id === itemId);

      if (exists) {
        const items = state.cartItems.map((item) => (item.id === itemId
          ? { ...item, qty: item.qty + 1 } : { ...item }));
        return { ...state, cartItems: items };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload, qty: 1 }],
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
