import { doc, collection, getDoc, getDocs, setDoc, query, orderBy,startAt, endAt, Timestamp, startAfter, limit, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

import { auth, db, storage } from "./../firebase-config";

const createListing = (listing) => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const storageRef = ref(storage, `images/${listing.photo[0].name}`);
                uploadBytes(storageRef, listing.photo[0]).then(snapshot => {
                    getDownloadURL(snapshot.ref).then(async downloadURL => {
                        listing.photo = [downloadURL];
                        try {
                            await setDoc(doc(collection(db, "listings"), listing.listingId), listing);
                            window.location.href = "/";
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
        const q = query(collection(db, "listings"),
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

const getListingsByCategory = async (category) => {
    try {
        const q = query(collection(db, "listings"),
        where("category", "==", category),
        orderBy('listingTitle')
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


const getAllListings = async () => {
    
    const listingSnap = await getDocs(collection(db, "listings"));
    let listings = [];
    listingSnap.forEach(doc => {
        listings.push(doc.data());
    });
    return listings;   
}

const paginateItems = async (maxItemsPerPage) => {
    try {
        const listingSnap = await getDocs(collection(db, "listings"), limit(maxItemsPerPage));
        let listings = [];
        listingSnap.forEach(doc => {
            listings.push(doc.data());
        });
        return listings;
    } catch (error) {
        return error;
    }
}

const getNextPage = async (maxItemsPerPage, lastItem) => {
    try {
        return await getDocs(collection(db, "listing"), limit(maxItemsPerPage), startAfter(lastItem));
    } catch (error) {
        return error;
    }
} 

export {createListing, getListings, getListing, getAllListings, paginateItems, getNextPage, getListingsByCategory}
