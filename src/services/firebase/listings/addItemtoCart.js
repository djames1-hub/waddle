import { updateDoc, doc } from "firebase/firestore";
import { db } from "./../firebase-config";

const addItemToCart = async (cart, uid, newId) => {
    console.log(cart, uid, newId);
    const userRef = doc(db, "users", uid);
    try {
        await updateDoc(userRef, { cart: [newId, ...cart]});
    } catch (error) {
        return error
    }
};

export default addItemToCart;