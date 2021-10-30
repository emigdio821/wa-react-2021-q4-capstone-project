const initialState = {
  productFilteredBy: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_FILTER':
      return {
        ...state,
        productFilteredBy: [...state.productFilteredBy, action.payload],
      };
    case 'REMOVE_PRODUCT_FILTER':
      return {
        ...state,
        productFilteredBy: state.productFilteredBy.filter(
          (filter) => filter !== action.payload,
        ),
      };
    case 'CLEAR_PRODUCT_FILTERS':
      return {
        ...state,
        productFilteredBy: [],
      };
    default:
      return state;
  }
};

export { initialState, reducer };
