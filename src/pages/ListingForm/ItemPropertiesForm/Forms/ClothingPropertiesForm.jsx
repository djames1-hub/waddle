import React from "react";
import Form  from "react-bootstrap/Form";

export const ClothingPropertiesForm = ({ register }) => {

   

    return (
        <>
            <Form.Group className="mb-3 mx-5 mt-5" controlId="size">
                <Form.Label>Size</Form.Label>
                <Form.Select {...register("itemData.props.size")}>
                    <option>Choose size</option>
                    <option value="xs">Extra Small</option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">Extra Large</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-5" controlId="condition">
                <Form.Label>Condition</Form.Label>
                <Form.Select {...register("itemData.props.condition")}>
                    <option>Choose a condition</option>
                    <option value="nwt">New With Tags (NWT)</option>
                    <option value="euc">Excellent Used Condition (EUC)</option>
                    <option value="guc">Good Used Condition</option>
                    <option value="vuc">Very Used Condition</option>
                    <option value="pre-owned">Pre-owned</option>
                </Form.Select>
            </Form.Group>
        </>
    );
}