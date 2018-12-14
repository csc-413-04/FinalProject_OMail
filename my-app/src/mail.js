import React, { Component } from 'react';
import './App.css'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MailPreviewList from './mailPreviewList';
import {importEmails} from "./redux/action";
import Modal from './modal';
import axios from 'axios';


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
//    constructor(props) {
//        super(props);
//    
//        this.state = {
//          email: "",
//          type: "", (it can be Inbox, Sent or Trash (trash isnt working))
//       };
//      }
    getInbox = (e) => {
        axios({
          method: 'POST',
          url: '/mail',
          data: {
        // Hard coding the data.
        // user: this.state.user, <- should be something like this
            user: "b",
            Show: "Inbox",
          }
        })
          .then((res) => {
            console.log(res.data)
            this.props.importEmails(res.data)
        }).catch((e) => {
            console.log(e);
          });
        this.setState({
          email: '',
          password: ''
        })
      }

    render() {

    return (
            <div className="App">
                <header className="App-header">
                    <h1 className="red ui header"><i className="envelope open outline icon"></i>O-mail</h1>,
                    <div className="sidenav">
                        <div className="fluid ui large vertical buttons">
                            <button className="ui primary button" onClick={this.getInbox} ><i
                                className="envelope icon"></i>Inbox</button>

                            <button className="fluid ui button" ><i
                                className="inbox icon"></i>Sent Mail</button>


                            <button href="Sent" className="fluid ui button"><i className="paper plane icon"></i>Compose
                            </button>
                            <button href="Drafts" className="fluid ui button"><i className="file icon"></i>Drafts
                            </button>
                            <button href="Trash" className="fluid ui button"><i className="trash icon"></i>Trash</button>
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
                                    <th>Preview</th>
                                </tr>
                                </thead>
                                <MailPreviewList />
                            </table>
                            {
                                this.props.currentEmail&&
                                <Modal>

                                    <table className="ui compact table">
                                    <tr>
                                        <td>From :</td><td>{this.props.currentEmail.sentFrom}</td>
                                        <td>Subject:</td>
                                        <td>{this.props.currentEmail.subject}</td>
                                    </tr>

                                    <tr>
                                        <td>{this.props.currentEmail.preview}
                                        </td>
                                    </tr>

                                    </table>



                                </Modal>

                            }

                        </div>
                    </div>
                </header>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        currentEmail : state.mailEditReducer.currentEmail
    };

}


const mapDispatchToProps = {importEmails};

export default connect(mapStateToProps, mapDispatchToProps)(Mail);

