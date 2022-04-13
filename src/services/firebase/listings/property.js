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


export default Property;