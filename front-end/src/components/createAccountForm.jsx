import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class CreateAccountForm extends Component {
  state = {
    text: ''
  };
 
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    //this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
    console.log(this.state)
  };
  


 
  render() {
    let divStyle = {
      color: 'blue',
      backgroundColor: 'red'
    };

    return (
      <div  style={divStyle}>
        <h3>Add New Account:</h3>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>Account Name:</label>
            <input
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
 
export default connect()(CreateAccountForm);