import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFirebaseAuth } from "./../../hooks";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import "./ItemView.css";
import {
  addItemToCart,
  addItemToWishlist,
  getListing,
} from "../../services/firebase/listings";
import Comments from "../../components/Comments/Comments";

export const ItemView = () => {
  const { id: uid, cart, wishlist } = useFirebaseAuth();

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
      setProperties(listing.item.props);
    };
    fetchData();
  }, []);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
  });

  const handleAddItemToCart = async () => {
    const error = await addItemToCart(cart, uid, id);
  };

  const handleAddItemToWishlist = async () => {
    const error = await addItemToWishlist(wishlist, uid, id);
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
                <Card.Title>{itemName}</Card.Title>

                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Price: {formatter.format(price)} <br />
                    <Button onClick={handleAddItemToCart}>Add to Cart</Button>
                    <Button onClick={handleAddItemToWishlist}>
                      Add to Wishlist
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>{description}</ListGroup.Item>
                  {Object.entries(properties).map((entry) => (
                    <ListGroup.Item
                      key={entry.toString()}
                    >{`${entry[0]}: ${entry[1]}`}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
      <Comments></Comments>
    </div>
  );
};
