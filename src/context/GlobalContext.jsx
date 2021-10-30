import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { reducer, initialState } from './GlobalReducer';

const GlobalContext = createContext();
const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        dispatch,
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
