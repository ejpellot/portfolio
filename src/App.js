//Reference Tutorial ihatetomatoes 
import React, { Component } from 'react';
import './App.css';
import './App.scss';
import data from './data';
import Card from './Card'; 
import List from './List';
import logo from'./Assets/header.png';
import Aboutme from './Aboutme';

import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[2]
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
      <Router>
      <div className= "App">
      <Route path = "/" 
            exact render  = {
      () =>{
        return(
          <div className = "page">
            <div className = "logoHeader">
              <img src = {logo} alt = "Logo"
                width  = {350}
                height = {150}/>
            </div>
            <h1 className = "homeheader">Photographer | Developer</h1>
            <p1 className = "motto">"There's no single path to greatness."</p1>
            <div className = "butRegion">
            <button className= "buttonlb"
                    onClick = {() =>this.prevProperty()} 
                    disabled = {property.index === 0}>
             &#8810;</button>

            <button className= "buttonrb"
                    onClick = {() =>this.nextProperty()} 
                    disabled = {property.index === data.properties.length-1}>
            &#8811;</button>
            </div>
            
            <div className = "colgrad">
                  <div className= {`cards-slider active-slide-${property.index}`}>
                      <div className= "cards-slider-wrapper" 
                               style= {{
                              'transform': `translateX(-${property.index*(100/properties.length)}%)` /*Slides The slide-wrapper Component on the X axis */
                       }}>{ properties.map(property => <Card key = {property._id} property = {property}/>) /*Displays Cards through Loop */}
                      </div>
                  </div>
                </div>
          </div>
        )
      }
      }/>
       <Route path = "/aboutme" 
             exact render = {
      () =>{
              return(
                <div><Aboutme/></div>
              )
             }
            }/>












      <div className = "footer"> <List/>
      <p1 className = "area">New York - Philadelphia - New Jersey</p1>
      </div>
       </div>
       </Router>
    );
  }
}

export default App;

