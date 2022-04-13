import React, { useState } from 'react';
import './ItemPropertiesForm.css';

import { BookPropertiesForm, ClothingPropertiesForm, ElectronicsPropertiesForm, FurniturePropertiesForm, SportsGearPropertiesForm } from './Forms';

const ItemPropertiesForm = ({ onChange} ) => {
    const [propertiesForm,setPropertiesForm] = useState(); 

    const boxCategories = ["books", "clothing", "furniture", "electronics", "sports gear"];

    const choseCategoryForm = (category) => {
        if (category === "books") {
            setPropertiesForm(<BookPropertiesForm key={"books"} onChange={onChange}/>);
        } else if (category === "clothing") {
            setPropertiesForm(<ClothingPropertiesForm key={"clothing"} onChange={onChange}/>);
        } else if (category === "furniture") {
            setPropertiesForm(<FurniturePropertiesForm key={"furniture"} onChange={onChange}/>)
        } else if (category === "electronics") {
            setPropertiesForm(<ElectronicsPropertiesForm key={"electronics"} onChange={onChange}/>)
        } else if (category === "sports gear") {
            setPropertiesForm(<SportsGearPropertiesForm key={"sports gear"} onChange={onChange}/>)
        }
    }

    const radios = boxCategories.map(category => (
        <div>
            <input type="radio" name="category" className="inputCheckbox" id={category} value={category} onChange={() => choseCategoryForm(category)}/>
            <label >{category} </label>
        </div>
    ));

    return [...radios, propertiesForm];
};

export default ItemPropertiesForm;