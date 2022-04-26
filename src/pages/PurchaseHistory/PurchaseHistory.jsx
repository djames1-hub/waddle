import React from "react";

import { auth } from '../../services/firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const PurchaseHistory = () =>{

    onAuthStateChanged(auth, async (user) => {
        if(user) {
        }else{
            window.location.href = "/login";
        } 
    });

    return <></>;
}

export default PurchaseHistory;