import React, { useEffect, useState } from 'react';
import { Card, Nav, Button, Form, ButtonGroup, Stack, ButtonToolbar }  from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { createListing } from './../../services/firebase/listings';

import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';
import { LoadingScreen } from '../../components';

const ListingForm = () => {
    
    const { id, address } = useFirebaseAuth();
    const [form, setForm] = useState(<LoadingScreen />);
    const [listingType, setListingType] = useState("");
    const [category, setCategory] = useState("");
    const [listingInfo, setListingInfo] = useState({});
    const [variations, setVariations] = useState([]);
    const { register, handleSubmit } = useForm();
    const [formIterator, setFormIterator] = useState(0);

    

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
            category,
            ...listingData
        };
        
        createListing(listing);
        
    };

    const submit = ({ listingType, category }) => {
        window.location.href = `/${listingType}/${category}`;
    }


    return (
        <>
            <Form className='w-50 mx-auto border' onSubmit={handleSubmit(submit)}>     
                <Form.Group className="mb-3 mx-5 mt-3" controlId='listingTypeControl'>
                    <Form.Label>Choose Listing Type</Form.Label>
                    <Form.Select { ...register("listingType", {
                        required: "Must not be empty"
                    }) }>
                        <option value="">Listing Types...</option>
                        <option value="single-listing">Single Listing</option>
                        <option value="bulk-listing">Bulk Listing</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 mx-5 mt-3" controlId="categories">
                    <Form.Label>Categories</Form.Label>
                    <Form.Select {...register("category")}>
                        <option>Choose category</option>
                        <option value="books">Book</option>
                        <option value="clothing">Clothing</option>
                        <option value="furniture">Furniture</option>
                        <option value="electronics">Electronics</option>
                        <option value="sports-gear">Sports Gear</option>
                    </Form.Select>
                </Form.Group>   
                <Button type="submit">Continue</Button>
            </Form> 
        </>
    );
    
}

export default ListingForm;
