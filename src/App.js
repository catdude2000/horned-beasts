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
// import { FormSelect } from 'react-bootstrap';
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
handleFormSubmitted = (evt) => {
  evt.preventDefault();
  console.log(`Submitted`);
};
     render(){
       return(
       <div className='App'>
         <h1>Lab 2</h1>
         <div>
 <select defaultValue={this.state.selectValue} 
 onChange={this.handleChange} 
 >
    <option value={beasts.horns=1}>1</option>
    <option value="Radish">Radish</option>
    <option value="Cherry">Cherry</option>
  </select>
  {/* <p>{message}</p> */}
  </div>       
         <Main chosen={beasts} handleChange={this.handleChange}/>
         <SelectedBeast show={this.state.show} beast={this.state.beast} close={this.handleClose}/>
         <Footer />
       </div>
     );
   }
 }
 
 
 
 export default App;
 