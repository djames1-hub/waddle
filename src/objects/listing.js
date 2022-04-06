import Item from "./item";
import Address from "./address";
import Property from "./property";

class Listing{
    seller = "";
    buyer = "";
    dateBought = new Date();
    quantity = 0;
    isPurchased = false;
    shippingCost = 0.0;
    item = new Item("", 0, "", "", [], [], new Property(0, 0, 0, 0));
    shippingFrom = new Address("", "", 0, 0, "", "");

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