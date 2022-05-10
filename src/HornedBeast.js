/**
 * @file HornedBeast
 * @author Mike Pace
 * @description hornedbeast component
 */
import React from "react";
import { Image } from 'react-bootstrap'

class HornedBeast extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      votes: 0,
    };
  }

  /**
   * event handler
   */
  handleClick =() => {
    const newStatus = this.state.votes + 1;
    this.setState({votes : newStatus});
    console.log(this.state.votes, 'votes')
  };

  render(){
    return(
      <section>
            <h2>{this.props.beastObs.title}</h2>
              <Image
              onClick={this.handleClick}
              src={this.props.beastObs.image_url}
              fluid
              rounded
              />
            <p>{this.props.beastObs.description}</p>
            <p>heart {this.state.votes}</p>
      </section>
    );
  }
}


export default HornedBeast;
