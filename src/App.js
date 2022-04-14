import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Cart, NotFound, ItemView, Header } from './components';
import { Home, Wishlist, Settings, ListingForm, SignUp, SignIn, Search } from './pages';
import './App.css';
import { FirebaseAuthProvider } from './contexts';

function App() {
    return (
        <div className="App">
            <FirebaseAuthProvider>
                <Header />
                {/* ROUTING */}
                <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/new-listing" element={<ListingForm />} />
                        <Route path="/not-found" element={ <NotFound />} />
                        <Route path="/sign-up" element={ <SignUp />} />
                        <Route path="/login" element={ <SignIn />} />
                        <Route path="/view-item/:id" element={ <ItemView />} />
                        <Route path="/search/*" element={ <Search />} />
                        <Route path="/*" element={ <NotFound />} />
                    </Routes>
                </Router>
                </div>
            </FirebaseAuthProvider>
        </div>
    );
}

export default App;
