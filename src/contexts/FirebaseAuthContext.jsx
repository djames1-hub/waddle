import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

const FirebaseAuthContext = createContext();

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const value = { user };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(setUser);
        return unsubscribe;
    }, []);

    return (
        <FirebaseAuthContext.Provider value={value}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

export { FirebaseAuthContext, FirebaseAuthProvider };