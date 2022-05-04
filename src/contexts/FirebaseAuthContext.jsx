import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

import { auth } from "../services/firebase/firebase-config";
import { getCurrentUser } from "../services/firebase/users";

const FirebaseAuthContext = createContext();

const FirebaseAuthProvider = ({ children }) => {
    const [value, setValue] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (u) => {
            if (u.uid) {
                const user = await getCurrentUser(u.uid);
                setValue({ id: u.uid, phoneNumber: u.phoneNumber, ...user });
            }
        });
        return unsubscribe;
    }, []);

    return (
        <FirebaseAuthContext.Provider value={value}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

export { FirebaseAuthContext, FirebaseAuthProvider };