/**
 * @file SelecteBEast.js
 * @author Mike Pace
 * @description Modal for hornedbeast lab 3
 */
import React from 'react';
// import App from './App'
import {Modal, Button} from 'react-bootstrap'

class SelectedBeast extends React.Component{

  render(){

    return(
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton >
          <Modal.Title>{this.props.beast.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {this.props.beast.image_url}
        <br />
          {this.props.votes}
          {this.props.beast.description}

        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}



export default SelectedBeast;
