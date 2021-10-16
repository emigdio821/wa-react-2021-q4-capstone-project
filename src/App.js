import Navbar from "components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "components/Footer";
import Home from "pages/Home";
import "./App.scss";

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
