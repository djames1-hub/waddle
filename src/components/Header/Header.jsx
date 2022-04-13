import React from 'react';

import { auth } from '../../services/firebase/firebase-config';

import './Header.css';
import NavBar from './../NavBar'
import { getCurrentUser, getUser } from '../../services/firebase/users/user';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {

    var welcomeTitle = "";

    onAuthStateChanged(auth, async (user) => {
        if(user) {
            //let u = await getCurrentUser();
            //welcomeTitle = "Welcome, " + u.username;
        }
    });

    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/" className="header-logo"> waddle </a>
                </section>
                <section className="header-top__navbar">
                    <NavBar />
                </section>
            </section>
            <section className="header-bottom">
                <section className= "header-bottom__welcome">{"Welcome! "}</section>
            </section>
        </section>
    )
}

export default Header;