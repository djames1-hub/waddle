import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Header.css";

import { Container, Row, Col, Stack } from "react-bootstrap";
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
          </Nav>
          <Nav >
            <Stack direction="horizontal">
            <NavDropdown title="Categories" id="category-nav-dropdown" className="border border-end-0 rounded-3 rounded-start ">
              <NavDropdown.Item>Books</NavDropdown.Item>
              <NavDropdown.Item>Clothing</NavDropdown.Item>
              <NavDropdown.Item>Furniture</NavDropdown.Item>
              <NavDropdown.Item>Electronics</NavDropdown.Item>
              <NavDropdown.Item>Sports Gear</NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex justify-content-end">
              <Form.Group controlId="searchbar">
                <Form.Control type="search" className="border-start-0 border-end-0"></Form.Control>
              </Form.Group>
              <Button className="border-start-0 rounded-end">Search</Button>
            </Form>
            </Stack>
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
