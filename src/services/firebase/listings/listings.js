import { doc, collection, getDoc, getDocs, addDoc, query, orderBy,startAt, endAt, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

import { auth, db, storage } from "./../firebase-config";
import { Property} from './property';
import Item from './item';
import Address from "../users/address";

class Listing{
    id="";
    seller = "";
    buyer = "";
    dateBought = new Date();
    quantity = 0;
    isPurchased = false;
    shippingCost = 0.0;
    item = new Item("", 0, "", "", [], [], new Property(0, 0, 0, 0), {});
    shippingFrom = new Address("", "", 0, 0, "", "");

    constructor(id, seller, buyer, dateBought, quantity, isPurchased, shippingCost, shippingFrom, item){
        this.id = id;
        this.seller = seller;
        this.buyer = buyer;
        this.dateBought = dateBought;
        this.quantity = quantity;
        this.isPurchased = isPurchased;
        this.shippingCost = shippingCost;
        this.shippingFrom = shippingFrom;
        this.item = item;
    }
}

const listingConverter = {
    toFirestore: (listing) => {
            return {
                listingTitle: listing.item.title,
                seller: listing.seller,
                buyer: listing.buyer,
                dateBought: Timestamp.fromDate(listing.dateBought),
                quantity: listing.quantity,
                isPurchased: listing.isPurchased,
                shippingCost: listing.shippingCost,
                shippingFrom: listing.shippingFrom,
                id: listing.id,
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
                    },
                    properties: listing.item.properties
                }
    
            }
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Listing(
            data.id,
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
                new Property(data.item.height, data.item.width, data.item.depth, data.item.weight),
                data.item.properties
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
                    getDownloadURL(snapshot.ref).then(async downloadURL => {
                        listing.item.images = [downloadURL];
                        try {
                            await addDoc(collection(db, "listings").withConverter(listingConverter), listing);
                        } catch(error) {
                            reject(error);
                        }          
                    });
                });  
            } else {
                alert("Please sign in to create a listing");
                reject("User not signed in!");
            }
        });
    });
}

const getListing = async (listingId) => {
    return new Promise(async (resolve, reject) => {
                const listingRef = doc(db, "listings", listingId);
                const listingSnap = await getDoc(listingRef);

                if (listingSnap.exists()) {
                    resolve(listingSnap.data());
                } else {
                    reject(new Error('Listing with this id does not exist!'));
                }
        });
}

const getListings = async (qStr) => {
    try {
        const q = query(collection(db, "listings")
        .withConverter(listingConverter),
        orderBy('listingTitle'),
        startAt(qStr),
        endAt(qStr + '\uf8ff')
        );

        const querySnapshot = await getDocs(q);

        let listings = [];
        querySnapshot.forEach(doc => {
            listings.push(doc.data());
        });         
        
        return listings;
    } catch (error) {
        return error;
    }
    
    
}


const getAllListings = () => {
    return new Promise(async (resolve, reject) => {
                const listingSnap = await getDocs(collection(db, "listings"));
                let listings = [];
                listingSnap.forEach(doc => {
                    listings.push(doc.data());
                })
                resolve(listings);
        });
}

export {createListing, getListings, getListing, getAllListings, Listing}
