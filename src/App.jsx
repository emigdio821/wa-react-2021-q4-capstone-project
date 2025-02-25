import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import './App.scss';
import ScrollTop from 'components/ScrollTop';
import mainRoutes from './routes/Main';

const App = () => (
  <>
    <Router>
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          {mainRoutes.map((route) => (
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
