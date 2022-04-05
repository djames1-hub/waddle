import React, { useState } from 'react';
import "./Auth.css";

import {createUser, getCurrentUser, signIn} from "../../../backend/client/auth";

function Auth(){

    // check if there is a user signed in
    let user = getCurrentUser();

    // create hooks to change form inputs
    const [error, setError] = useState("");

    // create hooks to monitor input changes
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const validateFields = (email, password) => {
        if(email !== "" && password !== ""){
            return "";
        }else{
            return "Please fill in all fields";
        }
    }

    const createAccount = () => {
        // check if user inputs meet the minimum requirements
        let validate = validateFields(email, password);
        if(validate === ""){
            createUser(email, password).then((res)=>{
                // Account created successfully
            }).catch((error)=>{
                // Error with account creation, display error
                console.log(error);
                setError(error);
            })
        }else{
            setError(validate);
        }
        
    }

    return <div className="container">
        <h1 id="title">Create Account</h1>
        <input name="email" type="text" className="text-input" placeholder="Email" onChange={event => setEmail(event.target.value)} />
        <input name="username" type="text" className="text-input" placeholder="Username" onChange={event => setUsername(event.target.value)} />
        <input name="password" type="text" className="text-input" placeholder="Password" onChange={event => setPassword(event.target.value)} />
        <input name="submit" className="submit-button" type="button" value="Submit" onClick={() => createAccount()}/>
        <h3 id="error-label" >{error}</h3>
    </div>
}

export default Auth;