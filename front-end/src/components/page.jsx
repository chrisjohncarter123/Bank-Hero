import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';
import AccountsListContainer from './accountsListContainer'

class Page extends Component{

  static contextType = StoreContext;

  render() {
    
    return (
      
          <div>
            <h2>Page</h2>   
          </div>
    );
  }
}

export default Page;