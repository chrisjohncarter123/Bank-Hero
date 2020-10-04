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
 
  render() {

    return (
      <div>
        <ContentHeader title="Create New Account"/>

        <div >
          <form onSubmit={event => this.handleCreateAccountSubmit(event)}>
            <p>
              <label>Account Name:</label>
              <input
                type="text"
                onChange={event => this.handleChange(event)}
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