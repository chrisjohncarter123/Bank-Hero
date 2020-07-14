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
            <p><b>Account Name: </b>{this.props.name}</p>
            <p><b>Cash: </b>{this.props.cash}</p>

          </div>
        }
        </StoreContext.Consumer>
    );
  }
}
 
export default Account;

