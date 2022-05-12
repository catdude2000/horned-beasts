/**
 * @file App.js
 * @author Mike Pace
 * @description Horned Beasts lab header
 */
 import React from 'react';
 import './App.css';
 import Main from './Main';
 import Footer from './Footer';
 import beasts from './data.json'
import SelectedBeast from './SelectedBeast';
// import { Container, Modal } from 'react-bootstrap';
// import SelectedBeast from './SelectedBeast';
//  import HornedBeast from './HornedBeast';
 
 class App extends React.Component{
 
   /**
    * @returns React.Component
    */
constructor(props){
  super(props);
    this.state={show: false, beast: beasts[0]}
  }
handleChange = (beast) =>{
  this.setState({
    show: true, beast: beast
  })
}

handleClose = () =>{
  console.log('handleClose')
  this.setState({
    show: false
  
  
  })
}
  //  handlechange func(clicked beast)
  // handleclose function
     render(){
       return(
       <div className='App'>
         <h1>Lab 2</h1>
         <Main chosen={beasts} handleChange={this.handleChange}/>
         {/* this.state.beast and this.state.show */}
         {/* <SelectedBeast title={this.state.beastObs.title} image_url={this.state.beastObs.image_url} description={this.state.beastObs.description} votes={this.state.votes}/> */}
         <SelectedBeast show={this.state.show} beast={this.state.beast} close={this.handleClose}/>
         <Footer />
       </div>
     );
   }
 }
 
 
 
 export default App;
 