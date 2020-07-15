
import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';


class Transaction extends Component {

   handleName = product => {
     console.log(product);
     console.log('Clicked', );
   }


  render() { 
    return (  
          <div className="account">
            
            <h3 style={this.styles}> </h3>
            <p><b>Account Name: </b>{this.props.name}</p>
            <p><b>Cash: </b>{this.props.cash}</p>

          </div>
    );
  }
}
 
export default Transaction;

