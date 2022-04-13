import React, { useState } from 'react';
import "./Auth.css";
import { signIn } from "./../../services/firebase/users";

function SignIn(){

    // create hooks to change form inputs
    const [error, setError] = useState("");

    // create hooks to monitor input changes
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateFields = (email, password) => {
        if(email !== "" && password !== ""){
            return "";
        }else{
            return "Please fill in all fields";
        }
    }

    const signInUser = async () => {
        // check if user inputs meet the minimum requirements
        let validate = validateFields(email, password);
        if(validate === ""){
            signIn(email, password).then((res)=>{
                // Account logged in successfully
                window.location.href ="/";

            }).catch((error)=>{
                // Error with account creation, display error
                console.log(error);
                setError(error);
                alert (error);
            })
        }else{
            setError(validate);

        }
    }

    return <div className="container">
        <h1 id="title">Login</h1>
        <input name="email" type="text" className="text-input" placeholder="Email" onChange={event => setEmail(event.target.value)} />
        <input name="password" type="password" className="text-input" placeholder="Password" onChange={event => setPassword(event.target.value)} />
        <input name="submit" className="sub-button" type="button" value="Submit" onClick={() => signInUser()}/>
        <h3 id="error-label" >{error}</h3>
        <a href="/sign-up" className="switch-page">Sign Up</a>
    </div>
}

export default SignIn;
