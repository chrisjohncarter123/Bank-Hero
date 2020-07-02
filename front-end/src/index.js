import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Profile from './Profile'
import AddBank from './AddBank'


ReactDOM.render((
  <React.Fragment>

      <Header />
      <Router>
        <div id="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/addbank" component={AddBank} />
        </div>
      </Router>
      <Footer />
  </React.Fragment>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
