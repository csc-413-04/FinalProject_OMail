import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import mail from "./mail";
import Login from "./Login";



class App extends Component {

  render() {
    return (
      <div classname="App">
        <Router>
          <div>
          <Switch>
            <Route path="/logged" component={mail} />
            <Route path="/" component={Login} />
          </Switch>
          </div>
        </Router>

      </div>
    );
  }
}



export default App;
