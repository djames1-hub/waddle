/*
Property holds onto the pysical properties of an item
*/
class Property {
    height = 0.0;
    width = 0.0;
    depth = 0.0;
    weight = 0.0; 

    constructor(height, width, depth, weight){
        this.height = height;
        this.weight = weight;
        this.width = width;
        this.depth = depth;
    }

}

const propertyFactory = (category) => {
    if (category === "books") {
        return {
            author: "",
            isbn: "",
            edition: "",
            isDigital: "",
            condition: "",
        }
    } else if (category === "clothes") {
        return {
            size: "",
            condition: ""
        }
    } else if (category === "clothes") {
        return {
            width: "",
            length: "",
            height: "",
            condition: ""
        }
    } else if (category === "electronics") {
        return {
            model: "",
            condition: ""
        }
    } else if  (category === "sports gear") {
        return {
            size: "",
            model: "",
            condition: ""
        }
    }
}


export { Property, propertyFactory};