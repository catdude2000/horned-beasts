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
 
 class App extends React.Component{
 

   /**
    * @returns React.Component
    */
     render(){
       return(
       <div className='App'>
         <h1>This is the header</h1>
         <Main />
         <Footer />
       </div>
     );
   }
 }
 
 
 
 export default App;
 