//Get Firebase authentication object from firebase initializer
import { auth } from "../server/init-firebase";
//Get firebase functions
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

/**
 * Creates the user account using email and password. Only called when a new account is made
 * Returns promise as a string. Empty if no error. 
 * @param {email} 
 * @param {password}
 * @returns {Promimse<string>} String
 */ 

function createUser(email, password){
    return new Promise((resolve, reject) =>{
        createUserWithEmailAndPassword (auth, email, password).then((userCredential) => {
            //Signed in
            const user = userCredential.user;
            const uID = user.uid;
            //TODO: create new user in firestore with specific UID
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
function getCurrentUser(){
    onAuthStateChanged(auth, (user) => {
        if(user){
            //TODO: Get user data from firestore and create user object
        } else {
            return null;
        }
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