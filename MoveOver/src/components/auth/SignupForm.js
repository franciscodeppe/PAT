import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      interests: ''
    }
  }
  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }
  render(){
    return(
      <form onChange={this.handleInputChange} >
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input className="form-control" type="text" id="firstName" />
        </div>
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <input className="form-control" type="text" id="lastName" />
        </div>
        <div className="form-group">
          <label for="userName">Username</label>
          <input className="form-control" type="text" id="userName" />
        </div>
        <div className="form-group">
          <label for="emailAddress">Email Address</label>
          <input className="form-control" type="email" id="emailAddress" />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input className="form-control" type="password" id="password" />
        </div>
        <div class="form-group">
          <label for="interestSelect">Your Interests</label><br/>
          <select multiple class="form-control" id="interestSelect">
            <option>Javascript</option>
            <option>Fitness</option>
            <option>Golf</option>
            <option>Math</option>
            <option>Science</option>
          </select>
        </div>
        <button className="btn btn-md" type="submit" onClick={this.handleInputChange}>Create Your Profile</button>
      </form>
    )
  }
}

export default SignupForm;
