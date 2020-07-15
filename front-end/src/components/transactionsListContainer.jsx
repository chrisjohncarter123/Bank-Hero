import React from 'react';
import AccountsList from './accountsList';
import { connect } from 'react-redux';
import { fetchAccounts, createAccount, createCounter, createTransaction } from '../actions/fetchAccounts'

 
class TransactionsListContainer extends React.Component {
  constructor() {
    super()
 
  }
 
  componentDidMount() {
    this.props.fetchTransactions()

    
  }
 
  render() {
    return (
        <div>
            <TransactionsList transactions={this.props.transactions} />
        </div>
    )
  }
}
 

const mapStateToProps = state => {
    return {
      transactions: state.transactions,
      loading: state.loading_accounts
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      fetchTransactions: () => dispatch(fetchTransactions()),
      createAccount: (state) => dispatch(createAccount(state))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListContainer)
  