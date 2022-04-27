import React, { useState } from "react";
import { Button, Form, ButtonGroup, ButtonToolbar, Stack, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import { LoadingScreen } from "../../components";

const ListingForm = () => {
  const { id, address } = useFirebaseAuth();
  const [form, setForm] = useState(<LoadingScreen />);
  const [listingType, setListingType] = useState("");
  const [category, setCategory] = useState("");
  const [listingInfo, setListingInfo] = useState({});
  const [variations, setVariations] = useState([]);
  const { register, handleSubmit } = useForm();
  const [formIterator, setFormIterator] = useState(0);

  const submit = ({ listingType, category }) => {
    window.location.href = `/${listingType}/${category}`;
  };

  return (
    <>
      <Card className="w-50 mx-auto rounded-0">
        <Card.Header>Listing Type and Category</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3" controlId="listingTypeControl">
              <Form.Label>Choose Listing Type</Form.Label>
              <Form.Select
                {...register("listingType", {
                  required: "Must not be empty",
                })}
              >
                <option value="">Listing Types...</option>
                <option value="single-listing">Single Listing</option>
                <option value="bulk-listing">Bulk Listing</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="categories">
              <Form.Label>Categories</Form.Label>
              <Form.Select {...register("category", {
                required: "Must not be empty"
              })}>
                <option value="">Choose category</option>
                <option value="books">Book</option>
                <option value="clothing">Clothing</option>
                <option value="furniture">Furniture</option>
                <option value="electronics">Electronics</option>
                <option value="sports-gear">Sports Gear</option>
              </Form.Select>
            </Form.Group>
            <ButtonToolbar className="d-flex justify-content-end">
              <ButtonGroup>
                <Button type="submit">Continue</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListingForm;
