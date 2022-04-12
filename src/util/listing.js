import Item from "./item";
import Address from "../services/firebase/users/address";
import Property from "../services/firebase/listings/property";

class Listing{
    id="";
    seller = "";
    buyer = "";
    dateBought = new Date();
    quantity = 0;
    isPurchased = false;
    shippingCost = 0.0;
    item = new Item("", 0, "", "", [], [], new Property(0, 0, 0, 0));
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
                    }
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
                new Property(data.item.height, data.item.width, data.item.depth, data.item.weight)
            )
        );
    }
};

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

export {Listing, getListing};