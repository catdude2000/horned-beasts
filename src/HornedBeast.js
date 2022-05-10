/**
 * @file HornedBeast
 * @author Mike Pace
 * @description hornedbeast component
 */
import React from "react";
import { Image } from 'react-bootstrap'

class HornedBeast extends React.Component{
  render(){
    return(
      <section>
            <h2>{this.props.beastObs.title}</h2>
              <Image
              src={this.props.beastObs.image_url}
              />
            <p>{this.props.beastObs.description}</p>
      </section>
    );
  }
}


export default HornedBeast;
