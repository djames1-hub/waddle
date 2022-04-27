import React from "react";
import Form from 'react-bootstrap/Form';

const ItemInfoForm = ({ itemOptions, formGroups, register }) => {
    return (
        <>
            <Form.Group className="mb-3" controlId="listingTitle">
                <Form.Label>Listing title</Form.Label>
                <Form.Control type="text" placeholder="Enter listing title" {...register("listingData.listingTitle")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="priceControl">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" {...register("listingData.price")} />
            </Form.Group>
            {formGroups.map(({ label, type, controlId, placeholder, value }) => (
                <Form.Group key={label + placeholder + value} className="mb-3" controlId={controlId}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control type={type} placeholder={placeholder} {...register(`itemData.${value}`)} />
                </Form.Group>
            ))}
            {itemOptions.map(({ label, controlId, selectLabel, options, key }) => (
                
                <Form.Group key={controlId + label} className="me-4 mb-3" controlId={controlId}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Select {...register(`itemData.${key}`)}>
                        <option value="">{selectLabel}</option>
                        {Object.entries(options).map(([key, value]) => (
                            <option key={key + value} value={value}>{key}</option>
                        ))}
                    </Form.Select>
                </Form.Group> 
            ))}
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} {...register("listingData.description")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="photo">
                <Form.Label>Add Photo</Form.Label>
                <Form.Control type="file" {...register("listingData.photo")} />
            </Form.Group>
        </>
    );
};

export default ItemInfoForm;