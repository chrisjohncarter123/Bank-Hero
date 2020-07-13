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
    console.log(this.props.accounts)

    let cats = ""

    if(this.props.catPics != undefined){
      cats = this.props.catPics.cats
      console.log(cats[1])
      cats = this.props.catPics.cats.map(cat => <li key={cat.id}>{cat.url}</li>);
    }
    else{
        cats = <div>Loading ...</div>
    }

    return (
          <div className="Home">
            
            <h2>Bank Accounts:</h2>

            <p><span onClick={this.handleOnClick}>Get Accounts</span></p>

            <p><a href="AddBank">Add Bank</a></p>

            {cats}
            
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
