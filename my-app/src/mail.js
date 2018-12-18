import React, { Component } from "react";
import "./App.css";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MailPreviewList from "./mailPreviewList";
import { importEmails } from "./redux/action";
import Modal from "./modal";
import axios from "axios";
// import userReducer from "./redux/userReducer";


class Mail extends Component {

  getInbox = e => {
    axios({
      method: "POST",
      url: "/mail",
      data: {
        // Hard coding the data.
        // user: this.state.user, <- should be something like this
        user: this.props.currentUser,
        Show: "Inbox"
      }
    })
      .then(res => {
        console.log(res.data);
        this.props.importEmails(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  getSentmail = e => {
    axios({
      method: "POST",
      url: "/mail",
      data: {
        // Hard coding the data.
        // user: this.state.user, <- should be something like this
        user: this.props.currentUser,
        Show: "Sent"
      }
    })
      .then(res => {
        console.log(res.data);
        this.props.importEmails(res.data);
      })
      .catch(e => {
        console.log(e);
      });

  };

  sendMail = e => {
    axios({
      method: "POST",
      url: "/send",
      data: {
        // Hard coding the data.
        // user: this.state.user, <- should be something like this
        from: this.props.currentUser,
        to: "a",
        subject: "movie",
        msg: "when are you free for movie?" 
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  getTrash = e => {
    axios({
      method: "POST",
      url: "/mail",
      data: {
        // Hard coding the data.
        // user: this.state.user, <- should be something like this
        user: this.props.currentUser,
        Show: "Trash"
      }
    })
      .then(res => {
        console.log(res.data);
        this.props.importEmails(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  displayLog = (e) => {
    console.log(this.props.currentUser)
  }

  render() {
    return (
      <div className="App">{this.getInbox()}
        <header className="App-header">
          <h1 className="red ui header">
            <i className="envelope open outline icon" />O-mail
          </h1>
          <div className="sidenav">
          <button onClick={this.displayLog}>currentUserTesting</button>

            <div className="fluid ui large vertical buttons">
            
              <button href="Sent" className="fluid ui button">
                <i className="paper plane icon" />Compose
              </button>
              <button className="ui primary button" onClick={this.getInbox}>
                <i className="inbox icon" />Inbox
              </button>

              <button className="fluid ui button" onClick={this.getSentmail}>
                <i className="envelope icon" />Sent Mail
              </button>
              <button href="Trash" className="fluid ui button" onClick={this.getTrash}>
                <i className="trash icon" />Trash
              </button>
            </div>
          </div>
          <div className="main">
            <div className="search-container">
              <div className="fluid ui action input">
                <input type="text" placeholder="Search..." />
                <button className="ui button">
                  <i className="search icon" />Search
                </button>
              </div>
            </div>
            <div className="rows">
              <table id="table" className="ui striped compact selectable celled table">
                <thead>
                  <tr>
                    <th>From</th>
                    <th>Subject</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <MailPreviewList />
              </table>
              {this.props.currentEmail && (
                <Modal>
                    <header className="modal-header">
                        <span className="label">Read/Compose Message</span>
                        <button href="close" className="ui black button">
                            <i className="remove icon" />
                        </button>
                    </header>
                    <div className="modal-container">
                    <div className="ui form">
                            <div className="inline fields">
                                <label>From :</label>
                                <div>{this.props.currentEmail.Sender}</div>
                            </div>
                            <div className="ui divider"></div>
                            <div className="inline fields">
                                <label>Subject:</label>
                                <div>{this.props.currentEmail.Subject}</div>
                            </div>
                            <div className="ui divider"></div>
                            <div>
                                <div>{this.props.currentEmail.MailBody}</div>
                            </div>

                        <div className="field">
                        <textarea>{this.props.currentEmail.MailBody}</textarea>

                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="ui primary button" role="button">Send/Reply</button>
                    </div>
                </Modal>
              )}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

 const mapStateToProps = (state, ownProps) => {
   return{
       currentEmail: state.mailEditReducer.currentEmail,
       currentUser: state.userReducer.email

   };
 };

const mapDispatchToProps = { importEmails };

export default connect(
   mapStateToProps,mapDispatchToProps
)(Mail);
