import { db } from '../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const getListings = async (listingIds) => {
    const listingRef = collection(db, "listings");
    const q = query(listingRef, where("listingId", "in", listingIds));
    const querySnapshot = await getDocs(q);
    let listings = [];
    querySnapshot.forEach((doc) => listings.push(doc.data()));
    return listings;
}

export default getListings;