import React from 'react';

import { signOutUser } from './../../services/firebase/users';
import "./Settings.css"

const Settings = () => {


    return (
        <div className="m-5">
            <input type="button" className="log-out-button" value="Log Out" onClick={() => signOutUser()}></input>
        </div>
    )
}

export default Settings