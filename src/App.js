import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <List/>
        </header>
      </div>
    );
  }
}

export default App;
