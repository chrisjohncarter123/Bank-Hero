import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchAccounts, fetchTransactions, createAccount, createCounter, createTransaction } from '../actions/fetchAccounts'
import ContentHeader from './contentHeader';
import AccountsListContainer from './accountsListContainer'

class Home extends Component{

  static contextType = StoreContext;

  componentDidMount() {
    this.props.fetchAccounts()
    this.props.fetchTransactions()
    
   
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

  handleBankNameChange = event => {
    this.setState({
      bankName: event.target.value
    });
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
    

    return (
      
          <div className="Home">

           
              
            <AccountsListContainer />
          </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    loading: state.loading_accounts,
    transactions: state.transactions
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchAccounts: () => dispatch(fetchAccounts()),
    fetchTransactions: () => dispatch(fetchTransactions()),
    createAccount: (state) => dispatch(createAccount(state))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
