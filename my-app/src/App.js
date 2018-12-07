import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import mail from "./mail";
import Login from "./Login";
import CreateUser from "./CreateUser";
import sendmail from "./sendmail";



class App extends Component {

    render() {
        return (
            <div classname="App">
                <Router>
                    <div>
                        <Switch>
                            <Route path="/logged" component={mail} />
                            <Route path="/CreateUser" component={CreateUser} />
                            <Route path="/sendm" component={sendmail}/>
                            <Route path="/" component={Login} />
                        </Switch>
                    </div>
                </Router>

            </div>
        );
    }
}



export default App;