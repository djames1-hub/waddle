import React, { useEffect, useState } from "react";

import { Card, Stack, Figure } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { useFirebaseAuth } from "../../hooks";
import getListings from "../../services/firebase/listings/getListings";

import './Confirmation.css';

const Confirmation = () => {

    const { id: purchaseId } = useParams();
    const [shippingAddress, setShippingAddress] = useState({
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: ""
    });
    const { purchaseHistory, address } = useFirebaseAuth();

    const { street, city, state, zipCode, country } = shippingAddress;

    useEffect(() => {
        if (address) {
            setShippingAddress(address);
        }     
    }, [address]);

    const [purchasedItems, setPurchasedItems] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            if (purchaseHistory) {
                const listings = await getListings(purchaseHistory[purchaseId]);
                setPurchasedItems(listings);
            }
        }

        fetchListings();
    }, [purchaseHistory]);
    return (
        <Card className="w-50 mx-auto">
            <Card.Header><strong>Thank you for shopping at Waddle</strong></Card.Header>
            <Card.Body>
                <Stack direction="horizontal" gap={5} className="border-bottom mb-3">
                    <Card.Text><strong>Shipping address: </strong></Card.Text>
                    <Stack>
                        <Card.Text className="mb-0">{street}</Card.Text>
                        <Card.Text className="mb-0">{`${city}, ${state} ${zipCode}`}</Card.Text>
                        <Card.Text className="mb-0">{country}</Card.Text>
                    </Stack>
                    <Stack className="mb-3">
                        <Card.Text>Delivery Time: 3 days</Card.Text>
                        <Card.Text>PurchaseToken: <strong className="border rounded p-1">{purchaseId}</strong></Card.Text>
                    </Stack>
                </Stack>
                <Stack direction="horizontal" gap={3} className="justify-content-center">
                    {purchasedItems.map(item => (
                        <Figure key={item.listingId} className="rounded-3 border border-dark p-2 image-size">
                            <Figure.Image src={item.photo[0]} className='i-size' />
                            <Figure.Caption>{item.listingTitle}</Figure.Caption>
                        </Figure>
                    ))}
                </Stack>
            <Stack className="align-items-center">
                <Card.Text><strong>If you need support contact customer support at 788-900-1010</strong></Card.Text>
            </Stack>
            </Card.Body>
        </Card>
    );
};

export default Confirmation;