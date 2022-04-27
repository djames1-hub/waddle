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
import { useForm } from "react-hook-form";

const Listing= () => {
  const { id: uid, cart, wishList } = useFirebaseAuth();
  const { register, handleSubmit } = useForm();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
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
      let listing = await getListing(id);
      setTitle(listing.listingTitle);
      setDescription(listing.description);
      setImage(listing.photo[0]);
      setPrice(listing.price);
      setItemName(listing.listingTitle);
      setCategory(listing.category);
      const entries = Object.entries(listing.item).filter(([key, val]) => key !== "variations");
      const props = Object.fromEntries(entries);

      setProperties(props);
     
      if (listing.item.variations) {
        setVariations(listing.item.variations);
      } 

    };
    return fetchData;
  }, []);

  const variationOptions = {
    "books": [
        {
            key: "condition",
            label: "Book's Condition",
            controlId: "conditionControl",
            selectLabel: "Choose book condition",
            options: {
                "As new": "new",
                "Fine": "fine",
                "Fair": "fair",
                "Poor": "poor"
            }
        }
    ],
    "clothing": [
        {
            key: "size",
            label: "Clothing's size",
            controlId: "sizeControl",
            selectLabel: "Choose size",
            options: {
                "xs": "Extra Small",
                "s": "Small",
                "m": "Medium",
                "l": "Large",
                "xl": "Extra Large"
            }
        },
        {
            key: "color",
            label: "Clothing's color",
            controlId: "colorControl",
            isColor: true,
            options: {
                "color": "color"
            }
        },
        {
            key: "condition",
            label: "Clothing's condition",
            controlId: "conditionControl",
            selectLabel: "Choose condition",
            options: {
                "nwt": "New With Tags (NWT)",
                "euc": "Excellent Used Condition",
                "guc" : "Good Used Condition",
                "vuc": "Very Used Condition",
                "pre-owned": "Pre-owned" 
            }
        }
    ],
    "furniture": [
        {
            key: "condition",
            label: "Furniture's Conditon",
            controlId: "conditionControl",
            selectLabel: "Choose condition",
            options: {
                "New Condition": "new",
                "Used Condition": "used"
            }
        }
    ],
    "electronics": [
        {
            key: "condition",
            label: "Electronic's Condition",
            controlId: "conditionControl",
            selectLabel: "Choose condition",
            options: {
                "New": "new",
                "Open box": "open-box",
                "Used": "used",
                "Not Working": "nw"
            }
        }
    ],
    "sports-gear": [
        {
            key: "size",
            label: "Sport Gear's size",
            controlId: "sizeControl",
            selectLabel: "Choose size",
            options: {
                "xs":"Extra Small",
                 "s":"Small",
                "m":"Medium",
                "l":"Large",
                "xl":"Extra Large"
            }
        },
        {
            key: "condition",
            label: "Sport Gear's condition",
            controlId: "conditionControl",
            selectLabel: "Choose condition",
            options: {
                "New With Tags (NWT)": "nwt",
                "Excellent Used Condition": "euc",
                "Good Used Condition": "guc",
                "Very Used Condition": "vuc",
                "Pre-owned": "pre-owned"
            }
        }
    ]
}

  const handleFormControl = ([name, options]) => {
    if (name === 'quantity') {
      return (
        <Form.Control type="number" {...register("quantity")}/>
      )
    } else if (name === 'color') {
      return options.map(option => {
        return <Form.Control type="color" value={option} {...register("color")}/>
      })
    } else {

      let opts = variationOptions[category];
      let v = opts.filter(f => f.key === name);
      return (
        <Form.Select {...register(name)}>
          <option value="">{v[0]["selectLabel"]}</option>
        {options.map(option => {
          
          console.log(v);
          return <option key={option} value={option}>{v[0]["options"][option]}</option>
        })}
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
    const error = await addItemToWishlist(wishList, uid, id);
  };

  return (
    <div>
      <Card className="w-30">
        <Container>
          <Row>
            <Col>
              <Card.Img variant="bottom" src={image} />
            </Col>
            <Col><Form onSubmit={handleSubmit}>
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
                    
                      {formGroups}
                   
                  </ListGroup.Item>
                  {Object.entries(properties).map((entry) => (
                    <ListGroup.Item
                      key={entry.toString()}
                    >{`${entry[0]}: ${entry[1]}`}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
              </Form>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

//      <Comments></Comments>


export default Listing;
