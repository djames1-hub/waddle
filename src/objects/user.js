import CreditCard from "./credit-card";
import Address from "./address";

export class User{
    static name = "";
    static username = "";
    static email = "";
    static creditCards = [];
    static listedItems = "";
    static address = new Address();
    static cart = [];
    static wishList = [];
    static purchasedItems = [];

    constructor(name, username, email, creditCards, listedItems, address, cards, wishList, purchasedItems){
        this.name = name;
        this.email = email;
        this.creditCards  = creditCards;
        this.username = username;
        this.listedItems = listedItems;
        this.address = address;
        this.creditCards = cards;
        this.wishList = wishList;
        this.purchasedItems = purchasedItems;
    }
}
<<<<<<< HEAD

export default user;
=======
>>>>>>> 73aa6dc5ab7f6a30b8bcf70987aad5374e04ca0a
