import React from 'react';

import { auth } from '../../services/firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { signOutUser } from './../../services/firebase/users';
import "./Settings.css"

const Settings = () => {

    onAuthStateChanged(auth, async (user) => {
        if(user) {
        }else{
            window.location.href = "/login";
        } 
    });

    return (
        <div className="m-5">
            <input type="button" className="log-out-button" value="Log Out" onClick={() => signOutUser()}></input>
        </div>
    )
}

export default Settings