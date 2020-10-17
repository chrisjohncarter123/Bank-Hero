import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAstronauts } from '../actions/fetchAstronauts'
 
class Astronauts extends Component {
 
    handleOnClick = () => {
    console.log("handleOnClicks")

    this.props.fetchAstronauts()

    console.log(this.props.astronauts)
    
  }
  componentDidMount() {
      console.log("hi");
  }
 
  render() {
      
    return(
      <div>
          
          <span onClick={this.handleOnClick}>Get Astros</span>

      </div>
    );
  }
};
 
function mapDispatchToProps(dispatch){
  return { fetchAstronauts: () => dispatch(fetchAstronauts()) }
}
 
function mapStateToProps(state){
  return {astronauts: state.astronauts}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Astronauts)