import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import "./ItemView.css";
import { getListing } from "../../services/firebase/listings";

export const ItemView = () => {
    
    const [title, setTitle] = useState("");
    const [itemName, setItemName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [properties, setProperties] = useState({});

    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            console.log(id);
            let listing = await getListing(id);
            console.log(listing);
            let item = listing.item;
            setTitle(listing.listingTitle);
            setDescription(listing.description);
            setImage(listing.photo[0]);
            setPrice(listing.price);
            setItemName(listing.item.itemName);
            setProperties(listing.item.props)
        }
        fetchData();
    }, []);

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    });
    return (
        <Card className="w-25">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{itemName}</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={image} />
            <Card.Text>Price: {formatter.format(price)}</Card.Text>
            { Object.entries(properties).map(entry => (<Card.Text key={entry.toString()}>{`${entry[0]}: ${entry[1]}`}</Card.Text>))}
        </Card>
    );
};