import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { auth } from "../services/firebase/firebase-config";
import { getCurrentUser } from "../services/firebase/users";

const useFirebaseAuth = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const { uid, phoneNumber } = user;
                    const userData = await getCurrentUser(uid);
                    setUser({ ...userData, id: uid, phoneNumber });
                }
                
            });
        }

        fetchUser();
    }, []);
    return user;
};

export { useFirebaseAuth };