import React, { useState, createContext } from "react";

const PageContext = createContext();

const CurrentPageProvider = ({ children }) => {
  const [page, setPage] = useState("/");
  const setCurrentPage = (page) => {
    setPage(page);
  };

  return (
    <PageContext.Provider
      value={{
        setCurrentPage,
        currentPage: page,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export { CurrentPageProvider };
export default PageContext;
