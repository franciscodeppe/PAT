import React, { Component } from 'react';
import API from '../utils/API.js';
import LoginForm from './auth/LoginForm.js';

//Link is required for both sign up and login (style as desired)
class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'eric@ericcreates.com',
      password: 'password'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    console.log('Landing mounted');
  }

  authUser(email, pass) {
    API.auth(email, pass)
      .then(data => {
        console.log('success');
        window.location = '/todomain';
      })
      .catch(error => console.log(error));
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state.email);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.authUser(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={'../Images/mainLogo.png'} className="landing-logo" alt="nada" />
              <LoginForm
                email={this.state.email}
                password={this.state.password}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </div>

    );
  }

};

export default Landing;
