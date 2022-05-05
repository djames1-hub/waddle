import React, { useEffect, useState } from "react";
import Stack from "react-bootstrap/Stack";
import {Card, Row, Button, Col, Image} from "react-bootstrap";

import { useFirebaseAuth } from "./../../hooks";
import getListings from "../../services/firebase/listings/getListings";
import ListingPreview from "../../components/ListingPreview/ListingPreview";
import { emptyCart } from "../../services/firebase/users/user";
import { sendNotification } from "../../services/firebase/users/notifications";
import { getUser } from "../../services/firebase/users";
import { addItemsToPurchaseHistory } from "../../services/firebase/listings";


const Checkout = () => {

    const [shippingAddress, setShippingAddress] = useState({
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: ""
    });
    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    const { street, city, state, zipCode, country } = shippingAddress;

    const { address, cart, id, email, firstName, purchaseHistory } = useFirebaseAuth(); 

    useEffect(() => {
        if (address) {
            setShippingAddress(address);
        }     
    }, [address]);
    useEffect(() => {
        
        const fetchCartItems = async () => {
            if (cart !== undefined && cart.length > 0) {
                const listings = await getListings(cart);
                console.log(listings);
                setCartItems(listings);
                setSubTotal(listings.reduce((pre, cur) => pre + parseFloat(cur.price), 0));
            }
        };
        fetchCartItems();
    }, [cart]);

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "usd",
    });

    const handleCheckout = async () => {
        if (cartItems.length > 0) {
            sendNotification(email, "buyer", firstName);
            cartItems.forEach(async item => {
                const { email, firstName } = await getUser(item.seller);
                sendNotification(email, "seller", firstName);
            });
            const response = await addItemsToPurchaseHistory(purchaseHistory, id, cartItems.map(({ listingId }) => listingId));

            if (response.error) {
                console.log(response.error);
            }
            emptyCart(id);
            window.location.href = `/confirmation/${response.purchaseId}`;
        }
    }

    return(
        <Card>
            <Card.Header>

            </Card.Header>
            <Card.Body>
                <Stack direction="horizontal" gap={5} className="align-items-start">
                    <Col sm={6}>
                        <Stack gap={3}>
                            <Stack direction="horizontal" gap={5} className="border-bottom">
                                <Card.Text><strong>Shipping address: </strong></Card.Text>
                                <Stack>
                                    <Card.Text className="mb-0">{street}</Card.Text>
                                    <Card.Text className="mb-0">{`${city}, ${state} ${zipCode}`}</Card.Text>
                                    <Card.Text className="mb-0">{country}</Card.Text>
                                </Stack>
                            </Stack>
                            <Stack direction="horizontal" gap={5} className="border-bottom">
                                <Card.Text><strong>Payment: </strong></Card.Text>
                                <Stack gap={0}>
                                    <Card.Text className="mb-0">Visa: ####-###-####</Card.Text>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Col sm={10}>{cartItems.map(item => <ListingPreview key={item.listingId} item={item} />)}
                                </Col>
                            </Stack>
                        </Stack>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Header>
                                <Card.Text>Total</Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <Stack>
                                    <Card.Text>{`Subtotal: ${formatter.format(subTotal)}`}</Card.Text>
                                    <Card.Text></Card.Text>
                                </Stack>
                                <Button onClick={handleCheckout}>Checkout</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Stack>
            </Card.Body>
        </Card>
    );
}

export default Checkout;