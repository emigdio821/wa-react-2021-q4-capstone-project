import React, { useState, createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [page, setPage] = useState("/");
  const [pFilteredBy, setPFilteredBy] = useState([]);

  const setCurrentPage = (page) => {
    setPage(page);
  };

  const setProductFiltered = (filter, isActiveFilter) => {
    if (isActiveFilter) {
      setPFilteredBy((old) => old.concat(filter));
    } else {
      setPFilteredBy((old) => old.filter((f) => f !== filter));
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        setCurrentPage,
        currentPage: page,
        setProductFiltered,
        productFilteredBy: pFilteredBy,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
export default GlobalContext;
