import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "70px" }}>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Upload Images
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to="/adduser"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add User
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
