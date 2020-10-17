import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountDetailsListContainer from './accountDetailsListContainer'

class AccountDetailsPage extends Component{

   

  render() {

    return (
      <div>
        <AccountDetailsListContainer />
      </div>
         
    );
  }
}


const mapStateToProps = state => {
  return {

  }
}
 
const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountDetailsPage)
