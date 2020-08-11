import React from 'react';
import AccountDetailsList from './accountDetailsList';
import { connect } from 'react-redux';
import { fetchAccounts, createAccount, createCounter, createTransaction } from '../actions/fetchAccounts'

 
class AccountsDetailsListContainer extends React.Component {
  constructor() {
    super()
 
  }
 
  componentDidMount() {
    this.props.fetchAccounts()

    
  }
 
  render() {
    return (
        <div>
            <AccountDetailsList accounts={this.props.accounts} />
        </div>
    )
  }
}
 
//Takes a slice of global state to be used in this component
//similar to a getter

//the new wrapper component will subscribe to Redux store updates.
//This means that any time the store is updated, mapStateToProps will be called.
const mapStateToProps = state => {
    return {
      accounts: state.accounts,
      loading: state.loading_accounts
    }
  }
  

  //Access some actions needed for this component
  //similar to a setter
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchAccounts: () => dispatch(fetchAccounts()),
      createAccount: (state) => dispatch(createAccount(state))
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(AccountsDetailsListContainer)
  


  //connect is used to connect compnents to the store
  //components shouldn't access store directly, it is an anti-pattern
  //connect handles accessing the store for the component

  //shorthand way is passing an object instead of a function:
  //export default connect(mapStateToProps, { fetchAccounts, createAccount })(AccountsDetailsListContainer)

//connect does not change cthe component, but creates a new one

 //if no seccond argument (or null) is given, it automatically puts the dispatch function in props

