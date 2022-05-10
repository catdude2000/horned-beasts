/**
 * @file Main.js
 * @author Mike Pace
 * @description Horned Beasts lab main
 */
 import React from 'react';
 import { Col, Container, Row } from 'react-bootstrap';
 import './App.css';
 import HornedBeast from './HornedBeast';
 
 
 class Main extends React.Component{
 
   /**
    * @returns React.Component
    */
     render(){
       const beastObs = this.props.beasts;
       return(
        // <>
          <main>
            <Container>
              <Row>
                <Col>
                  <HornedBeast beastObs={beastObs[0]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[1]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[2]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[3]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[4]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[5]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[6]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[7]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[8]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[9]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[10]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[11]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[12]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[13]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[14]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[15]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[16]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[17]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[18]}/>
                </Col>
                <Col>
                  <HornedBeast beastObs={beastObs[19]}/>
                </Col>
              </Row>
            </Container>
            </main>
     );
   }
 }
 
 export default Main;
 