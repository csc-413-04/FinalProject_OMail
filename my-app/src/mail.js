import React, { Component } from "react";
import "./App.css";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MailPreviewList from "./mailPreviewList";
import { importEmails } from "./redux/action";
import Modal from "./modal";
import ComposeModal from "./composeModal";
import {sendMail} from "./composeModal"
import axios from "axios";
import {composeEmail} from "./redux/action";
import {selectEmail} from "./redux/action";
import {bindActionCreators} from "redux";

class Mail extends Component {
  constructor(props) {
    super(props);

    this.state = {
        from: "",
        to: "",
        message: ""
    };

  }

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

  // sendMail = e => {
  //   axios({
  //     method: "POST",
  //     url: "/send",
  //     data: {
  //       from: this.props.currentUser,
  //       to: "a",
  //       subject: "movie",
  //       msg: "when are you free for movie?" 
  //     }
  //   })
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  getTrash = e => {
    axios({
      method: "POST",
      url: "/mail",
      data: {
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

  componentDidMount()
  {
    this.getInbox();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="red ui header">
            <i className="envelope open outline icon" />O-mail
          </h1>
          <div className="sidenav">
          <button onClick={this.displayLog}>currentUserTesting</button>

            <div className="fluid ui large vertical buttons">
            
              <button href="Sent" className="fluid ui button" onClick = {() => this.props.composeEmail(this.state)}>
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
              {this.props.currentEmail && <Modal/>}
              {this.props.reply && <ComposeModal/>}
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
       currentUser: state.userReducer.email,
       reply: state.composeEmailReducer.reply

   };
 };

//const mapDispatchToProps = { importEmails };

function mapDispatchToProps(dispatch) {
    return bindActionCreators({composeEmail: composeEmail, importEmails}, dispatch)

}


export default connect(
   mapStateToProps,mapDispatchToProps
)(Mail);
