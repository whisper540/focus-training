import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import TestCom from './components/TestCom/TestCom.js';
import Can from './components/Can/Can.js';
import AppAlert from './components/AppAlert/AppAlert.js';
import AppLogin from './components/AppLogin/AppLogin.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <TestCom />
        </header> */}
        <Switch>
          <Route exact path="/" component={Can} />
          <Route exact path="/login" component={AppLogin} />
          <Route exact path="/alert" component={AppAlert} />
        </Switch>
      </div>
    );
  }
}

export default App;
