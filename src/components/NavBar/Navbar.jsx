import React, {useState} from 'react';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';

import './Navbar.css';

const Navbar = () => {
    
    // create hooks to monitor input changes
    const [search, setSearch] = useState("");
    const user = useFirebaseAuth();
    const { uid } = user;

    return (
    <section className="navbar">
         <a href="/" className="navbar-item">Home</a>
                      <a href={uid ? "/new-listing" : "/login"} className="navbar-item">New Listing</a>
                      <a href="/cart" className="navbar-item">Cart</a>
                      <a href="/wishlist" className="navbar-item">Wishlist</a>
                      <a href="/sign-up" className="navbar-item">Account</a>
                      <div id="searchbar-container">
                          <input type="text" className="search-input" placeholder="Search" onChange={event => setSearch(event.target.value)}/>
                          <input type="button" className="search-button" value="Search" onClick={() => {window.location.href="/search/"+search}}/>
                      </div>
    </section>
    )
}

export default Navbar;
