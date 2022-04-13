import React, { useState } from 'react';
import "./Auth.css";

import { createUser } from "./../../services/firebase/users";

function SignUp(){
    // create hooks to change form inputs
    const [error, setError] = useState("");

    // create hooks to monitor input changes
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const validateFields = (email, password) => {
        if(email !== "" && password !== "" && username != ""){
            return "";
        }else{
            return "Please fill in all fields";
        }
    }

    const createAccount = async () => {
        // check if user inputs meet the minimum requirements
        let validate = validateFields(email, password);
        if(validate === ""){
            createUser("name", username, email, password).then((res)=>{
                // Account created successfully
                alert("Account Created Successfully!");
                window.location.href ="/";

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
        <input name="password" type="password" className="text-input" placeholder="Password" onChange={event => setPassword(event.target.value)} />
        <input name="submit" className="sub-button" type="button" value="Submit" onClick={() => createAccount()}/>
        <h3 id="error-label" >{error}</h3>
        <a href="/login" className="switch-page">Login</a>
    </div>
}

export default SignUp;
