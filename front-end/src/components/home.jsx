import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';
import { connect } from 'react-redux';
import { fetchAccounts } from '../actions/fetchAccounts'
import { fetchCats } from '../actions/fetchCats'

class Home extends Component{

  static contextType = StoreContext;

  handleOnClick = () => {
    console.log("handleOnClicks")
    
    this.props.fetchAccounts()
    this.props.fetchCats()
    
    console.log(this.props)
    
}



  componentDidMount() {
    console.log(this.props)
  }

  render() {
    console.log("Props " ) // log will fire every time App renders
    console.log(this.props.accounts.accounts)

    let accounts = ""

    if(this.props.accounts != undefined){
      accounts = this.props.accounts.accounts
     // console.log(accounts[1])
      accounts = this.props.accounts.accounts.map(account => <div key={account.id}><Account name={account.name}/></div>);
    }
    else{
      accounts = <div>Loading ...</div>
    }

    return (
          <div className="Home">
            
            <h2>Bank Accounts:</h2>

            <p><span onClick={this.handleOnClick}>Get Accounts</span></p>

            <p><a href="AddBank">Add Bank</a></p>

            {accounts}
            
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
    fetchAccounts: () => dispatch(fetchAccounts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
