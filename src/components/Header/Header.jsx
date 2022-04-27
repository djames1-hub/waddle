import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Header.css";

import { Container, Row, Col } from "react-bootstrap";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

const Header = () => {
  const user = useFirebaseAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="/">waddle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href={user.id ? "/new-listing" : "/login"}>Sell</Nav.Link>
            <Nav.Link href={user.id ? "/cart" : "/login"}>Cart</Nav.Link>
            <Nav.Link href={user.id ? "/wishlist" : "/login"}>
              Wishlist
            </Nav.Link>
            <Nav.Link href={user.id ? "/account" : "/sign-up"}>
              Account
            </Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-end">
            <Form.Group controlId="searchbar">
              <Form.Control type="search"></Form.Control>
            </Form.Group>
            <Button>L</Button>
          </Form>
          <Nav>
            <NavDropdown title="Categories" id="category-nav-dropdown">
              <NavDropdown.Item>Books</NavDropdown.Item>
              <NavDropdown.Item>Clothing</NavDropdown.Item>
              <NavDropdown.Item>Furniture</NavDropdown.Item>
              <NavDropdown.Item>Electronics</NavDropdown.Item>
              <NavDropdown.Item>Sports Gear</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            {user.firstName ? 
            <NavDropdown title={user.firstName ? `Welcome, ${user.firstName}` : "Sign In"}>
              <NavDropdown.Item>Purchase History</NavDropdown.Item>
              <NavDropdown.Item>View User Details</NavDropdown.Item>
              <NavDropdown.Item>Send Feedback</NavDropdown.Item>
              <NavDropdown.Item>Sign Out</NavDropdown.Item>
            </NavDropdown>
            : <Nav.Link href="/login">Login</Nav.Link>
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
