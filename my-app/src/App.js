import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header">O-mail</h1>
          <div className="sidenav">

                <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'Send': 'Message Sent!'}
              </button>

            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'Inbox': 'Display Inbox'}</button>

            {/* <button onClick={dosomething}>
            Sent</button>

            <button onClick={dosomething}>
            Drafts</button>

            <button onClick={dosomethingelse}>
            Trash</button>  */}

            <a href="Inbox">Send</a>
            <a href="Inbox">Inbox</a>
            <a href="Sent">Sent</a>
            <a href="Drafts">Drafts</a>
            <a href="Trash">Trash</a>


          </div>
          <div className="main">
            <div className="search-container">
              <input type="search" placeholder="Search" />
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
            <div className="rows">
              <ul>
                <li>Jsamcam - This is an email subject line</li>
                <li>GitHub  - Welcome to Github</li>
              </ul>
            </div>

          </div>
        </header>
      </div>
    );
  }
}



export default App;
