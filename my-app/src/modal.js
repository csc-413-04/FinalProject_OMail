import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectEmail} from "./redux/action";
import {Provider} from 'react-redux';

class Modal extends Component {

    render(){
        return (<div className="modal">
                <header className="modal-header">
                    <span className="label">Compose Message</span>
                    <button href="close" className="ui black button" onClick = {() =>  this.props.selectEmail("")}>
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
                        <div className="field">
                            <textarea>{this.props.currentEmail.MailBody}</textarea>

                        </div>
                    </div>
                </div>
                <div className="modal-footer">

                    <button type="button" className="ui primary button" role="button">Send</button>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return{
        mail : state.EmailList,
        currentEmail: state.mailEditReducer.currentEmail
    };

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectEmail: selectEmail}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(Modal);