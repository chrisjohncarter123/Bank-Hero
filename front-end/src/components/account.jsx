import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';


class Account extends Component {
   styles = {
     fontWeight: "bold"
   }

  render() { 
    return (  
      <StoreContext.Consumer>
        {storeContext => 
          <div className="account">
            adasda
            
            <h3 style={this.styles}> </h3>
            <p><b>Account Name: </b>{this.props.name}</p>
            <p><b>Created At: </b>{this.props.created_at}</p>
            <p><b>Cash: </b>{this.props.cash}</p>

          </div>
        }
        </StoreContext.Consumer>
    );
  }
}
 
export default Account;

