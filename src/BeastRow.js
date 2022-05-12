/**
 * @file BeastRow.js
 * @author Mike Pace
 * @description file puts beasts into arrays of 3 inside another single array
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
// import Main from 'main';


class BeastRow extends React.Component{
  render(){
    // console.log(this.props.beast, 'beast')
    return(

      <Row>
        {
        this.props.beasts.map((beast) =>{
          return (
            // key needed immediately below suchas beast._id
            <Col key = {beast._id} >
              <HornedBeast 
              handleChange={this.props.handleChange}
              beastObs = {beast}
              // key needed from above here in hornedbeast
              />
            </Col>
            );
        })
        };
      </Row>
    )
}
}
export default BeastRow;
