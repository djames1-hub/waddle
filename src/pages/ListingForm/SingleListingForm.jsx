import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import ItemPropertiesForm from './ItemPropertiesForm';

const SingleListingForm = ({ handleCategoryChange, register, handleSubmit, submitListing }) => {
    return (
       <>
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
       </>
    );
}

export default SingleListingForm;