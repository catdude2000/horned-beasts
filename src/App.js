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

 class App extends React.Component{
 
   /**
    * @returns React.Component
    */
constructor(props){
  super(props);
    this.state={show: false, beast: beasts[0]
    ,beastList: beasts}

  }
handleChange = (beast) =>{
  this.setState({
    show: true, beast: beast
  })
}
handleClose = () =>{
  // console.log('handleClose')
  this.setState({
    show: false
  })
}
handleFormSubmitted = (evt) => {
  evt.preventDefault();
  console.log(`Submitted`);
};
hornlist = (evt) => {
  let numHorns = evt.target.value;
  console.log('app.hornlist');
  if ('all' === numHorns) {
    console.log('allhorns');
    this.setState({
      beastList: beasts
    })
    console.log(this.state.beast.length, 'statebestlen')
  }
    else {
      console.log('numbered', numHorns)
    let keepArray = beasts.filter(ele => {
      return (ele.horns.toString() === numHorns);
    })
    console.log(keepArray.length, 'keeplength')
    this.setState({
      beastList : keepArray
    })
    console.log(this.state.beast.length, 'statebeastlength')
    return keepArray
    }
};
     render(){
       return(
       <div className='App'>
         <h1>Lab 2</h1>
         <div>
          <select defaultValue={'all'} 
          onChange={this.hornlist} 
          >
            <option value= 'all'>all</option>
            <option value= '1'>1</option>
            <option value= "2">2</option>
            <option value= "3">3</option>
          </select>
          </div>       
          <Main chosen={this.state.beastList} handleChange={this.handleChange}/>
          <SelectedBeast show={this.state.show} beast={this.state.beast} close={this.handleClose}/>
         <Footer />
       </div>
     );
   }
 }
 
 export default App;
 