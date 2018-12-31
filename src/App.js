import React, { Component } from 'react';
import './App.css';
import TestCom from './components/TestCom/TestCom.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TestCom />
        </header>
        <section>
          body
        </section>
      </div>
    );
  }
}

export default App;
