import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFirebaseAuth } from './../../hooks';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import "./ItemView.css";
import { addItemToCart, getListing } from "../../services/firebase/listings";
import Comments from '../../components/Comments/Comments';

export const ItemView = () => {

    const { uid, cart } = useFirebaseAuth();
    
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
            setTitle(listing.listingTitle);
            setDescription(listing.description);
            setImage(listing.photo[0]);
            setPrice(listing.price);
            setItemName(listing.item.itemName);
            setProperties(listing.item.props)
        }
        fetchData();
    }, []);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    });

    const handleAddItemToCart = async () => {
        const error = await addItemToCart(cart, uid, id);
    };

    return (
        <div>
            <Card className="w-30">
                <Container>
                    <Row>
                        <Col>
                            <Card.Img variant="bottom" src={image} />      
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{itemName}</Card.Text>
                            </Card.Body>
                            <Card.Text>Price: {formatter.format(price)}</Card.Text>
                            <Button onClick={handleAddItemToCart}>Add to Cart</Button>
                            <Card.Text>{description}</Card.Text>
                            { Object.entries(properties).map(entry => (<Card.Text key={entry.toString()}>{`${entry[0]}: ${entry[1]}`}</Card.Text>))}
                        </Col>
                    </Row>
                </Container>
            </Card>
            <Comments>

            </Comments>
        </div>
    );
};