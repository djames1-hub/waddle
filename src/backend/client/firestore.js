import { auth, firestore as db } from "../server/init-firebase";
import Item from './../../objects/item';
import Property from './../../objects/property';

const itemConverter = {
    toFirestore: (item) => {
        return {
           title: item.title,
           price: item.price,
           description: item.description,
           category: item.category,
           keywords: item.keywords,
           images: item.images,
           physicalProperties: {
                height: item.physicalProperties.height,
                width: item.physicalProperties.width,
                depth: item.physicalProperties.depth,
                weight: item.physicalProperties.weight,
           }
        };
    },
    fromFirestore: () => {
        const data = snapshot.data(options);
        return new Item(
            data.title,
            data.price,
            data.description,
            data.category,
            data.keywords,
            data.images,
            new Property(data.height, data.width, data.depth, data.weight)
        );
    }
}



export const createItem = (item) => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const itemRef = db.collection('items').doc();
                await itemRef.withConverter(itemConverter).set(new Item()); 
            } else {
                reject(new Error('User not signed in!'));
            }
        });
    });
}

export const getItems = async (itemId) => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const itemRef = db.collection('items');
                const snapshot = await itemRef.withConverter(itemConverter).get(); 
                const items = snapshot.data();
                resolve(items);
            } else {
                reject(new Error('User not signed in!'));
            }
        });
    });
}

