import { auth, db, storage } from "../server/init-firebase";
import { doc, collection, getDoc, getDocs, addDoc, query, orderBy,startAt, endAt, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import Listing from './../../objects/listing';
import Property from './../../objects/property';
import Item from './../../objects/item';



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

export {createListing, getListings, getListing, getAllListings}

