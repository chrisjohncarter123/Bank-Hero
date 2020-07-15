import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchAccounts, createAccount, createCounter, createTransaction } from '../actions/fetchAccounts'
import { fetchCats } from '../actions/fetchCats'
import  CreateAccountForm  from './createAccountForm'
import ContentHeader from './contentHeader';
import AccountsListContainer from './accountsListContainer'
import TransactionsListContainer from './transactionsListContainer';

class TransactionsPage extends Component{


  handleCreateAccount = () => {
    this.props.createAccount({name: "new name"})
    this.props.fetchAccounts()
    this.render()

  }


  handleChange = event => {
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

  
 
  handleCreateAccountSubmit = event => {
    event.preventDefault();
    //this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
    console.log(this.state)
    this.props.createAccount(
      {
        name: this.state.new_account_name,
        cash: this.state.cash
      })
    this.props.fetchAccounts()

  };

  renderAccounts = () => {
    let accounts = ""

    if(this.props.accounts != undefined){
      accounts = this.props.accounts.accounts
     // console.log(accounts[1])
      accounts = this.props.accounts.accounts.map(account => <div key={account.id}><Account name={account.name} created_at={account.created_at} cash={account.cash}/><br /></div>);
    }
    else{
      accounts = <div>Loading ...</div>
    }

    return accounts
  }
 

  render() {
    console.log("Props " )
    console.log(this.props.accounts.accounts)

    

    let divStyle = {
      color: 'black',
      border: 'solid 2px black',
      padding: '15px'
    };


    return (
      
          <div className="Home">


          <ContentHeader title="Accounts"/>

          <div  style={divStyle}>
            <h3>Create New Account:</h3>
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
                  placeholder={""}
                />
              </p>
              <input type="submit" />
            </form>
          </div>

          <br />
            
          <div  style={divStyle}>
            <h3>Bank Accounts:</h3>
             
            <TransactionsListContainer />
            </div>
          </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    loading: state.loading_transactions
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => dispatch(fetchTransactions()),
    createTransaction: (state) => dispatch(createTransaction(state))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage)
