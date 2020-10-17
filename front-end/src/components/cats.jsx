import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../actions/fetchCats'
 
class Cats extends Component {

    handleOnClick = () => {
        console.log("handleOnClicks")
        
        this.props.fetchCats()
        
        
    }
 
  componentDidMount() {
    console.log(this.props)

  }
 
  render() {

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
        <button onClick={this.handleOnClick}>Get Cats</button>
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