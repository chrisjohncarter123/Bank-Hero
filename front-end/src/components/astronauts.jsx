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
      console.log("hi")
     // this.props.fetchAstronauts()

  }
 
  render() {
      
  //  this.props.fetchAstronauts()
     // console.log(this.props.astronauts.people[0])
      
   //  const astronauts = this.props.astronauts.people.map(astro => <li key={astro.id}>{astro.name}</li>);
   //const astronauts = this.props.astronauts.people.map(astro => <li key={astro.id}>{astro.name}</li>);
    
 //<button onClick={(window.event) = this.handleOnClick(window.event)}> Get Astros Here </button>


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