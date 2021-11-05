import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import routes from 'Routes';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
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
          {routes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              key={`${route.path}-route`}
            >
              <route.component />
            </Route>
          ))}
        </Switch>
      </div>
      <Footer />
      <ScrollTop />
    </Router>
  </>
);
export default App;
