import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Cart, NotFound, Header } from './components';
import { Home, Wishlist, ListingForm, SignUp, SignIn, Search, Listing, BulkListing, PurchaseHistory, SingleListing, SearchCategory } from './pages';
import './App.css';
import { FirebaseAuthProvider } from './contexts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <FirebaseAuthProvider>
                <Header />
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
                        <Route path="/view-item/:id" element={ <Listing />} />
                        <Route path="/search/*" element={ <Search />} />
                        <Route path="/search/category/:category" element={ <SearchCategory />} />
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
