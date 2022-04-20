import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

import { auth } from "../services/firebase/firebase-config";
import { getCurrentUser } from "../services/firebase/users";

const FirebaseAuthContext = createContext();

const FirebaseAuthProvider = ({ children }) => {
    const [id, setId] = useState(null);
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (u) => {
            setId((u) ? u.uid: null);
        });
        return unsubscribe;
    }, [id]);

    useEffect(() => {
        const getUser = async () => {
            let user = await getCurrentUser(id);
            setUser({ id, ...user });
        }
        return getUser;
    }, [user]);

    return (
        <FirebaseAuthContext.Provider value={user}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

export { FirebaseAuthContext, FirebaseAuthProvider };