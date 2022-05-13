/**
 * @file Main.js
 * @author Mike Pace
 * @description Horned Beasts lab main
 */
 import React from 'react';
 import { Container } from 'react-bootstrap';
 import './App.css';
 import BeastRow from './BeastRow';
 import Footer from './Footer';

 
 class Main extends React.Component{
 
   /**
    * @returns React.Component
    */
  constructor(props){
    super(props);
    this.state={chosen: this.chosenBeast()}
  }

  /**
   * 
   * @returns 
   */
  chosenBeast=() => {
    let chosenBeasts = []
    let current = []
    for (let i = 0; i < this.props.chosen.length; i++){
      if (i !== 0 && i%3 === 0){
        chosenBeasts.push(current)
        current=[]
      }
      current.push(this.props.chosen[i]);
    }
    chosenBeasts.push(current);
    return chosenBeasts;
  }
     render(){
       let keyvalue = 1;
      console.log("arrylength", this.state.chosen.length);
      let currentBeasts = this.chosenBeast();
       return(
          <main>
            <Container>
              {
                currentBeasts.map((x) => {
                  keyvalue++;               

                  // key={keyvalue} key only on this file
                  return <BeastRow key={keyvalue} beasts={x} handleChange={this.props.handleChange} />
                })
              }
            </Container>
            <Footer />
          </main>
     );
   }
 }
 
 export default Main;
 