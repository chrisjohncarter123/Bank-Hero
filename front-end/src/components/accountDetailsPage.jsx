import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchTransactions, createTransaction, fetchAccounts } from '../actions/fetchAccounts'
import { fetchCats } from '../actions/fetchCats'
import  CreateAccountForm  from './createAccountForm'
import ContentHeader from './contentHeader';
import AccountDetailsListContainer from './accountDetailsListContainer'
import TransactionsListContainer from './transactionsListContainer';
import Transaction from './transaction'

class AccountDetailsPage extends Component{

   

  render() {

    return (
      <div>
        <AccountDetailsListContainer />
      </div>
         
    );
  }
}


const mapStateToProps = state => {
  return {

  }
}
 
const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountDetailsPage)
