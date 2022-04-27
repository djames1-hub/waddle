import React, { useEffect, useState } from 'react';
import { useFirebaseAuth } from '../../hooks/';
import ListingPreview from '../ListingPreview/ListingPreview';
import getListings from "./../../services/firebase/listings/getListings";
import "./Cart.css";

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    const { cart } = useFirebaseAuth();
    
    useEffect(() => {
        const fetchListings = async () => {
            if (cart) {
                const listings = await getListings(cart);
                setCartItems(listings);
            }
        };
        return fetchListings;
    }, [cart]);

    return (
        <>
            {cartItems.map(item => <ListingPreview key={item.toString()} item={item} />)}
        </>
    );
}


export default Cart