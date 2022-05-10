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
            <h2>{this.props.title}</h2>
              <Image
              src={this.props.imageUrl}
              />
            {/* <img src={this.props.src} alt={this.props.alt} title={this.props.title} /> */}
            <p>{this.props.description}</p>
      </section>
    );
  }


}


export default HornedBeast;