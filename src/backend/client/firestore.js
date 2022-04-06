import { auth, db, storage } from "../server/init-firebase";
import { doc, collection, getDoc, getDocs, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import Listing from './../../objects/item';
import Property from './../../objects/property';
import Item from './../../objects/item';

const listingConverter = {
    toFirestore: (listing) => {
            return {
                seller: listing.seller,
                buyer: listing.buyer,
                dateBought: db.Timestamp.fromDate(listing.dateBought),
                quantity: listing.quantity,
                isPurchased: listing.isPurchased,
                shippingCost: listing.shippingCost,
                shippingFrom: listing.shippingFrom,
                item: {
                    title: listing.item.title,
                    price: listing.item.price,
                    description: listing.item.description,
                    category: listing.item.category,
                    keywords:listing.item.keywords,
                    images: listing.item.images,
                    physicalProperties: {
                         height: listing.item.physicalProperties.height,
                         width: listing.item.physicalProperties.width,
                         depth: listing.item.physicalProperties.depth,
                         weight: listing.item.physicalProperties.weight,
                    }
                }
    
            }
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Listing(
            data.seller,
            data.buyer,
            data.dateBought,
            data.quantity,
            data.isPurchased,
            data.shippingCost,
            data.shippingFrom,
            new Item(
                data.item.title,
                data.item.price,
                data.item.description,
                data.item.category,
                data.item.keywords,
                data.item.images,
                new Property(data.item.height, data.item.width, data.item.depth, data.item.weight)
            )
        );
    }
};


const createListing = (listing, image) => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const storageRef = ref(storage, `images/${image.name}`);
                uploadBytes(storageRef, image).then(snapshot => {
                    getDownloadURL(snapshot.ref).then(downloadURL => {
                        listing.item.images.push(downloadURL);
                        await setDoc(doc(db, "listings").withConverter(listingConverter));
                    });
                });
                
            } else {
                reject(new Error('User not signed in!'));
            }
        });
    });
}

const getListings = async () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const querySnapshot = await getDocs(collection(db, "listings").withConverter(listingConverter));
                
                resolve(querySnapshot);
                
            } else {
                reject(new Error('User not signed in!'));
            }
        });
    });
}

const getListing = async (listingId) => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const listingRef = doc(db, "listings", listingId);
                const listingSnap = await getDoc(listingRef);

                if (listingSnap.exists()) {
                    resolve(listingSnap.data());
                } else {
                    reject(new Error('Listing with this id does not exist!'));
                }
                
            } else {
                reject(new Error('User not signed in!'));
            }
        });
    });
}

export {createListing, getListings, getListing}
