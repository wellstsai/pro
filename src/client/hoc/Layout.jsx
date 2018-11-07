import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import TopNav from '../components/TopNav';

const Layout = () => (
  <div>
    <Router>
      <React.Fragment>
        <TopNav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} /> 
      </React.Fragment>
    </Router>
  </div>
);

export default Layout;
