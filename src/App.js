import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Cart, NotFound, Header } from './components';
<<<<<<< HEAD
import { Home, Wishlist, Settings, ListingForm, SignUp, SignIn, Search, ItemView, BulkListing, PurchaseHistory } from './pages';
=======
import { Home, Wishlist, ListingForm, SignUp, SignIn, Search, ItemView, BulkListing } from './pages';
>>>>>>> 0da0208041dd2b030bfee8aad1fea9e9c2e51f52
import './App.css';
import { FirebaseAuthProvider } from './contexts';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleListing from "./pages/SingleListing";

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
                        <Route path="/new-listing" element={<ListingForm />} />
                        <Route path="/bulk-listing/:category" element={<BulkListing />} />
                        <Route path="/single-listing/:category" element={<SingleListing />} />
                        <Route path="/not-found" element={ <NotFound />} />
                        <Route path="/sign-up" element={ <SignUp />} />
                        <Route path="/login" element={ <SignIn />} />
                        <Route path="/view-item/:id" element={ <ItemView />} />
                        <Route path="/search/*" element={ <Search />} />
                        <Route path="/purchase-history" element={ <PurchaseHistory /> } />
                        <Route path="/*" element={ <NotFound />} />
                    </Routes>
                </Router>
                </div>
            </FirebaseAuthProvider>
        </div>
  );
}

export default App;
