import React, { Component } from 'react';
import './App.css'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MailPreviewList from "./mailPreviewList";

class Message extends Component{
    render(){
        return(
            <div className="message">
                {this.props.content}
            </div>
        );
    }
}

class Mail extends Component {

    render() {

    return (
            <div className="App">
                <header className="App-header">
                    <h1 className="red ui header"><i className="envelope open outline icon"></i>O-mail</h1>,
                    <div class="sidenav">
                        <div className="fluid ui large vertical buttons">
                            <button className="ui primary button" ><i
                                className="envelope icon"></i>Inbox</button>

                            <button className="fluid ui button" ><i
                                className="inbox icon"></i>Sent</button>


                            <button href="Sent" className="fluid ui button"><i className="paper plane icon"></i>Sent
                            </button>
                            <button href="Drafts" className="fluid ui button"><i className="file icon"></i>Drafts
                            </button>
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
                            <table id="table" className="ui striped compact selectable celled table">
                                <thead>
                                <tr>
                                    <th>From</th>
                                    <th>Subject</th>
                                    <th>Received</th>
                                </tr>
                                </thead>
                                <MailPreviewList />
                            </table>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Mail;