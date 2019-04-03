import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Container, Navbar, Nav} from "react-bootstrap";

const NavBar = () => {
  return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link className="navbar-brand" to="/">Portfolio</Link>
            <Nav className="mr-auto">
              <NavLink className="nav-item nav-link" to="/">Home</NavLink>
              <NavLink className="nav-item nav-link" to="/about">About Me</NavLink>
              <NavLink className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
              <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
            </Nav>
            <Nav>
              <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
            </Nav>
          </Container>
        </Navbar>
  );
};

export default NavBar;
