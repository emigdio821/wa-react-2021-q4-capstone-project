import React from 'react';
import Navbar from 'components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import Products from 'pages/Products';
import Product from 'pages/Product';
import NotFound from 'pages/NotFound';
import Search from 'pages/Search';
import Cart from 'pages/Cart';
import './App.scss';
import ScrollTop from 'components/ScrollTop';

const App = () => (
  <>
    <Router>
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/cart" component={Cart} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
      <ScrollTop />
    </Router>
  </>
);
export default App;
