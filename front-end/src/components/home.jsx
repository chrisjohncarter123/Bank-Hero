import React, { Component } from 'react';
import Account from './account'
import StoreContext from '../contexts/storeContext';

class Home extends Component{

  static contextType = StoreContext;

  handleOnClick = () => {
    console.log("handleOnClicks")
    
    this.props.fetchAccounts()
    
    //console.log(this.props.astronauts)
    
}



  componentDidMount() {
    console.log("store", this.context)
  }

  render() {
    return (
      <StoreContext.Consumer>
        {StoreContext => 
          <div className="Home">
            
            <h2>Bank Accounts:</h2>

            <p><span onClick={this.handleOnClick}>Get Accounts</span></p>

            <p><a href="AddBank">Add Bank</a></p>

            
          </div>
        }
      </StoreContext.Consumer>
    );
  }
}


const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchAccounts: () => dispatch(fetchAccounts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
