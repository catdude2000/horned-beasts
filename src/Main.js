/**
 * @file Main.js
 * @author Mike Pace
 * @description Horned Beasts lab main
 */
 import React from 'react';
 import './App.css';
 
 
 class Main extends React.Component{

  /**
   * 
   * @param {object} props 
   */
  constructor(props){
    super(props);
    this.title = props.title;
    this.imageUrl = props.imageUrl;
    this.description = props.description;

  }
 
   /**
    * @returns React.Component
    */
     render(){
       return(
        <>
          <div className='main'>
            <h2>WildBoi</h2>
            <img src='' alt='' title='WildBoi'></img>
            <p>Himbs a WildBoi</p>
          </div>
          <div className='main'>
              <h2>CalmBoi</h2>
              <img src='' alt='' title='CalmBoi'></img>
              <p>Himbs a CalmBoi</p>
            </div>
        </>
     );
   }
 }
 
 
 
 export default Main;
 