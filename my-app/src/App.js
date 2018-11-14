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
          <h1 className="red ui header">O-mail</h1>
          <div class="sidenav">
            <div className="fluid ui vertical buttons">
              <button className="ui button" onClick={this.handleClick}>
              {this.state.isToggleOn ? 'Send': 'Message Sent!'}
              </button>

              <button className="fluid ui button" onClick={this.handleClick}>
              {this.state.isToggleOn ? 'Inbox': 'Display Inbox'}</button>

            {/* <button onClick={dosomething}>
            Sent</button>

            <button onClick={dosomething}>
            Drafts</button>

            <button onClick={dosomethingelse}>
            Trash</button>  */}

              <button href="Sent" className="fluid ui button">Sent</button>
              <button href="Drafts" className="fluid ui button">Drafts</button>
              <button href="Trash" className="fluid ui button">Trash</button>
            </div>
          </div>
          <div className="main">
            <div className="search-container">
              <div className="fluid ui action input">
                  <input type="text" placeholder="Search..."></input>
                  <button className="ui button">Search</button>
              </div>
            </div>
            <div className="rows">
                <table className="ui fixed table">
                    <thead>
                    <tr>
                        <th>From</th>
                        <th>Subject</th>
                        <th>Received</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>Approved</td>
                        <td>John is an interesting boy but sometimes you don't really have enough room to describe
                            everything you'd like
                        </td>
                    </tr>
                    <tr>
                        <td>Jamie</td>
                        <td>Approved</td>
                        <td>Jamie is a kind girl but sometimes you don't really have enough room to describe everything
                            you'd like
                        </td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Denied</td>
                        <td>Jill is an alright girl but sometimes you don't really have enough room to describe
                            everything you'd like
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

          </div>
        </header>
      </div>
    );
  }
}



export default App;
