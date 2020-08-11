import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';


class AccountDetails extends Component {

  state = {
    priority : 0
  };

  handlePriority = event => {
    this.setState({
      priority:  this.state.priority + 1
    });
  

  }

  myFunction = arg => (name:"hi")




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
            <p><b>Updated At: </b>{this.props.updated_at}</p>
            <p><b>Cash: </b><span style={cashStyle}>{this.props.cash}</span></p>
            <p><b>id: </b>{this.props.id}</p>
            <p><button><b>Delete</b></button></p>
            <p><button><b>Update</b></button></p>
            <button onClick={event => this.handlePriority(event)} >Add Priority</button>
            <p><b>Priority: </b>{this.state.priority}</p>
            

          </div>  
        </div>
    );
  }
}

 
export default AccountDetails;

