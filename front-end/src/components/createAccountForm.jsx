import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentHeader from './contentHeader';
 
class CreateAccountForm extends Component {
  state = {
    text: ''
  };
 
 
  handleCreateAccountSubmit = event => {
    event.preventDefault();
    this.props.createAccount(
      {
        name: this.state.new_account_name,
        cash: this.state.cash
      })
    this.props.fetchAccounts()
  };


  handleAccountNameChange = event => {
    this.setState({
      new_account_name: event.target.value
    });
    
  };

  handleAccountFromChange = event => {
    this.setState({
      transaction_from: event.target.value
    });
  };

  handleAccountToChange = event => {
    this.setState({
      transaction_to: event.target.value
    });
  };

  handleCashChange = event => {
    this.setState({
      cash: event.target.value
    });
  };

  handleBankNameChange = event => {
    this.setState({
      bankName: event.target.value
    });
  };
 
 
  render() {

    return (
      <div>

        <div >
          <h3>Add Account:</h3>
          <form onSubmit={event => this.handleCreateAccountSubmit(event)}>
            <p>
              <label>Account Name:</label>
              <input
                type="text"
                onChange={event => this.handleAccountNameChange(event)}
                placeholder={""}
              />
            </p>

            <p>
              <label>Cash:</label>
              <input
                type="text"
                onChange={event => this.handleCashChange(event)}
                value={this.props.lastName}
                placeholder={""}
              />
            </p>

            <p>
              <label>Bank Name:</label>
              <input
                type="text"
                onChange={event => this.handleBankNameChange(event)}
                value={this.props.bankName}
                placeholder={""}
              />
            </p>
            <input type="submit" />
          </form>
        </div>


      </div>
    );
  }
}
 
export default connect()(CreateAccountForm);