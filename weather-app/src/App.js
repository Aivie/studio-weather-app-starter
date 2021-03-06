import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './Router';
import { Route } from 'react-router-dom'
import DayPage from './DayPage'
import WeekPage from './WeekPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Galore</h1>
        </header>
         <p className="App-intro"></p>
        <BasicExample />
      </div>
    );
  }
}

export default App;
