import React, {Component} from 'react';
import { connect } from 'react-redux';
import './app.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Footer from './footer'
import Home from './home'
import Profile from './profile'
import TransactionsPage from './transactionsPage'
import Logo from './logo'
import Logo2 from './logo2'
import createAccountForm from './createAccountForm';
import accountDetailsListContainer from './accountDetailsListContainer';



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
                            <Link to="/newaccount">New Account</Link>
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
                        </ul>
                            
                            <Route exact path="/profile" component={Profile} />
                        </div>
                        <div id="content">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/newaccount" component={createAccountForm} />
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