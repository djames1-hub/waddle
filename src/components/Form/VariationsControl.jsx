import React from 'react';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Stack from 'react-bootstrap/Stack';

const VariationsControl = ({ variationOptions, register, index }) => {
    return  (
        <Stack direction='horizontal' className='align-items-end border rounded-3 p-3 mb-2'>
            {variationOptions.map(({ label, controlId, selectLabel, options, key }) => (
                
                    <Form.Group key={controlId + label} className="me-4" controlId={controlId}>
                        <Form.Label>{label}</Form.Label>
                        <Form.Select {...register(`variations.${index}.${key}`)}>
                            <option value="">{selectLabel}</option>
                            {Object.entries(options).map(([key, value]) => (
                                <option key={key + value} value={value}>{key}</option>
                            ))}
                        </Form.Select>
                    </Form.Group> 
            ))}
            <Form.Group className="me-4" controlId='quantityControl' >
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" {...register(`variations.${index}.quantity`)}></Form.Control>
            </Form.Group>
                <CloseButton />
            </Stack>
    );
}

export default VariationsControl;