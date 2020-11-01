import React, { Component } from 'react';
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
            
            <p><b>Account Name: </b>{this.props.name}</p>
            <p><b>Cash: </b><span style={cashStyle}>{this.props.cash}</span></p>
            <Link exact to=''>
              <button type="button" className="btn btn-info">More Information</button>
            </Link>

          </div>  
        </div>
    );
  }
}
 
export default Account;

