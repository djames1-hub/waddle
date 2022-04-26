import { doc, setDoc, getDoc } from "firebase/firestore";
import { signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "./../firebase-config";

/**
 * Creates the user account using email and password. Only called when a new account is made
 * Returns promise as a string. Empty if no error. 
 * @param {string} name - Full legal name of the user
 * @param {string} username - The username of the user
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @returns {Promise<Object>} user
 */

const createUser = (firstName, lastName, email, password) => {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, email, password).then(async(userCredential) => {
                //Signed in
                const user = userCredential.user;
                const uID = user.uid;
                //TODO: create new user in firestore with specific UID
                const userRef = doc(db, "users", uID)
                await setDoc(userRef, {
                    firstName,
                    lastName,
                    email,
                    password,
                    cart: [],
                    listings: [],
                    purchaseHistory: [],
                    wishList: [],
                    creditCards: [],
                    address: {
                        street: "",
                        city: "",
                        zipCode: "",
                        apartmentNumber: 0,
                        country: "",
                        houseNumber: 0
                    }
                })
                resolve("");
            }).catch((error) => {
                //TODO: display error to user
                reject(error.message);
            })
        })
    }
    /**
     * Gets the current user signed in. If no user is signed in, returns null.
     * @returns {Promimse<string>} User?
     */
const getCurrentUser = async() => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async(user) => {
            if (user) {
                //TODO: Get user data from firestore and create user object
                const userRef = doc(db, "users", user.uid)
                const docSnap = await getDoc(userRef);
                if (docSnap.exists) {
                    let user = docSnap.data();
                    resolve(user);
                } else {
                    reject(new Error('User does not exist!'));
                }

            } else {
                resolve(null);
            }
        })
    })
}

/**
 * Signs user in with entered email and password
 * @param {email}
 * @param {password}
 * @returns {Promimse<string>} String
 */
const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            //Signed in
            const user = userCredential.user;
            window.location = "http://localhost:3000/home";
            resolve("");
        }).catch((error) => {
            const errorMessage = error.message;
            reject(errorMessage);
        })
    })
}

const signOutUser = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign out successful");
        window.location.href = "/login";
    }).catch((error) => {
        // An error happened.
        console.log(error.message);
    });
}

export { signIn, createUser, getCurrentUser, signOutUser };