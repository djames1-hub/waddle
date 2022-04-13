import React, { useState } from "react";
import { createTextInput } from "./util";

export const FurniturePropertiesForm = ({ onChange: onSet}) => {

    const [width, setWidth] = useState("");
    const [length, setLength] = useState("");
    const [height, setHeight] = useState("");
    const [condition, setCondition ] = useState("");

    const inputs = [
        {label: "Width", name: "width", setter: setWidth},
        {label: "Length", name: "length", setter: setLength},
        {label: "Height", name: "height", setter: setHeight}
    ];
    return (
        <div>
            <hr />
            <div>{inputs.map(e => createTextInput(e.label, e.name, e.setter))}</div>
            <div>
                <label><b>Condition:</b></label>
                <input type="radio" name="condition" className="inputCheckbox" id="condition" value="new"  onChange={event => { setCondition(event.target.value);}}/>
                <label >New</label>
                <input type="radio" name="condition" className="inputCheckbox" id="condition" value="used"  onChange={event => { setCondition(event.target.value);}}/>
                <label >Used</label>
            </div> 
        
        <div><button className="submit-button" type="button" onClick={() => onSet({ width, length, height, condition })}>Save</button></div>
        </div>
    );
}