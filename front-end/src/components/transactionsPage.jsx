import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchTransactions, createTransaction } from '../actions/fetchAccounts'
import { fetchCats } from '../actions/fetchCats'
import  CreateAccountForm  from './createAccountForm'
import ContentHeader from './contentHeader';
import AccountsListContainer from './accountsListContainer'
import TransactionsListContainer from './transactionsListContainer';
import Transaction from './transaction'

class TransactionsPage extends Component{

    componentDidMount() {
        this.props.fetchTransactions()
       
      }
    
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
     
    
      handleCreateTransactionSubmit = event => {
        event.preventDefault();
        this.props.createTransaction(
          {account_from: this.state.transaction_from, account_to: this.state.transaction_to, cash:this.state.cash})
        this.props.fetchTransactions()
    
      };
 

  renderTransactions = () => {
    let transactions = ""

    if(this.props.transactions != undefined){
        transactions = this.props.transactions.transactions
     // console.log(accounts[1])
     transactions = this.props.transactions.transactions.map(transaction => <div key={transaction.id}><Transaction account_from={transaction.account_from} account_to={transaction.account_to} created_at={transaction.created_at} cash={transaction.cash}/><br /></div>);
    }
    else{
        transactions = <div>Loading ...</div>
    }

    return transactions
  }
 

  render() {
    console.log("Props " ) 
    console.log(this.props)

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

    let divStyle = {
      color: 'black',
      border: 'solid 2px black',
      padding: '15px'
    };

    return (
      
          <div className="Home">
            <ContentHeader title="Transactions"/>

          <div  style={divStyle}>
            <h3>Create New Transaction:</h3>
            <form onSubmit={event => this.handleCreateTransactionSubmit(event)}>
              <p>
                <label>Account From:</label>
                <input
                  type="text"
                  onChange={event => this.handleAccountFromChange(event)}
                />
              </p>

              <p>
                <label>Account To:</label>
                <input
                  type="text"
                  onChange={event => this.handleAccountToChange(event)}
                />
              </p>

              <p>
                <label>Cash Ammount:</label>
                <input
                  type="text"
                  onChange={event => this.handleCashChange(event)}
                />
              </p>
              <input type="submit" />
            </form>
          </div>

          <br />

            
          <div  style={divStyle}>
            <h3>All Transactions:</h3>


                <TransactionsListContainer />
            </div>

        
            
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
    createTransaction: (state) => dispatch(createTransaction(state))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage)
