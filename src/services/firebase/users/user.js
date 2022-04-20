import { doc, setDoc, getDoc } from "firebase/firestore";
import { signOut,createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "./../firebase-config";
import CreditCard from "./credit-card";
import Address from "./address"

export class User {
    name = "";
    username = "";
    email = "";
    creditCards = [];
    listedItems = "";
    address = new Address();
    cart = [];
    wishList = [];
    purchasedItems = [];

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
            name: user.name,
            username: user.username,
            email: user.email,
            creditCards: user.creditCards.map(creditCard => {
                return {
                    name: creditCard.name,
                    number: creditCard.number,
                    CVV: creditCard.CVV,
                    expiration: creditCard.expiration,
                    zipCode: creditCard.zipCode
                }
            }),
            listedItems: [],
            address: {
                street: user.address.street,
                town: user.address.town,
                apartment: user.address.apartment,
                houseNumber: user.address.houseNumber,
                state: user.address.state,
                country: user.address.country
            },
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
            data.creditCards.map(creditCard => {
                return new CreditCard(
                    creditCard.name,
                    creditCard.number,
                    creditCard.CVV,
                    creditCard.expiration,
                    creditCard.zipCode
                );
            }),
            data.listedItems,
            new Address(
                data.address.street,
                data.address.town,
                data.address.apartment,
                data.address.houseNumber,
                data.address.state,
                data.address.country
            ),
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
            const userRef = doc(db, "users", uID).withConverter(userConverter);
            await setDoc(userRef, new User(name, username, email, [], [], new Address("", "", 0, 0, "", ""), [], [], []))
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
const getCurrentUser = async () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if(user){
                //TODO: Get user data from firestore and create user object
                const userRef = doc(db, "users", user.uid).withConverter(userConverter);
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
 * Gets user data corresponding to a specifc id from firebase. Then converts it to a user object.
 * @param {*} id 
 * @returns User of id as a user object
 */
const getUser = async (id) => {
    return new Promise(async (resolve, reject) => {
        const userRef = doc(db, "users", id).withConverter(userConverter);
        const doc = await getDoc(userRef)
        if (doc.exists) {
            let user = doc.data();
            resolve(user);
        } else {
            reject(new Error('User does not exist!'));
        }
    })
}

/**
 * Grabs the firebase ID for the current user
 * @returns {Promimse<string>} String
 */

const getUserID = () => {
    new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if(user){
                resolve(user.uid);
            }else {
                reject("");
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
function signIn(email, password){
    return new Promise((resolve, reject) =>{
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

function signOutUser(){
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("sign out successful");
      window.location.href = "/login";
    }).catch((error) => {
      // An error happened.
      console.log(error.message);
    });
}

export {signIn, createUser, getCurrentUser, getUserID, signOutUser, getUser};
