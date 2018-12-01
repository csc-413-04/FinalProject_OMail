import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "./Login.css";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  sendSomeData = (e) => {
    axios({
        method : 'POST',
        url: '/create',
        data: {
            user: this.state.email,
            password: this.state.password,
        }
    })
    .then((res)=> {
        console.log(res)
    }).catch((e) =>{
        console.log(e);
    });
    this.setState({
        email: '',
        password: ''
    })
}

  displayLog = (e) =>{
    console.log(this.state.email);
    console.log(this.state.password);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  updateEmail(e){
        this.setState({
            email: e.target.value,
        })
    }
    
  updatePass(e){
      this.setState({
          password: e.target.value,
      })
  }

  render() {
    return (
      <div className="Login">
        <h1 class="red ui header">O-mail</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email:</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.sendSomeData}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
