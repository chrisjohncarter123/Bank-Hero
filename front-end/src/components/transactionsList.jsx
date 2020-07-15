import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchAccounts, createAccount, createCounter, createTransaction } from '../actions/fetchAccounts'
import { fetchCats } from '../actions/fetchCats'
import  CreateAccountForm  from './createAccountForm'
import ContentHeader from './contentHeader';

class TransactionsList extends Component{

  static contextType = StoreContext;


  state = {
    transaction_from : '',
    transaction_to : '',
    cash : ''

  };

  handleOnClick = () => {
    console.log("handleOnClicks")
    
    this.props.fetchTransactions()
    
    console.log(this.props)
    
}

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
    //this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
    console.log(this.state)
    this.props.createTransaction(
      {account_from: this.state.transaction_from, account_to: this.state.transaction_to, cash:this.state.cash})
    this.props.fetchAccounts()

  };

  render() {
    console.log("Props " ) // log will fire every time App renders
    console.log(this.props.transactions.transactions)

    let transactions = ""

    if(this.props.accounts != undefined){
        transactions = this.props.transactions.transactions
     // console.log(accounts[1])
     transactions = this.props.transactions.transactions.map(account => <div key={account.id}><Account name={account.name} cash={account.cash}/><br /></div>);
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


            {transactions}
            </div>

        
            
          </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    catPics: state.cats,
    accounts: state.accounts,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats()),
    fetchAccounts: () => dispatch(fetchAccounts()),
    createAccount: (state) => dispatch(createAccount(state)),
    createCounter: () => dispatch(createCounter()),
    createTransaction: (state) => dispatch(createTransaction(state)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList)
