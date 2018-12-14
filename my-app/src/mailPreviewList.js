import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectEmail} from "./redux/action";

class MailPreviewList extends Component{

    createListItems(){
        return this.props.mail.map((emailPreview) => {
            return(
            <tr key={emailPreview.id}
                onClick = {() => this.props.selectEmail(emailPreview)}>
                <td>{emailPreview.sentFrom}</td>
                <td>{emailPreview.subject}</td>
                <td>{emailPreview.preview}
                </td>
            </tr>
            );
        });
    };



    render(){
        return (
            <tbody>
            {this.createListItems()}
            </tbody>
    );
    }

}

function mapStateToProps(state){
    return{
        mail : state.EmailList
    };

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectEmail: selectEmail}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(MailPreviewList);