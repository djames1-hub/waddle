//Get Firebase authentication object from firebase initializer
import { auth, firestore } from "../server/init-firebase";
//Get firebase functions
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import User from "../../objects/user";

const userConverter = {
    toFirestore: (user) => {
        return {
            name: user.name,
            username: user.username,
            email: user.email,
            creditCards: [],
            listedItems: [],
            address: "",
            wishList: [],
            purchasedItems: []
        }
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(
            data.name,
            data.username,
            data.email,
            data.creditCards,
            data.listedItems,
            data.address,
            data.cart,
            data.wishList,
            data.purchasedItems    
        );
    }
}

/**
 * Creates the user account using email and password. Only called when a new account is made
 * Returns promise as a string. Empty if no error. 
 * @param {email} 
 * @param {password}
 * @returns {Promimse<string>} String
 */ 

const createUser = (name, username, email, password) => {
    return new Promise((resolve, reject) =>{
        createUserWithEmailAndPassword (auth, email, password).then(async (userCredential) => {
            //Signed in
            const user = userCredential.user;
            const uID = user.uid;
            //TODO: create new user in firestore with specific UID
            const userRef = firestore.collection('users').doc(uID);

            await userRef.withConverter(userConverter).set(new User());
            resolve("");
        }).catch((error) => {
            //TODO: display error to user
            reject(error.message);
        })
    })
}
/**
 * Gets the current user signed in. If no user is signed in, returns null.
 */
const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                //TODO: Get user data from firestore and create user object
                const userRef = firestore.collection('users').doc(user.uid);
                const userData = userRef.get();
                resolve();
            } else {
                reject(null);
            }
        })
    })
}
/**
 * Signs user in with entered email and password
 * @param {email}
 * @param {password}
 */
function signIn(email, password){
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        //TODO: send user to account screen or home screen
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //TODO: display error message
    })
}

export {signIn, createUser, getCurrentUser};