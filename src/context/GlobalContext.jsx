import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [pFilteredBy, setPFilteredBy] = useState([]);

  const setProductFiltered = (filter, isActiveFilter) => {
    if (isActiveFilter) {
      setPFilteredBy((old) => old.concat(filter));
    } else {
      setPFilteredBy((old) => old.filter((f) => f !== filter));
    }
  };

  const clearProductFilter = () => {
    setPFilteredBy([]);
  };

  return (
    <GlobalContext.Provider
      value={{
        setProductFiltered,
        clearProductFilter,
        productFilteredBy: pFilteredBy,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
export default GlobalContext;

GlobalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
