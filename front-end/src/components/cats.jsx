import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../actions/fetchCats'
 
class Cats extends Component {

    handleOnClick = () => {
        console.log("handleOnClicks")
        
        this.props.fetchCats()
        
        //console.log(this.props.astronauts)
        
    }
 
  componentDidMount() {
    console.log(this.props)
    //this.props.fetchCats()
  }
 
  render() {
    console.log("Props " ) // log will fire every time App renders
    console.log(this.props.catPics.cats[0])

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
      <div className="Cats">
        <h1>CatBook</h1>
        <span onClick={this.handleOnClick}>Get Cats</span>
        {cats}
       
      </div>
    );
  }
}
 
const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cats)