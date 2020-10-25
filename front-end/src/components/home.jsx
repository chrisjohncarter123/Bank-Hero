import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchAccounts, fetchTransactions, createAccount} from '../actions/fetchAccounts'
import AccountsList from './accountsList'

class Home extends Component{

  static contextType = StoreContext;

  componentDidMount() {
    this.props.fetchAccounts()
    this.props.fetchTransactions()
    
  }

  renderAccounts = () => {

    let accounts = ""

    if(this.props.accounts != undefined){

      accounts = this.props.accounts.accounts
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
            <AccountsList />
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
