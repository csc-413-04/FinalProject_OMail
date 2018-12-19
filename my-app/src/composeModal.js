import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {composeEmail} from "./redux/action";
import {Provider} from 'react-redux';

class ComposeModal extends Component {

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
                            <input></input>
                        </div>
                        <div className="inline fields">
                            <label>Subject:</label>
                            <input></input>
                        </div>
                        <div className="ui divider"></div>
                        <div className="field">
                            <textarea>Compose Email</textarea>

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
        composeEmail: state.mailEditReducer.composeEmail,
        currentUser: state.userReducer.email,
        reply: state.composeEmailReducer.reply

    };

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({composeEmail: composeEmail}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(ComposeModal);