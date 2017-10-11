import React from 'react';
import SignupForm from './auth/SignupForm';

const Signup = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <h1>Sign Up!</h1>
        <SignupForm />
      </div>
    </div>
  </div>
);

export default Signup;
