import React, { useState } from "react";

export const ClothingPropertiesForm = ({ onChange: onSet }) => {

    const [size, setSize] = useState("");
    const [condition, setCondition] = useState("");


    return (
        <div>
            <hr />
            <div>
                <label><b>Size:</b></label>
                <input type="radio" name="small" className="inputCheckbox" id="small" value="small" onChange={event => { setSize(event.target.value);}}/>
                <label>Small</label>
                <input type="radio" name="medium" className="inputCheckbox" id="medium" value="medium" onChange={event => { setSize(event.target.value);}}/>
                <label>Medium</label>
                <input type="radio" name="large" className="inputCheckbox" id="large" value="large" onChange={event => { setSize(event.target.value);}}/>
                <label>Large</label>
                <input type="radio" name="xl" className="inputCheckbox" id="xl" value="xl" onChange={event => { setSize(event.target.value);}}/>
                <label>Extra Large</label>
            </div>
            <div>
                <label><b>Condition:</b></label>
                <input type="radio" name="condition" className="inputCheckbox" id="condition" value="new" onChange={event => { setCondition(event.target.value);}}/>
                <label >New</label>
                <input type="radio" name="condition" className="inputCheckbox" id="condition" value="used" onChange={event => { setCondition(event.target.value);}}/>
                <label >Used</label>
            </div> 
            <div><button className="submit-button" type="button" onClick={() => onSet({ size, condition })}>Save</button></div>
        </div>
    );
}