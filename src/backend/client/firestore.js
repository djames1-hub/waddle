import { auth, firestore as db } from "../server/init-firebase";
import Item from './../../objects/item';


const createItem = (item) => {
    const itemRef = db.collection('items').doc();
    await itemRef.set({
        title
    }); 
}

const getItem = async (itemId) => {
    const itemRef = db.collection('items').doc(itemId);
    const itemData = await itemRef.get({

    }); 
    const item = itemData.data();
    return new Item();
}

export {createItem}