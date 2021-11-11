import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { reducer, initialState } from './GlobalReducer';

const GlobalContext = createContext();
const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.cartItems.length) {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  } else {
    localStorage.removeItem('cartItems');
  }

  return (
    <GlobalContext.Provider
      value={{
        dispatch,
        cartItems: state.cartItems,
        productFilteredBy: state.productFilteredBy,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, useGlobalContext };

GlobalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
