import React, { Component } from 'react';
import './sendmail.css';


class sendmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: "",
            to: "",
            message: ""
        };

    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({

        });
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.from
        });
        console.log(this.state.from);
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.state.handleSubmit}>
                <lable>
                    <p>From</p>
                    <input type="text" from={this.state.value} onChange={this.handleChange} />
                </lable>
                <lable>
                    <p>To</p>
                    <input type="text" to={this.state.value} onChange={this.handleChange} />
                </lable>
                <div>

                    <p>Message</p>
                    <textarea>
                        
                    </textarea>
                </div>
                <br></br>
        <input type="submit" value="Submit" />

            </form>

        );
    }
}

export default sendmail;