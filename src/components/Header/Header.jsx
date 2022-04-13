import React from 'react';

import { auth } from '../../services/firebase/firebase-config';

import './Header.css';
import NavBar from './../NavBar'
import { getCurrentUser, getUser } from '../../services/firebase/users/user';
import { onAuthStateChanged } from 'firebase/auth';

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
                <div className="cat-display">
                    <div className="category-buttons">
                        <button className="category-title">Books</button>
                        <button className="category-title">Clothing</button>
                        <button className="category-title">Furniture</button>
                        <button className="category-title">Electronics</button>
                        <button className="category-title">Sports&nbsp;Gear</button>
                    </div>
                </div>            
            </section>
        </section>
    )
}

export default Header;