import React, { Component } from 'react'
import { PLACES } from '../shared/places';
import PlaceDetails from './PlaceDetails';


export default class Place extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            place:PLACES.indexOf(0),
        };
        console.log(this.state.place);
      }
      componentDidMount(){
          this.setState({
            place:PLACES.filter((place)=>place.id==this.props.match.params.id)[0],
             
          })
      }
   
    render(){
        return(
     
        <>
        <PlaceDetails image={this.state.place.image} name={this.state.place.name} />
       
        </>
        )
    }
}

