import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "./Login.css";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux"
import {loginRequest} from './redux/action'


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      type: "",
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  createUser = (e) => {
    axios({
      method: 'POST',
      url: '/create',
      data: {
        user: this.state.email,
        password: this.state.password,
      }
    })
      .then((res) => {
        console.log(res);
        if(!res.data){
          alert("Username already in use.");
        }
      }).catch((e) => {
        console.log(e);
      });
    this.setState({
      email: '',
      password: ''
    })
  }
  loginCheck = (e) => {
    axios({
      method: 'POST',
      url: '/login',
      data: {
        user: this.state.email,
        password: this.state.password,
      }
    })
      .then((res) => {
        console.log(res);
        if(res.data) {
          // window.location.href = "/logged";
          this.props.loginRequest("hi");
        }
        else{
          alert("Username or Password is incorrect");
        }
      }).catch((e) => {
        console.log(e);
      });
    this.setState({
      email: '',
      password: '',
    })
  }

  displayLog = (e) => {
    console.log(this.props.currentUser)
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  displayScreenLog = (e) => {
    if(this.setState.state) {
      alert("Username already in use.");
    }
  }

  render() {
    return (
      <div className="Login">
        <h1 className="red ui header"><i className="envelope open outline icon"></i>O-mail</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email:</ControlLabel>
             <FormControl
              autoFocus
              type="text"
              value = {this.state.email}
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
            onClick={this.loginCheck}
          >
            Login 
          </Button>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.createUser}
          >
            Create User
          </Button>
          <Button onClick={this.displayLog}>ClickME</Button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return{
      currentUser: state.userReducer.email
  };
};

const mapDispatchToProps = { loginRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);