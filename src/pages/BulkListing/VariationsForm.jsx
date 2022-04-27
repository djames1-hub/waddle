import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import { VariationsControl }from './../../components/Form';



const VariationsForm = ({ variationOptions, register }) => {

    const [variations, setVariations] = useState([]);
    
    const permutations = variationOptions.reduce((pre, cur) => {
        return pre * Object.keys(cur.options).length;
    }, 1);

    const MAX_VARIATIONS = (permutations < 5) ? permutations : 5;

    
    
    const handleAddVariation = () => {
        if (variations.length < MAX_VARIATIONS) {
            const variation = (
            <VariationsControl key={variations.length} variationOptions={variationOptions} register={register} index={variations.length}/>
            );
            setVariations([variation, ...variations]);
        }
        
    }

    return (
        <>   
            <Stack direction='horizontal' className='mb-2 justify-content-between'>
                    <Form.Text>You can have up to 5 Variations per Listing.</Form.Text>
                    <Button size='sm' onClick={handleAddVariation}>Add Variation</Button>  
            </Stack>
            {variations}
        </>
    )
}

export default VariationsForm;