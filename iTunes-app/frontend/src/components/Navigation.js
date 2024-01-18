// Import React from React library
import React from "react";
// Import Container, Nav, Navbar, and NavLink components from react-bootstrap library
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// Import NavLink component from React Router
import { NavLink } from "react-router-dom";
// Import the Navigation.css file for styling
import "./Navigation.css";
// Import the Logo image
import Logo from "./images/Logo.png";

// Navigation component provides navigation links for the app
const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-myDark"
      style={{ position: "fixed", top: "0", width: "100%" }}
    >
      <Container>
        {/* Branding and logo */}
        <Navbar.Brand className="logo">
          <img src={Logo} width="80px" height="40px" alt="Logo" />
          <span>iTunes Search</span>
        </Navbar.Brand>
        {/* Navigation links */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggle"
          style={{ marginTop: "-50px" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
