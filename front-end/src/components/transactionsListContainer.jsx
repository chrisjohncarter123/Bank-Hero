import React from 'react';
import { connect } from 'react-redux';
import { fetchTransactions, createTransaction } from '../actions/fetchAccounts'
import TransactionsList from './transactionsList'
 
class TransactionsListContainer extends React.Component {
  constructor() {
    super()
 
  }
 
  componentDidMount() {

    console.log("Fetching Transactions...")
    return (dispatch) => {
      dispatch({ type: 'LOADING_TRANSACTIONS'})
      fetch('http://localhost:4000/transactions').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        this.setState({transactions: responseJSON})
      })
    }

    
  }
   
 
  render() {
    return (
        <div>
            <TransactionsList transactions={this.props.transactions} />
        </div>
    )
  }
}
 

const mapStateToProps = (state) => {
    return {
      transactions: state.transactions,
      loading: state.loading_accounts
    };
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      fetchTransactions: () => dispatch(fetchTransactions()),
      createTransaction: (state) => dispatch(createTransaction(state))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListContainer)
  