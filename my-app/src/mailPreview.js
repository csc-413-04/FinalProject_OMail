import React, { Component } from 'react';

class mailPreview extends Component{
    constructor(props){
        super(props);
        this.sentFrom = sentFrom;
        this.subject = subject;
        this.preview = preview;

    }

    render(){
        return (
            <tr id = {this.props.id}>
                <td>{this.props.sentFrom}</td>
                <td>{this.props.subject}</td>
                <td>{this.props.preview}
                </td>
            </tr>
    )


    };

    mailPreview.defaultProps = {
        sentFrom : "Sent From",
        subject : "Email Subject",
        preview : "Email preview ..."

    }

}