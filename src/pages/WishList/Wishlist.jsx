import React, { useEffect, useState } from "react";
import { Stack, Card, Col} from 'react-bootstrap';
import { useFirebaseAuth } from "../../hooks/";
import getListings from "./../../services/firebase/listings/getListings";
import ListingPreview from './../../components/ListingPreview'

const Wishlist = () => {
  const [ wishlistItems, setWishlistItems] = useState([]);
  const { wishList } = useFirebaseAuth();

  useEffect(() => {
    const fetchListings = async () => {
      console.log('Wishlist', wishList);
      if (wishList !== undefined && wishList.length !== 0) {
        const listings = await getListings(wishList);
        setWishlistItems(listings);
      }
    };
    fetchListings();
  }, [wishList]);

  return (
    <Stack className='w-75 mt-5 mx-auto align-items-start' gap={3} direction='horizontal'>
           <Col sm={7}>
           {wishlistItems.map(item => <ListingPreview key={item.toString()} item={item} />)}
           </Col>
       </Stack>    
  );
};

export default Wishlist;
