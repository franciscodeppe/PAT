import React, { Component } from 'react';
import { Link } from 'react-router-dom'

let Navbar = require("react-bootstrap/lib/Navbar");
let Nav = require("react-bootstrap/lib/Nav");
let NavbarHeader = require("react-bootstrap/lib/NavbarHeader")


class Head extends Component {
    render() {
        return (
            <Navbar className="navbar">
                <Nav>
                    <Link to='/main'>Home</Link>
                </Nav>
                <NavbarHeader>
                    <img href="/main" className="nav-logo" src="Images/logo.png" alt="logo" />
                </NavbarHeader>
                <Nav>
                    <Link to='/progress'>Progress</Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Head;
