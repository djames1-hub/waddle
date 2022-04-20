import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';


import { createListing } from './../../services/firebase/listings';
// import './ListingForm.css';
import ItemPropertiesForm from './ItemPropertiesForm';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';



const ListingForm = () => {

    const { id, address} = useFirebaseAuth();

    const { register, handleSubmit } = useForm();

    const submitListing = ({ listingData, itemData }) => {
  
        let listing = {
            listingId: uuidv4(),
            seller: id,
            buyer: "",
            dateBought: new Timestamp.fromDate(new Date()),
            quantity: 1,
            isPurchased: false,
            shippingCost: 0.0,
            item: { itemId: uuidv4(), itemName: itemData.itemName, props: itemData.props },
            shippingFrom: {...address },
            ...listingData
        };
        
        createListing(listing);
        
    }

    const [category, setCategory] = useState("");

    const handleCategoryChange = (category) => {
        setCategory(category);
    }

    return (
        <Form onSubmit={handleSubmit(submitListing)} className="w-50 mx-auto">
            <Form.Group className="mb-3 mx-5 mt-5" controlId="listingTitle">
                <Form.Label>Listing title</Form.Label>
                <Form.Control type="text" placeholder="Enter listing title" {...register("listingData.listingTitle")} />
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="itemName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control type="text" placeholder="Enter item name" {...register("itemData.itemName")}/>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" {...register("listingData.price")} />
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} {...register("listingData.description")}/>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="photo">
                <Form.Label>Add Photo</Form.Label>
                <Form.Control type="file" {...register("listingData.photo")} />
            </Form.Group>
            <ItemPropertiesForm onCategoryChange={handleCategoryChange} register={register} />
            <Button className='mx-5' type='submit'>Submit</Button>
        </Form>
    )
}

export default ListingForm;
