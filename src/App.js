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
               <div className= "cards-slider">
                      <div className= "cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)` /*Slides The slide-wrapper Component on the X axis */
                }}>
                      {
                        properties.map(property => <Card key = {property._id} property = {property}/>) /*Displays Cards through Loop */
                      }
               </div>
               </div>
            </div>
          <div className = "butRegion">
            <button
           onClick = {() =>this.prevProperty()} 
           disabled = {property.index === 0}>
           &#8810;
           </button>
            <p>Pictures</p>
          <button 
           onClick = {() =>this.nextProperty()} 
           disabled = {property.index === data.properties.length-1}>
           &#8811;
           </button>
           </div>
       </div>
    );
  }
}

export default App;

