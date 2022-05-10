/**
 * @file Main.js
 * @author Mike Pace
 * @description Horned Beasts lab main
 */
 import React from 'react';
 import './App.css';
 import HornedBeast from './HornedBeast';
 
 
 class Main extends React.Component{

  /**
   * 
   * @param {object} props 
   */

 
   /**
    * @returns React.Component
    */
     render(){
       return(
        // <>
          <main>
            <HornedBeast title='WildBoi' src='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' alt='altern' 
            description='This is a Wild Boi' />
            <HornedBeast title='CalmBoi' src='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' alt='altern2'
            description='This is a Calm Boi' />
            </main>
     );
   }
 }
 
 
 
 export default Main;
 