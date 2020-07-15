import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchAccounts, createAccount, createCounter, createTransaction, fetchTransactions } from '../actions/fetchAccounts'
import { fetchCats } from '../actions/fetchCats'
import  CreateAccountForm  from './createAccountForm'
import ContentHeader from './contentHeader';
import Transaction from './transaction';

class TransactionsList extends Component{

  static contextType = StoreContext;

    /*
  state = {
    transaction_from : '',
    transaction_to : '',
    cash : ''

  };
  */

  renderTransactions = () => {
    let transactions = ""

    if(this.props.transactions != undefined){
    transactions = this.props.transactions.transactions
     // console.log(accounts[1])
     transactions = this.props.transactions.transactions.map(transaction =>
        <div key={transaction.id}>
             <Transaction 
             account_from={transaction.account_from}
             account_to={transaction.account_to}
             cash={transaction.cash}/>
        <br /></div>);
    }
    else{
        transactions = <div>Loading ...</div>
    }

    return transactions;

  }

  render() {

    return (

          <div className="Home">
            {this.renderTransactions()}
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
    createTransaction: (state) => dispatch(createTransaction(state)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList)
