import React, { useState } from "react";
import { createTextInput } from "./util"

export const ElectronicsPropertiesForm = ({ onChange: onSet }) => {

    const [condition, setCondition] = useState("");
    const [model, setModel] = useState("");

    const inputs = [
        {label: "Model", name: "model", setter: setModel}
    ];
    return (
        <div>
            <hr />
            <div>{inputs.map(e => createTextInput(e.label, e.name, e.setter))}</div>
            <div>
                <label><b>Condition:</b></label>
                <input type="radio" name="condition" className="inputCheckbox" id="condition" value="new" onChange={event => { setCondition(event.target.value);}} />
                <label >New</label>
                <input type="radio" name="condition" className="inputCheckbox" id="condition" value="used" onChange={event => { setCondition(event.target.value);}}/>
                <label >Used</label>
            </div>
            <div><button className="submit-button" type="button" onClick={() => onSet({ model, condition })}>Save</button></div>
        </div>
    )
}