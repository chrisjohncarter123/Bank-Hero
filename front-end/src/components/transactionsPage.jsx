import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchTransactions, createTransaction, fetchAccounts } from '../actions/fetchAccounts'
import { fetchCats } from '../actions/fetchCats'
import  CreateAccountForm  from './createAccountForm'
import ContentHeader from './contentHeader';
import AccountsListContainer from './accountsListContainer'
import TransactionsListContainer from './transactionsListContainer';
import Transaction from './transaction'

class TransactionsPage extends Component{

    componentDidMount() {
        this.props.fetchTransactions()
        this.props.fetchAccounts()
       
      }
    
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
     
    
      handleCreateTransactionSubmit = event => {
        event.preventDefault();
        this.props.createTransaction(
          {account_from: this.state.transaction_from, account_to: this.state.transaction_to, cash:this.state.cash})
        this.props.fetchTransactions()
    
      };
 
 

  render() {
    console.log("Props " ) 
    console.log(this.props)

    let divStyle = {
      color: 'black',
      border: 'solid 2px black',
      padding: '15px'
    };

    return (
      
          <div className="Home">

          <div  style={divStyle}>
            <h3>Create New Transaction:</h3>
            <form onSubmit={event => this.handleCreateTransactionSubmit(event)}>
              <p>
                <label>Account From:</label>
                <input
                  type="text"
                  onChange={event => this.handleAccountFromChange(event)}
                />
              </p>

              <p>
                <label>Account To:</label>
                <input
                  type="text"
                  onChange={event => this.handleAccountToChange(event)}
                />
              </p>

              <p>
                <label>Cash Ammount:</label>
                <input
                  type="text"
                  onChange={event => this.handleCashChange(event)}
                />
              </p>
              <input type="submit" />
            </form>
          </div>

          <br />

            
          <div  style={divStyle}>
            <h3>All Transactions:</h3>
                <TransactionsListContainer />
            </div>

        
            
          </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    accounts: state.accounts,
    loading: state.loading_transactions
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => dispatch(fetchTransactions()),
    fetchAccounts: () => dispatch(fetchAccounts()),
    createTransaction: (state) => dispatch(createTransaction(state))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage)
