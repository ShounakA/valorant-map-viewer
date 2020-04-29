import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Haven from "./Map";

class App extends Component{
  constructor(props){
      super(props);
      this.state = {
        isBuyChecked: true
      }
  }
  handleChange(e){
    this.setState({isBuyChecked: e.target.checked})
  };
  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="splitter">
          <div id="config">
            <label to="barrier">Barrier ON/OFF</label>
            <input id="barrier" type="checkbox" onChange={this.handleChange.bind(this)} checked={this.state.isBuyChecked}/>
          </div>
          <Haven width={"495"} height={"444"} isBuyPeriod={this.state.isBuyChecked}/>
        </div>
      </div>
    );
  }

}

export default App;
