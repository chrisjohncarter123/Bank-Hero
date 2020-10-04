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
 
  handleCreateAccountSubmit = event => {
    event.preventDefault();
    console.log(6)
    this.props.createAccount(
      {
        name: this.state.new_account_name,
        cash: this.state.cash
      })
    this.props.fetchAccounts()
    console.log(7)
  };

  renderAccounts = () => {
    console.log(8)
    let accounts = ""

    if(this.props.accounts != undefined){
      console.log(9)
      accounts = this.props.accounts.accounts
     // console.log(accounts[1])
      accounts = this.props.accounts.accounts.map(account => <div key={account.id}><Account name={account.name} created_at={account.created_at} cash={account.cash}/><br /></div>);
    }
    else{
      console.log(10)
      accounts = <div>Loading ...</div>
    }
    console.log(11)
    return accounts
  }
 

  render() {
    console.log(12)
    console.log("Props " )
    console.log(this.props.accounts.accounts)

    

    let divStyle = {
      color: 'black',
      border: 'solid 2px black',
      padding: '15px'
    };


    return (
      
          <div className="Home">


          <ContentHeader title="Accounts"/>

          <div  style={divStyle}>
            <h3>Create New Account:</h3>
            <form onSubmit={event => this.handleCreateAccountSubmit(event)}>
              <p>
                <label>Account Name:</label>
                <input
                  type="text"
                  onChange={event => this.handleChange(event)}
                  placeholder={""}
                />
              </p>

              <p>
                <label>Cash:</label>
                <input
                  type="text"
                  onChange={event => this.handleCashChange(event)}
                  value={this.props.lastName}
                  placeholder={""}
                />
              </p>

              <p>
                <label>Bank Name:</label>
                <input
                  type="text"
                  onChange={event => this.handleBankNameChange(event)}
                  value={this.props.bankName}
                  placeholder={""}
                />
              </p>
              <input type="submit" />
            </form>
          </div>

          <br />
            
          <div  style={divStyle}>
            <h3>Bank Accounts:</h3>
             
            <AccountsListContainer />
            </div>
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
