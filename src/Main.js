/**
 * @file Main.js
 * @author Mike Pace
 * @description Horned Beasts lab main
 */
 import React from 'react';
 import { Container } from 'react-bootstrap';
 import './App.css';
import BeastRow from './BeastRow';
//  import HornedBeast from './HornedBeast';
 import Footer from './Footer';

 
 class Main extends React.Component{
 
   /**
    * @returns React.Component
    */
  constructor(props){
    super(props);
    this.state={chosen: this.chosenBeast()}
  }
  chosenBeast=() => {
    let chosenBeasts = []
    let current = []
    for (let i = 0; i < this.props.beasts.length; i++){
      if (i !== 0 && i%3 === 1){
        chosenBeasts.push(current)
      }
      current.push(this.props.beasts[i])
    }
    chosenBeasts.push(current);
    return chosenBeasts;
  }
     render(){
      console.log("arrylength", this.state.chosen.length);
       return(
          <main>
            <Container>
              {

                /**
                 * chosen=current
                 * x represents smaller array(subarray), which will be different depending on how far the loop is
                 */
                this.state.chosen.map((x) => {
                  // keyvalu++;
                  // key={keyvalue} key only on this file
                  // rowdata={subArray}
                  return <BeastRow beasts={x} />
                })
              }
            </Container>
            <Footer />
          </main>
     );
   }
 }
 
 export default Main;
 