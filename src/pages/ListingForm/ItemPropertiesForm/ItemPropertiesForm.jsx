import React, { useState } from 'react';
import './ItemPropertiesForm.css';

import { BookPropertiesForm, ClothingPropertiesForm, ElectronicsPropertiesForm, FurniturePropertiesForm, SportsGearPropertiesForm } from './Forms';

const ItemPropertiesForm = ({ onPropertiesChange, onCategoryChange } ) => {

    const [propertiesForm,setPropertiesForm] = useState(); 

    const itemCategories = ["books", "clothing", "furniture", "electronics", "sports gear"];

    const choseCategoryForm = (category) => {
        if (category === "books") {
            setPropertiesForm(<BookPropertiesForm key={"books"} onChange={onPropertiesChange}/>);
        } else if (category === "clothing") {
            setPropertiesForm(<ClothingPropertiesForm key={"clothing"} onChange={onPropertiesChange}/>);
        } else if (category === "furniture") {
            setPropertiesForm(<FurniturePropertiesForm key={"furniture"} onChange={onPropertiesChange}/>)
        } else if (category === "electronics") {
            setPropertiesForm(<ElectronicsPropertiesForm key={"electronics"} onChange={onPropertiesChange}/>)
        } else if (category === "sports gear") {
            setPropertiesForm(<SportsGearPropertiesForm key={"sports gear"} onChange={onPropertiesChange}/>)
        }

        onCategoryChange(category);
    };

    const radios = itemCategories.map(category => (
        <div>
            <input type="radio" name="category" className="inputCheckbox" id={category} value={category} onChange={(e) => choseCategoryForm(e.target.value)}/>
            <label >{category} </label>
        </div>
    ));

    return [...radios, propertiesForm];
};

export default ItemPropertiesForm;