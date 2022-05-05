import { updateDoc, doc } from "firebase/firestore";
import { db } from "./../firebase-config";
import { v4 as uuidv4 } from 'uuid';

const addItemsToPurchaseHistory = async (purchaseHistory, uid, newPurchase) => {
    console.log(newPurchase);
    const userRef = doc(db, "users", uid);
    try {
        const purchaseId = uuidv4();
        await updateDoc(userRef, { purchaseHistory: { [purchaseId]: newPurchase, ...purchaseHistory } });
        return { purchaseId };
    } catch (error) {
        return { error };
    }
};

export default addItemsToPurchaseHistory;