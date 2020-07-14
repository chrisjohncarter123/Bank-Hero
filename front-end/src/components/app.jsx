import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './app.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Header from './header'
import Footer from './footer'
import Home from './home'
import Profile from './profile'
import AddBank from './addBank'
import NewUser from './newUser'
import store from '../store';
import StoreContext from '../contexts/storeContext';
import Astronauts from './astronauts';
import Cats from './cats'


class App extends Component {

    handleLoggedIn = (email) => {
        console.log("Getting the user " + email)

        this.setState({currentEmail:email});

    }

    handleOnClick = event => {
        this.props.increaseCount();
        this.props.fetchAstronauts();
        console.log(this.props)
      };


    render() { 
        return ( 
            
            <div>
                    <h1>Bank Hero</h1>

                    <Router>
                        <div className="block">
                        <ul id="menu">
                            <li>
                            <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                            <Link to="/accounts">Accounts</Link>
                            </li>
                            <li>
                            <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                            <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                            <Link to="/astronauts">Astronauts</Link>
                            </li>
                            <li>
                            <Link to="/cats">Cats</Link>
                            </li>
                        </ul>
                        </div>
                        <div id="content">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/astronauts" component={Astronauts} />
                            <Route exact path="/dashboard" component={Home} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/addbank" component={AddBank} />
                            <Route exact path="/cats" component={Cats} />
                        </div>
                    </Router>

                    <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
            </div>


         );
    }
}
 
const mapStateToProps = state => {
    return {
      items: state.items
    };
  };
   
  const mapDispatchToProps = dispatch => {
    return {
      increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
    };
  };

  
   
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);