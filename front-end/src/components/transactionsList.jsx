import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createTransaction, fetchTransactions } from '../actions/fetchAccounts'

import Transaction from './transaction';

class TransactionsList extends Component{

  renderTransactions = () => {
    let transactions = ""

    if(this.props.loading_transactions == false){

      
    transactions = this.props.transactions.transactions

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
          <div>
            {this.renderTransactions()}
          </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    loading_transactions: state.loading_transactions
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => dispatch(fetchTransactions()),
    createTransaction: (state) => dispatch(createTransaction(state)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList)
