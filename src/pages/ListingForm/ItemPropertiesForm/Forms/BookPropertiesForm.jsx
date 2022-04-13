import React, { useState } from 'react';

import { createTextInput } from "./util";

export const BookPropertiesForm = ({ onChange: onSet }) => {
    

    const [isbn, setISBN] = useState("");
    const [author, setAuthor] = useState("");
    const [edition, setEdition] = useState("");
    const [condition, setCondition] = useState("");
    const [isDigital, setIsDigital] = useState(null);

    const inputs = [
        {label: "ISBN", name: "isbn", setter: setISBN},
        {label: "Author", name: " author", setter: setAuthor},
        {label: "Edition", name: "edition", setter: setEdition},
    ];

    return (
        <div>
            <hr />
            <div>{inputs.map(e => createTextInput(e.label, e.name, e.setter))}</div>
            <div>
                <label><b>Condition:</b></label>
                <input type="radio" name="condition" className="inputCheckbox" id="condition" value="new" onChange={event => { 
                    setCondition(event.target.value);
       
                    }}
                />
                <label >New</label>
                <input type="radio" name="condition" className="inputCheckbox" id="condition" value="used" onChange={event => {
                    console.log(condition); 
                    setCondition(event.target.value);

                    }}/>
                <label >Used</label>
            </div>
            <div>
                <label><b>Is the book Digital?:</b></label>
                <input type="radio" name="digital" className="inputCheckbox" id="digital" value="yes" onChange={event => { 
                    setIsDigital(event.target.value);
                    }}/>
                <label >yes</label>
                <input type="radio" name="digital" className="inputCheckbox" id="digital" value="no" onChange={event => { 
                    setIsDigital(event.target.value);
                    
                    }}/>
                <label>no</label>
            </div>
            <div><button className="submit-button" type="button" onClick={() => onSet({ isbn, author, edition, condition, isDigital })}>Save</button></div>
        </div>
    );
}