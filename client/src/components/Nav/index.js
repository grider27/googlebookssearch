import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

function MainNav() {
  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand>
        Google Books
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mt-2">
          <Link className="nav-item nav-link h5" to="/">
            Search
          </Link>
          <Link className="nav-item nav-link h5" to="/saved">
            Saved
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNav;