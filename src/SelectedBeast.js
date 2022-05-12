/**
 * @file SelecteBEast.js
 * @author Mike Pace
 * @description Modal for hornedbeast lab 3
 */
import React from 'react';
// import App from './App'
import {Modal, Button, Image} from 'react-bootstrap'

class SelectedBeast extends React.Component{

  render(){

    return(
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton >
          <Modal.Title>{this.props.beast.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src= {this.props.beast.image_url} />
          {this.props.votes}
          {this.props.beast.description}

        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}



export default SelectedBeast;
