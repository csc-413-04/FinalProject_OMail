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
          <h1 className="red ui header"><i className="envelope open outline icon"></i>O-mail</h1>
          <div class="sidenav">
            <div className="fluid ui large vertical buttons">
              <button className="ui primary button" onClick={this.handleClick}><i className="envelope icon"></i>
              {this.state.isToggleOn ? 'Send': 'Message Sent!'}
              </button>

              <button className="fluid ui button" onClick={this.handleClick}><i className="inbox icon"></i>
              {this.state.isToggleOn ? 'Inbox': 'Display Inbox'}</button>

            {/* <button onClick={dosomething}>
            Sent</button>

            <button onClick={dosomething}>
            Drafts</button>

            <button onClick={dosomethingelse}>
            Trash</button>  */}

              <button href="Sent" className="fluid ui button"><i className="paper plane icon"></i>Sent</button>
              <button href="Drafts" className="fluid ui button"><i className="file icon"></i>Drafts</button>
                <button href="Trash" className="fluid ui button"><i class="trash icon"></i>Trash</button>
            </div>
          </div>
          <div className="main">
            <div className="search-container">
              <div className="fluid ui action input">
                  <input type="text" placeholder="Search..."></input>
                  <button className="ui button"><i className="search icon"></i>Search</button>
              </div>
            </div>
            <div className="rows">
                <table className="ui striped compact selectable celled table">
                    <thead>
                    <tr>
                        <th>From</th>
                        <th>Subject</th>
                        <th>Received</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Osbaldo</td>
                        <td>Approved</td>
                        <td>John is an interesting boy but sometimes you don't really have enough room to describe
                            everything you'd like
                        </td>
                    </tr>
                    <tr>
                        <td>Sawyer</td>
                        <td>Approved</td>
                        <td>Jamie is a kind girl but sometimes you don't really have enough room to describe everything
                            you'd like
                        </td>
                    </tr>
                    <tr>
                        <td>Nick</td>
                        <td>Denied</td>
                        <td>Jill is an alright girl but sometimes you don't really have enough room to describe
                            everything you'd like
                        </td>
                    </tr>
                    <tr>
                        <td>JJ</td>
                        <td>Sad</td>
                        <td>I can't believe Stan Lee died :(
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
