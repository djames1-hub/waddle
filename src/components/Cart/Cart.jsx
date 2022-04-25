import React, { useEffect, useState } from 'react';
import { useFirebaseAuth } from '../../hooks/';
import getListings from "./../../services/firebase/listings/getListings";
import "./Cart.css";

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    const { cart } = useFirebaseAuth();
    
    useEffect(() => {
        const fetchListings = async () => {
            const listings = await getListings(cart);
            setCartItems(listings);
        };
        return fetchListings;
    }, []);

    return (
        <>
            {cartItems.map(items => true)}
        </>
    );
}


export default Cart