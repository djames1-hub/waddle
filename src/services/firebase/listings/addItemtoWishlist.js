import { updateDoc, doc } from "firebase/firestore";
import { db } from "./../firebase-config";

const addItemToWishlist = async(wishList, uid, newId) => {
    console.log(wishList, uid, newId);
    const userRef = doc(db, "users", uid);
    try {
        await updateDoc(userRef, { wishList: [newId, ...wishList] });
    } catch (error) {
        return error;
    }
};

export default addItemToWishlist;