import React, {Component} from 'react';
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


class App extends Component {

    handleLoggedIn = (email) => {
        console.log("Getting the user " + email)

        this.setState({currentEmail:email});

    }


    state = { name:"chris" };
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
                        </ul>
                        </div>
                        <div id="content">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/dashboard" component={Home} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/addbank" component={AddBank} />
                        </div>
                    </Router>

                    <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
            </div>


         );
    }
}
 
export default App;