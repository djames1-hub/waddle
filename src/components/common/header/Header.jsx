import React from 'react';
import { Navbar } from '../../common';

import './Header.css'

function Header () {

    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/" className="header-logo"> waddle </a>
                </section>
                <section className="header-top__navbar">
                    <Navbar />
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