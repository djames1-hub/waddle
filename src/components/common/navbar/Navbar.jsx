import React from 'react';
import { Searchbar } from '../../common';
import ItemData from "./itemData.json";

import './Navbar.css';

function Navbar () {

    return (
    <section className="navbar">
         <a href="/" className="navbar-item">Home</a>
                      <a href="/new-listing" className="navbar-item">New Listing</a>
                      <a href="/cart" className="navbar-item">Cart</a>
                      <a href="/wishlist" className="navbar-item">Wishlist</a>
                      <a href="/settings" className="navbar-item">Settings</a>
                      <a href="/sign-up" classname="navbar-item">Account</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


         < Searchbar placeholder="Search for an item..." data={ItemData} />

    </section>
    )
}

export default Navbar;
