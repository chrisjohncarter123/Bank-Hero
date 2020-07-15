import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';


class AccountDetails extends Component {

  render() { 
    let cashStyle = {
      color: 'black'
    };
    if(this.props.cash < 0){
      cashStyle = {
        color: 'red'
      };
    }
    return (  
      <div>
          <div className="account">
            
            <h3> </h3>
            <p><b>Account Name: </b>{this.props.name}</p>
            <p><b>Created At: </b>{this.props.created_at}</p>
            <p><b>Cash: </b><span style={cashStyle}>{this.props.cash}</span></p>

          </div>  
        </div>
    );
  }
}
 
export default AccountDetails;

