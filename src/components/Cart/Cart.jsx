import React, { useEffect, useState } from 'react';
import { useFirebaseAuth } from '../../hooks/';
import ListingPreview from '../ListingPreview/ListingPreview';
import getListings from "./../../services/firebase/listings/getListings";
import "./Cart.css";
import {Card, Row, Button, Col, Stack} from "react-bootstrap";
import { sendNotification } from '../../services/firebase/users/notifications';
import { emptyCart } from '../../services/firebase/users/user';

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    const { cart, id, notifications } = useFirebaseAuth();
    
    useEffect(() => {
        const fetchListings = async () => {
            if (cart !== undefined) {
                const listings = await getListings(cart);
                setCartItems(listings);
            }
        };
        return fetchListings;
    }, [cart]);

    const checkout = async () => {
        await sendNotification(notifications, id, "Item has been sucessfully purchased! It's on its way.");
<<<<<<< HEAD
        /*Promise.all(cartItems.map(item => await sendNotification(notifications, item.seller, "Item has been sold!"))); */
        emptyCart(id);
=======
        Promise.all(cartItems.map(async (item) => await sendNotification(notifications, item.seller, "Item has been sold!"))); 
>>>>>>> c8fd404e2385ed1bd6ca444e03256aa09bae5c13
    }
    
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "usd",
      });

    return (
       <Stack className='w-75 mt-5 mx-auto align-items-start' gap={3} direction='horizontal'>
           <Col sm={7}>
           {cartItems.map(item => <ListingPreview key={item.toString()} item={item} />)}
           </Col>
           <Col sm={3}>
                <Card>
                    <Card.Header>
                        <Card.Title>Checkout items</Card.Title>
                        
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>Total: {formatter.format(cartItems.reduce((pre, cur) => pre + cur.price, 0))}</Card.Text>
                        <Button onClick={checkout}>Checkout</Button>
                    </Card.Body>
                </Card>
           </Col>
       </Stack>    
    );
}


export default Cart;