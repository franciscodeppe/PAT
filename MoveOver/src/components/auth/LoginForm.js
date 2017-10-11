import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './LoginForm.css';

const LoginForm = props => (
  <div className="loginCard">
    <div className="loginCard-body">
      <form className="loginForm">
        <fieldset>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              onChange={props.handleInputChange}
              value={props.email}
              id="email"
              className="form-control"
              placeholder="email@email.com"
              name="email"
              type="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              onChange={props.handleInputChange}
              value={props.password}
              className="form-control"
              placeholder="password"
              name="password"
              type="password"
            />
          </div>
          <button onClick={props.handleFormSubmit} className="btn btn-lg btn-default btn-block">Login</button>
          <br />
          <div className="register">
            <Link to='/signup'>Register here</Link>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
);

export default LoginForm;
