/*
Property holds onto the pysical properties of an item
*/
export class Property{
    static height = 0.0;
    static width = 0.0;
    static depth = 0.0;
    static weight = 0.0;

    constructor(height, width, depth, weight){
        this.height = height;
        this.weight = weight;
        this.width = width;
        this.depth = depth;
    }

}