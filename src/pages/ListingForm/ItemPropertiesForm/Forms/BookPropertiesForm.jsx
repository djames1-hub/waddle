import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { createTextInput } from "./util";

export const BookPropertiesForm = ({ register }) => {
    

    return (
        <>
            <Form.Group className="mb-3 mx-5 mt-5" controlId='authorInput'>
                <Form.Label>Author</Form.Label>
                <Form.Control type='text' placeholder="Enter author's name" {...register("itemData.props.author")}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-5" controlId='editionInput'>
                <Form.Label>Edition</Form.Label>
                <Form.Control type='text' placeholder='Enter edition' {...register("itemData.props.edition")}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-5" controlId='isbnInput'>
                <Form.Label>ISBN</Form.Label>
                <Form.Control type='text' placeholder='Enter ISBN' {...register("itemData.props.isbn")}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-5" controlId='condition'>
                <Form.Label>Condition</Form.Label>
                <Form.Select {...register("itemData.props.condition")}>
                    <option>Choose book condition</option>
                    <option value='new'>As new</option>
                    <option value='fine'>Fine</option>
                    <option value='fair'>Fair</option>
                    <option value='poor'>Poor</option>
                </Form.Select>
            </Form.Group>
        </>
        
    );
}