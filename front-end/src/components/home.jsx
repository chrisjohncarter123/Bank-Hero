import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchAccounts, createAccount, createCounter, createTransaction } from '../actions/fetchAccounts'
import { fetchCats } from '../actions/fetchCats'
import  CreateAccountForm  from './createAccountForm'

class Home extends Component{

  static contextType = StoreContext;

  handleOnClick = () => {
    console.log("handleOnClicks")
    
    this.props.fetchAccounts()
    
    console.log(this.props)
    
}

  componentDidMount() {
    this.props.fetchAccounts()

   
  }

  handleCreateCounter = () => {
    this.props.createCounter()

  }

  handleCreateAccount = () => {
    this.props.createAccount({name: "new name"})
    this.props.fetchAccounts()
    this.render()

  }

  state = {
    new_account_name,
    new_transaction_from,
    new_transaction_to,
    new_transaction_cash

  };
 
  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
 
  handleCreateAccountSubmit = event => {
    event.preventDefault();
    //this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
    console.log(this.state)
    this.props.createAccount({name: this.state.name})
    this.props.fetchAccounts()
    this.render()
  };

  handleCreateTransactionSubmit = event => {
    event.preventDefault();
    //this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
    console.log(this.state)
    this.props.createTransaction({account_from: "chris", account_to: "new name", cash:"100"})
    this.props.fetchAccounts()
    this.render()
  };

  render() {
    console.log("Props " ) // log will fire every time App renders
    console.log(this.props.accounts.accounts)

    let accounts = ""

    if(this.props.accounts != undefined){
      accounts = this.props.accounts.accounts
     // console.log(accounts[1])
      accounts = this.props.accounts.accounts.map(account => <div key={account.id}><Account name={account.name}/><br /></div>);
    }
    else{
      accounts = <div>Loading ...</div>
    }

    let divStyle = {
      color: 'black',
      backgroundColor: 'red'
    };

    return (
      
          <div className="Home">

          <br />

          <div  style={divStyle}>
            <h3>Create New Account:</h3>
            <form onSubmit={event => this.handleCreateAccountSubmit(event)}>
              <p>
                <label>Account Name:</label>
                <input
                  type="text"
                  onChange={event => this.handleChange(event)}
                  placeholder={"name"}
                />
              </p>
              <input type="submit" />
            </form>
          </div>

          <br />

          <div  style={divStyle}>
            <h3>Create New Transaction:</h3>
            <form onSubmit={event => this.handleCreateTransactionSubmit(event)}>
              <p>
                <label>Account From:</label>
                <input
                  type="text"
                  onChange={event => this.handleChange(event)}
                />
              </p>

              <p>
                <label>Account To:</label>
                <input
                  type="text"
                  onChange={event => this.handleChange(event)}
                />
              </p>

              <p>
                <label>Cash Ammount:</label>
                <input
                  type="text"
                  onChange={event => this.handleChange(event)}
                />
              </p>
              <input type="submit" />
            </form>
          </div>

          <br />

            
          <div  style={divStyle}>
            <h3>Bank Accounts:</h3>


            {accounts}
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)
