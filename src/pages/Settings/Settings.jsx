import React from 'react';

import { auth } from '../../services/firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { signOutUser } from './../../services/firebase/users';
import "./Settings.css"
import { Container, Row, Col, Button } from 'react-bootstrap';
import SettingsButton from './settingsButton';

//import images
import backArrow from "./icons/backarrow.png"


const Settings = () => {

    onAuthStateChanged(auth, async (user) => {
        if(user) {
        }else{
            window.location.href = "/login";
        } 
    });

    return (<Container>
                <Row>
                    <Button onClick={() => {window.location.href ="/purchase-history"}}>Purchase History</Button>
                </Row>
            </Container>)
}

export default Settings