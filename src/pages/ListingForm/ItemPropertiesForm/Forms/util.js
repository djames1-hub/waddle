import React from "react";
export const createTextInput = (labelTitle, name, setter) => {
    return (
    <div className='form-input' key={name}>
        <label><b>{labelTitle}</b></label>
        <input type="text" name={name} placeholder={labelTitle} className='inputText' onChange={e => setter(e.target.value)}></input>
    </div>
    );
}