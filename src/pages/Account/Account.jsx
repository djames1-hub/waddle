import React from "react";

import { auth } from "../../services/firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Col } from "react-bootstrap";

function Account() {
  const user = useFirebaseAuth();

  return (
    <Container>
      <br />
      <Row>Account Details</Row>
      <br />
      <Row>
        <ListGroup>
          <ListGroup.Item>
            Name: {user.firstName}&nbsp;
            {user.lastName}
          </ListGroup.Item>
          <ListGroup.Item>Email: {user.email}</ListGroup.Item>
          <ListGroup.Item>Address: </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
}

export default Account;
