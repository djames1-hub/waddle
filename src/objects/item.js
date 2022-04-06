import Property from "./property";

class Item{
    //class that holds onto properties of the item
    static title = "";
    static price = 0.0;
    static description = "";
    static category = "";
    static keywords = [];
    static images = [];
    static physicalProperties = new Property(0, 0, 0, 0);

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

export default Item