import React from 'react';
import { Header } from '../common';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../../domain/pages/home/Home';
import Wishlist from '../../domain/pages/wishlist/Wishlist';
import Cart from '../../domain/pages/cart/Cart';
import Settings from '../../domain/pages/settings/Settings';
import NewListing from '../../domain/pages/newListing/NewListing';
import NotFound from '../../domain/pages/notFound/NotFound';
import SignUp from "../../domain/auth/SignUp";
import Login from "../../domain/auth/SignIn";
import ViewItem from '../../domain/pages/viewItem/ViewItem';
import Search from '../../domain/pages/search/Search';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            {/* ROUTING */}
            <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/new-listing" element={<NewListing />} />
                    <Route path="/not-found" element={ <NotFound />} />
                    <Route path="/sign-up" element={ <SignUp />} />
                    <Route path="/login" element={ <Login />} />
                    <Route path="/view-item/*" element={ <ViewItem />} />
                    <Route path="/search/*" element={ <Search />} />
                    <Route path="/*" element={ <NotFound />} />
                </Routes>
            </Router>
            </div>
        </div>
    );
}

export default App;
