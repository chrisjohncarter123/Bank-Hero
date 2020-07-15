import React from 'react';
import AccountsList from './accountsList';
import { connect } from 'react-redux';
import { fetchAccounts, createAccount, createCounter, createTransaction } from '../actions/fetchAccounts'

 
class AccountsListContainer extends React.Component {
  constructor() {
    super()
 
  }
 
  componentDidMount() {
    this.props.fetchAccounts()

    
  }
 
  render() {
    return (
        <div>
            <AccountsList accounts={this.props.accounts} />
        </div>
    )
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
  export default connect(mapStateToProps, mapDispatchToProps)(AccountsListContainer)
  