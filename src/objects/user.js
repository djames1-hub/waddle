import Address from "./address";

export class User{
    name = "";
    username = "";
    email = "";
    creditCards = [];
    listedItems = "";
    address = new Address();
    cart = [];
    wishList = [];
    purchasedItems = [];

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

export default User;
