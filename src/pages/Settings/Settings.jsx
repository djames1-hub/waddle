import React from "react";

import { auth } from "../../services/firebase/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { signOutUser } from "./../../services/firebase/users";
import "./Settings.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import SettingsButton from "./settingsButton";

//import images
import backArrow from "./icons/backarrow.png";

const Settings = () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
    } else {
      window.location.href = "/login";
    }
  });

  return (
    <Container>
      <br />
      <Row>
        <Button
          onClick={() => {
            window.location.href = "/purchase-history";
          }}
        >
          Purchase History
        </Button>
      </Row>
      <br />
      <Row>
        <Button
          onClick={() => {
            window.location.href = "/user";
          }}
        >
          View User Details
        </Button>
      </Row>
      <br />
      <Row>
        <button onClick={signOutUser}>Sign Out</button>
      </Row>
    </Container>
  );
};

export default Settings;
