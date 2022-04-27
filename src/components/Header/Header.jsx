import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Header.css";
import { markAllRead } from "../../services/firebase/users/notifications";

import { Container, Row, Col } from "react-bootstrap";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import { signOutUser } from "../../services/firebase/users";

const Header = () => {

  const [notificationElements, setNotificationElements] = useState(<div></div>);
  const [hasUnread, setHasUnread] = useState(false);

  const user = useFirebaseAuth();

  const { notifications } = useFirebaseAuth();

  //called repetedly
  useEffect(() => {
        console.log(user.purchaseHistory);
        const fetchData = async () => {
            let items = [];
            if(notifications !== undefined && notifications.length !== 0){
                for(let item of notifications){
                    if(item.isRead === false){
                      setHasUnread(true);
                    }
                    items = [...items, item];
                }
                let NotificationItems = items.map((notif) => (
                  <NavDropdown.ItemText className={notif.isRead == false ? "unread" : "read"} >{notif.message}</NavDropdown.ItemText>
                ));
                setNotificationElements(NotificationItems);
            }{
              setNotificationElements(<NavDropdown.ItemText>You have no notifications.</NavDropdown.ItemText>)
            }
        }
        return fetchData
    },[notifications])

    const markAllNotifsRead = () => {
      if(notifications !== undefined && notifications.length !== 0){
          markAllRead(user.uid)
      }
    }

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
              <NavDropdown.Item onClick={() => {window.location.href = "/purchase-history"}}>Purchase History</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {signOutUser()}}>Sign Out</NavDropdown.Item>
            </NavDropdown>
            : <Nav.Link href="/login">Login</Nav.Link>
            }
            {user.firstName ? 
              <NavDropdown title="Notifications" style={hasUnread ? {border : '0.2rem solid red'} : {border: '0.2rem solid transparent'}} onClick={() => {markAllNotifsRead()}}>
                {notificationElements}
              </NavDropdown> : <></>
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
