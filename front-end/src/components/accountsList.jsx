import React, { Component } from 'react';
import Account from './account'
import { connect } from 'react-redux';

class AccountsList extends Component{


  renderAccounts = () => {
    let accounts = ""

    if(this.props.accounts != undefined){
      accounts = this.props.accounts.accounts
     // console.log(accounts[1])
      accounts = this.props.accounts.accounts.map
        (account => 
          <div key={account.id}>
            <Account name={account.name} created_at={account.created_at} cash={account.cash}/>
            <br />
          </div>
          );
    }
    else{
      accounts = <div>Loading ...</div>
    }

    return accounts
  }
 
  render() {
    
    return (
        <div>
            {this.renderAccounts()}
        </div>

    );
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

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountsList)
