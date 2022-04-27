import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFirebaseAuth } from "../../hooks";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import "./Listing.css";
import {
  addItemToCart,
  addItemToWishlist,
  getListing,
} from "../../services/firebase/listings";
import Comments from "../../components/Comments/Comments";

const Listing= () => {
  const { id: uid, cart, wishlist } = useFirebaseAuth();

  const [title, setTitle] = useState("");
  const [itemName, setItemName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [properties, setProperties] = useState({});
  const [variations, setVariations] = useState([]); 
  const [formGroups, setFormGroups] = useState(<></>);

  const { id } = useParams();

  
  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      let listing = await getListing(id);
      setTitle(listing.listingTitle);
      setDescription(listing.description);
      setImage(listing.photo[0]);
      setPrice(listing.price);
      setItemName(listing.listingTitle);

      const entries = Object.entries(listing.item).filter(([key, val]) => key !== "variations");
      const props = Object.fromEntries(entries);

      setProperties(props);
     
      if (listing.item.variations) {
        setVariations(listing.item.variations);
      } 

    };
    return fetchData;
  }, []);

  const handleFormControl = ([name, options]) => {
    if (name === 'quantity') {
      return (
        <Form.Control type="number" />
      )
    } else if (name === 'color') {
      return options.map(option => {
        return <Form.Control type="color" value={option} />
      })
    } else {
      return (
        <Form.Select>
        {options.map(option => <option value={option}>{option}</option>)}
      </Form.Select>
      );
    }
  }

  useEffect(() => {
    if (variations.length > 0) {
      let sets = [];

      const keys = Object.keys(variations[0]);
      keys.sort();
      keys.forEach((key) => {
          let s = new Set();
          console.log(key);
          variations.forEach(v => {
            s.add(v[key]);
          });
          sets.push(s);
      });

      let entries = [];
      
      for (let i = 0; i < keys.length; i++) {
        entries.push([ keys[i], [ ...sets[i] ] ])
      }

      const groups = entries.map(e => {
        return (
          <Form.Group>
            <Form.Label>{e[0]}</Form.Label>
            {handleFormControl(e)}
          </Form.Group>
        );
      });
    
      setFormGroups(groups);
    }

  
  }, [variations]);

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
                  <ListGroup.Item>
                    <Form>
                      {formGroups}
                    </Form>
                  </ListGroup.Item>
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

export default Listing;
