//Get Firebase authentication object from firebase initializer
import { auth } from "../server/init-firebase";
//Get firebase functions
import { signInWithEmailAndPassword } from "firebase/auth";

function createUser(email, password){
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        //Signed in
        const user = userCredential.user;

    }).catch((error) => {


        
    })
}