import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';


class Account extends Component {
   styles = {
     fontWeight: "bold"
   }

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
      <StoreContext.Consumer>
        {storeContext => 
          <div className="account">
            
            <h3 style={this.styles}> </h3>
            <p><b>Account Name: </b>{this.props.name}</p>
            <p><b>Created At: </b>{this.props.created_at}</p>
            <p><b>Cash: </b><span style={cashStyle}>{this.props.cash}</span></p>

          </div>
        }
        </StoreContext.Consumer>
    );
  }
}
 
export default Account;

