import item from "./item";
import Address from "./address";

class Listing{
    static seller = "";
    static buyer = "";
    static dateBought = new Date();
    static quantity = 0;
    static isPurchased = false;
    static shippingCost = 0.0;
    static shippingFrom = new Address();
    static item = new item();

    constructor(seller, buyer, dateBought, quantity, isPurchased, shippingCost, shippingFrom, item){
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

export default Listing;