import React from 'react';
import logo from './logo.svg';
import './App.css';
import Haven from './Chart1'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Haven id="haven" width={"495"} height={"444"}/>
      </header>
    </div>
  );
}

export default App;
