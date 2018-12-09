import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MailPreviewList extends Component{

    createListItems(){
        return this.props.mail.map((emailPreview) => {
            return(
            <tr key={emailPreview.id}>
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


export default connect(mapStateToProps)(MailPreviewList);