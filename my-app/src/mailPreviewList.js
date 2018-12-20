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
                <td>{this.props.show ? emailPreview.Sender : emailPreview.Recipient}</td>
                <td className="nowrap">{emailPreview.Subject}</td>
                <td className="truncate">{emailPreview.MailBody}
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

//this is where I'm importing the EmailList from the global variable that's created in the rootReducer
//I'm mapping it to state (instance variables) and using it in the createListItems() function to create the tables
function mapStateToProps(state){
    return{
        mail : state.EmailList,
    };

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectEmail: selectEmail}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(MailPreviewList);