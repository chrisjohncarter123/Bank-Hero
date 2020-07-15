import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchAccounts, createAccount, createCounter, createTransaction } from '../actions/fetchAccounts'
import { fetchCats } from '../actions/fetchCats'
import  CreateAccountForm  from './createAccountForm'
import ContentHeader from './contentHeader';

class AccountsList extends Component{


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
    
    return (
        <div>
            {accounts}
        </div>

    );
  }
}


const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    loading: state.loading_accounts
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchAccounts: () => dispatch(fetchAccounts()),
    createAccount: (state) => dispatch(createAccount(state))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountsList)
