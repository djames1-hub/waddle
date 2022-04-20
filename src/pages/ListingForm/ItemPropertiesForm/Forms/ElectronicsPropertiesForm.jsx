import React from "react";
import Form from "react-bootstrap/Form";


export const ElectronicsPropertiesForm = ({ register }) => {

    return (
        <>
            <Form.Group className="mb-3 mx-5 mt-5">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" placeholder="Enter model name" {...register("itemData.props.model")}/>
            </Form.Group>
            <Form.Group>
                <Form.Group className="mb-3 mx-5 mt-5" controlId="condition">
                    <Form.Label>Condition</Form.Label>
                    <Form.Select {...register("itemData.props.condition")}>
                        <option>Choose a condition</option>
                        <option value="new">New</option>
                        <option value="openBox">Open box</option>
                        <option value="used">Used</option>
                        <option value="nw">Not Working</option>
                    </Form.Select>
                </Form.Group>
            </Form.Group>
        </>
    )
}