import React, {useState} from 'react';

import './Navbar.css';

const Navbar = () => {
    
    // create hooks to monitor input changes
    const [search, setSearch] = useState("");

    return (
    <section className="navbar">
         <a href="/" className="navbar-item">Home</a>
                      <a href="/new-listing" className="navbar-item">New Listing</a>
                      <a href="/cart" className="navbar-item">Cart</a>
                      <a href="/wishlist" className="navbar-item">Wishlist</a>
                      <a href="/settings" className="navbar-item">Settings</a>
                      <a href="/sign-up" className="navbar-item">Account</a>
                      <div id="searchbar-container">
                          <input type="text" className="search-input" placeholder="Search" onChange={event => setSearch(event.target.value)}/>
                          <input type="button" className="search-button" value="Search" onClick={() => {window.location.href="/search/"+search}}/>
                      </div>
    </section>
    )
}

export default Navbar;
