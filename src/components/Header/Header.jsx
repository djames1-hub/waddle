import React from 'react';

import './Header.css';
import NavBar from './../NavBar'


const Header = () => {
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
                <section className= "header-bottom__welcome">
                    Welcome User
                </section>
            </section>
        </section>
    )
}

export default Header;