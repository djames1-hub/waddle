import { Property } from "./property";

export class Item {
    //class that holds onto properties of the item
    title = "";
    price = 0.0;
    description = "";
    category = "";
    keywords = [];
    images = [];
    physicalProperties = new Property(0, 0, 0, 0);

    constructor(title, price, description, category, keywords, images, physicalProperties){
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.keywords = keywords;
        this.images = images;
        this.physicalProperties = physicalProperties;
    }
}





export default Item;