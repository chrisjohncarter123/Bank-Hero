import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


class Account extends Component {
  state = { 
    name: "Bank of World",
    cash: "1234.43",
    tags:["tag1", "tag2", "tag3"]
   }

   styles = {
     fontSize: '20px',
     fontWeight: "bold"
   }

   handleName = product => {
     console.log(product);
     console.log('Clicked', );
   }

  render() { 
    return (  
      <div className="account">
        <h3 style={this.styles}>{this.state.name}</h3>
        <h3>${this.state.cash}</h3>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
        <button onClick={() => this.handleName({id: 1})} className="btn btn-secondary btn-sm">View All Transactions</button>
      </div>
    );
  }
}
 
export default Account;

