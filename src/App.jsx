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
import './App.scss';
import ScrollTop from 'components/ScrollTop';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

const App = () => {
  const { data, isLoading } = useFeaturedBanners();
  // eslint-disable-next-line no-console
  console.log(data, isLoading);
  return (
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
          </Switch>
        </div>
        <Footer />
        <ScrollTop />
      </Router>
    </>
  );
};

export default App;
