import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';

class Home extends Component{

  static contextType = StoreContext;

  handleOnClick = () => {
    console.log("handleOnClicks")
    
    this.props.fetchAccounts()
    
    //console.log(this.props.astronauts)
    
}



  componentDidMount() {
    console.log("store", this.context)
  }

  render() {
    return (
      <StoreContext.Consumer>
        {StoreContext => 
          <div className="Home">
            
            <h2>Bank Accounts:</h2>

            <a href="AddBank">Add Bank</a>


            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            
          </div>
        }
      </StoreContext.Consumer>
    );
  }
}

export default Home;
