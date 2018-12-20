import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {composeEmail} from "./redux/action";
import {Provider} from 'react-redux';
import axios from "axios";

class ComposeModal extends Component {

    constructor(props) {
        super(props);
        // this.routeChange = this.routeChange.bind(this);
        this.state = {
          recipient: "",
          subject: "",
          msg: "",
        };
      }

// sendMail = e => {
//     axios({
//         method: "POST",
//         url: "/send",
//         data: {
//         from: this.props.currentUser,
//         to: this.state.recipient,
//         subject: this.state.subject,
//         msg: "when are you free for movie?" 
//         }
//     })
//         .then(res => {
//         console.log(res.data);
//         })
//         .catch(e => {
//         console.log(e);
//         });
//     };

    render(){
        return (<div id="compose-modal" className="modal">
                <header className="modal-header">
                    <span className="label">Compose Message</span>
                    <button href="close" className="ui black button">
                        <i className="remove icon" />
                    </button>
                </header>
                <div className="modal-container">
                    <div className="ui form">
                        <div className="inline fields">
                            <label>From :</label>
                            <div>{this.props.currentUser}</div>
                        </div>
                        <div className="inline fields">
                            <label>To:</label>
                            <input value={this.state.recipient}></input>
                        </div>
                        <div className="inline fields">
                            <label>Subject:</label>
                            <input value={this.state.subject}></input>
                        </div>
                        <div className="ui divider"></div>
                        <div className="field">
                        <label>Compose Email:<input value={this.state.msg} 
                            onChange={e => this.setState({msg: e.target.value})} /></label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">

                    <button type="button" className="ui primary button" role="button" onClick={this.sendMail}>Send</button>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return{
        composeEmail: state.mailEditReducer.composeEmail,
        currentUser: state.userReducer.email,
        reply: state.composeEmailReducer.reply

    };

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({composeEmail: composeEmail}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(ComposeModal);