import { product } from './Types';

const initialState = {
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
    default:
      return state;
  }
};

export { initialState, reducer };
