import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';


class Account extends Component {
  state = { 
    name: "Bank of World",
    cash: "1234.43",
    tags:["tag1", "tag2", "tag3"]
   }

   styles = {
     fontWeight: "bold"
   }

   handleName = product => {
     console.log(product);
     console.log('Clicked', );
   }
   //{storeContext.name}
   //{this.store.name}

  render() { 
    return (  
      <StoreContext.Consumer>
        {storeContext => 
          <div className="account">
            
            <h3 style={this.styles}> </h3>
            <p>Account Name:{this.props.name}</p>

            <button onClick={() => this.handleName({id: 1})} className="btn btn-secondary btn-sm">View All Transactions</button>
          </div>
        }
        </StoreContext.Consumer>
    );
  }
}
 
export default Account;

