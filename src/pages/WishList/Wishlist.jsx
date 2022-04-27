import React, { useEffect, useState } from "react";
import { useFirebaseAuth } from "../../hooks/";
import getListings from "./../../services/firebase/listings/getListings";

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const { wishlist } = useFirebaseAuth();

    useEffect(() => {
        const fetchListings = async() => {
            const listings = await getListings(wishlist);
            setWishlistItems(listings);
        };
        return fetchListings;
    }, []);

    return (
        { wishlistItems }
    );
};

export default Wishlist;