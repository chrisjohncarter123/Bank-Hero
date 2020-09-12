import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';
import {Link} from 'react-router-dom'


class Account extends Component {

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
            <p><b>Cash: </b><span style={cashStyle}>{this.props.cash}</span></p>
            <Link to='https://www.googel.com'>
              <button type="button" className="btn btn-info">More Information</button>
            </Link>

          </div>  
        </div>
    );
  }
}
 
export default Account;

