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
    return(
      <Row>
        {
        this.props.beasts.map((beast) =>{
          return (
            // key needed immediately below suchas beast._id
            <Col>
              <HornedBeast 
              // key needed from above here in hornedbeast
              title={this.beastObs.title}
              image_url={this.beastObs.image_url} description={this.beastObs.description}
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
