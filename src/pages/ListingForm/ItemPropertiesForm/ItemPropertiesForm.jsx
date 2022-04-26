import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './ItemPropertiesForm.css';

import { BookPropertiesForm, ClothingPropertiesForm, ElectronicsPropertiesForm, FurniturePropertiesForm, SportsGearPropertiesForm } from './Forms';

const ItemPropertiesForm = ({ handleCategoryChange, register } ) => {

    const [propertiesForm,setPropertiesForm] = useState(<></>); 

    const choseCategoryForm = (category) => {
        if (category === "books") {
            setPropertiesForm(<BookPropertiesForm register={register} />);
        } else if (category === "clothing") {
            setPropertiesForm(<ClothingPropertiesForm register={register} />);
        } else if (category === "furniture") {
            setPropertiesForm(<FurniturePropertiesForm register={register} />)
        } else if (category === "electronics") {
            setPropertiesForm(<ElectronicsPropertiesForm register={register}/>)
        } else if (category === "sports-gear") {
            setPropertiesForm(<SportsGearPropertiesForm register={register} />)
        }

        handleCategoryChange(category);
    };

    return (
        <>
            <Form.Group className="mb-3 mx-5" controlId="categories">
                <Form.Label>Categories</Form.Label>
                <Form.Select onChange={(e) => choseCategoryForm(e.target.value)}>
                    <option>Choose category</option>
                    <option value="books">Books</option>
                    <option value="clothing">Clothing</option>
                    <option value="furniture">Furniture</option>
                    <option value="electronics">Electronics</option>
                    <option value="sports-gear">Sports Gear</option>
                </Form.Select>
            </Form.Group>
            {propertiesForm}
        </>
        
    );
};

export default ItemPropertiesForm;