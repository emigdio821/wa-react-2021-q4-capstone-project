import React, { useContext } from "react";
import Navbar from "components/Navbar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "components/Footer";
import Home from "pages/Home";
import Products from "pages/Products";
import "./App.scss";
import GlobalContext from "context/GlobalContext";
import ScrollTop from "components/ScrollTop";

const App = () => {
  const { currentPage } = useContext(GlobalContext);
  return (
    <>
      {/* <Router> */}
      <div id="App" className="App">
        <Navbar currentPage={currentPage} />
        <div className="main-container">
          {/* <Switch>
              <Route exact path="/" component={Home} />
            </Switch> */}
          {/* {console.log(PageC)} */}
          {currentPage === "/" && <Home />}
          {currentPage === "/products" && <Products />}
        </div>
        <Footer />
        <ScrollTop />
      </div>
      {/* </Router> */}
    </>
  );
};

export default App;
