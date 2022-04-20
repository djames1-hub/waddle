import React from "react";
import Form from "react-bootstrap/Form";

export const FurniturePropertiesForm = ({ register }) => {

    
    return (
        <>
            <Form.Group className="mb-3 mx-5 mt-5" controlId="length">
                <Form.Label>Length</Form.Label>
                <Form.Control type="number" placeholder="Enter length" {...register("itemData.props.length")} />
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-5" controlId="width">
                <Form.Label>Width</Form.Label>
                <Form.Control type="number" placeholder="Enter width" {...register("itemData.props.width")} />
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-5" controlId="height">
                <Form.Label>Height</Form.Label>
                <Form.Control type="number" placeholder="Enter height" {...register("itemData.props.height")} />
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-5" controlId="condition">
                <Form.Label>Condition</Form.Label>
                <Form.Select {...register("itemData.props.condition")}>
                    <option>Choose a condition</option>
                    <option value="new">New Condition</option>
                    <option value="used">Used Condition</option>
                </Form.Select>
            </Form.Group>
        </>
    );
}