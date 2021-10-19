import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const navMenu = {
    textDecoration: "none",
    color: "#fff",
    margin: "0px 15px",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "capitalize",
  };
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Eye Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav.Link>
              <NavLink to="/home" style={navMenu}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/symptoms" style={navMenu}>
                Eye Symptoms
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/treatments" style={navMenu}>
                Treatments
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contact" style={navMenu}>
                Contact us
              </NavLink>
            </Nav.Link>
            {user?.email || user?.displayName ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link>
                <NavLink to="/login" style={navMenu}>
                  Login
                </NavLink>
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
