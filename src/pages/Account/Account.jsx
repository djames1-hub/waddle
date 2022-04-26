import React from "react";

import { auth } from "../../services/firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

function Account() {
    const userAccount = () => {
        onAuthStateChanged(auth, async(user) => {
            if (user) {} else {
                window.location.href = "/login";
            }
        });

    };
}

export default Account;