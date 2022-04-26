import { updateDoc, doc } from "firebase/firestore";
import { db } from "./../firebase-config";

const addItemToWishlist = async(wishlist, uid, newId) => {
    const userRef = doc(db, "users", uid);
    try {
        await updateDoc(userRef, { wishlist: [newId, ...wishlist] });
    } catch (error) {
        return error;
    }
};

export default addItemToWishlist;