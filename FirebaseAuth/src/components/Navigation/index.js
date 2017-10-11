import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';

import SignOutButton from '../SignOut';

let Navbar = require("react-bootstrap/lib/Navbar");
let Nav = require("react-bootstrap/lib/Nav");
let NavbarHeader = require("react-bootstrap/lib/NavbarHeader")

const Navigation = ({ sessionStore }) =>
  <Navbar className="navbar">
    <Nav>
      <Link to='/HomePage'>Home</Link>
    </Nav>
    <NavbarHeader>
      <img className="nav-logo" src="Images/logo.png" alt="logo" />
    </NavbarHeader>
    <Nav>
      <Link to='/progress'>Progress</Link>
      <Link to="/account">Account</Link>
    </Nav>
    <SignOutButton />
  </Navbar>

export default compose(
  inject('sessionStore'),
  observer
)(Navigation);
