import React from 'react';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Stack from 'react-bootstrap/Stack';

const VariationsControl = ({ variationOptions, register, index }) => {
    return  (
        <Stack direction='horizontal' className='align-items-end border-bottom border-2 p-3 mb-2'>
            {variationOptions.map(({ label, controlId, selectLabel, options, key, isColor }) => (

                   < >
                    { !isColor ? <Form.Group key={controlId + label + options.toString()} className="me-4" controlId={controlId}>
                        <Form.Label>{label}</Form.Label>
                        <Form.Select {...register(`itemData.variations.${index}.${key}`, { required: true })}>
                            <option value="">{selectLabel}</option>
                            {Object.entries(options).map(([key, value]) => (
                                <option key={key + value + index} value={value}>{key}</option>
                            ))}
                        </Form.Select>
                    </Form.Group> : <Form.Group key={controlId + label} className="me-4" {...register(`itemData.variations.${index}.${key}`, { required: true })} controlId={controlId}>
                        <Form.Label>Choose color</Form.Label>
                        <Form.Control type="color"></Form.Control>
                    </Form.Group> }
                   </>
            ))}
            <Form.Group className="me-4" controlId='quantityControl' >
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" {...register(`itemData.variations.${index}.quantity`, { required: true })}></Form.Control>
            </Form.Group>
                
            </Stack>
    );
}

export default VariationsControl;