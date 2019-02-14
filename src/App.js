//Reference Tutorial ihatetomatoes 
import React, { Component } from 'react';
import './App.css';
import data from './data';
import Card from './Card'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }
  //Next and Previous Button
  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({property: data.properties[newIndex]})
  }
  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({property: data.properties[newIndex]})
  }

  render(){
  const{properties, property} = this.state;
    return (
      <div className= "App">
      
      <div className = "page">
             <section>
               <h1>Edwin Pellot</h1>
               </section>
               <Card property = {property}/>
            </div>
          
            <button
           onClick = {() =>this.prevProperty()} 
           disabled = {property.index === 0}>
           Prev
           </button>

          <button 
           onClick = {() =>this.nextProperty()} 
           disabled = {property.index === data.properties.length-1}>
           Next
           </button>
       </div>
    );
  }
}

export default App;

