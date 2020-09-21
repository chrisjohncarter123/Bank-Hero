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
import NewUser from './newUser'
import store from '../store';
import StoreContext from '../contexts/storeContext';
import Astronauts from './astronauts';
import Cats from './cats'
import TransactionsPage from './transactionsPage'
import Logo from './logo'
import Logo2 from './logo2'
import UserProfileBadge from './userProfileBadge'
import accountDetailsPage from './accountDetailsPage'



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
      console.log(1)
        return ( 
            <div>
                    <Logo />
                    <Logo2 title='The Savior Bank'/>

                    <Router>
                        <div className="block">
                        <ul id="menu">
                            <li>
                            <Link to="/home">Home</Link>
                            </li>
                            <li>
                            <Link to="/home">New Account</Link>
                            </li>
                            <li>
                            <Link to="/accountdetails">Account Details</Link>
                            </li>
                            <li>
                            <Link to="/transactions">Transactions</Link>
                            </li>
                            <li>
                            <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                            <Link to="/contact">Contact</Link>
                            </li>
                            {/*
                            <li>
                            <Link to="/astronauts">Astronauts</Link>
                            </li>
                            <li>
                            <Link to="/cats">Cats</Link>
                            </li>
                             */}
                        </ul>
                            <UserProfileBadge />
                            <Route exact path="/profile" component={Profile} />
                        </div>
                        <div id="content">
                            <Route exact path="/" component={Home} />
                            {/*
                              <Route exact path="/astronauts" component={Astronauts} />
                              <Route exact path="/cats" component={Cats} />
                            */}
                            <Route exact path="/accountdetails" component={accountDetailsPage} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/newaccount" component={Home} />
                            <Route exact path="/transactions" component={TransactionsPage} />

                            
                        </div>
                    </Router>

                    <Footer message='Thank you for using Bank-Hero!' year='2020'/>
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