//Get Firebase authentication object from firebase initializer
import { auth, firestore } from "../server/init-firebase";
//Get firebase functions
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

class User {
    static name = "";
    static username = "";
    static email = "";
    static creditCards = [];
    static listedItems = "";
    static address = new Address();
    static card = [];
    static wishList = [];
    static purchasedItems = [];

    constructor(name, username, email, creditCards, listedItems, address, cards, wishList, purchasedItems){
        this.name = name;
        this.email = email;
        this.creditCards  = creditCards;
        this.username = username;
        this.listedItems = listedItems;
        this.address = address;
        this.creditCards = cards;
        this.wishList = wishList;
        this.purchasedItems = purchasedItems;
    }
}

const userConverter = {
    toFirestore: (user) => {
        return {
            email: user.email
        }
    },
    fromFireStore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User();
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

            await userRef.set({
                name,
                username,
                email,   
            });
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
    onAuthStateChanged(auth, (user) => {
        if(user){
            //TODO: Get user data from firestore and create user object
            const userRef = firestore.collection('users').doc(user.uid);
            const userData = userRef.get();
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