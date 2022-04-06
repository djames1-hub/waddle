import React from 'react';
import { Header } from './components/common';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Wishlist from './components/pages/wishlist/Wishlist';
import Cart from './components/pages/cart/Cart';
import Settings from './components/pages/settings/Settings';
import NewListing from './components/pages/newListing/NewListing';
import NotFound from './components/pages/notFound/NotFound';
import SignUp from "./components/pages/auth/SignUp";
import Login from "./components/pages/auth/SignIn";

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
                    <Route path="/newListing" element={<NewListing />} />
                    <Route path="/notfound" element={ <NotFound />} />
                    <Route path="/sign-up" element={ <SignUp />} />
                    <Route path="login" element={ <Login />} />
                    <Route path="/*" element={ <NotFound />} />
                </Routes>
            </Router>
            </div>
        </div>
    );
}

export default App;
