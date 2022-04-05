/* 
Holds onto address details
*/
class Address{
    static street = "";
    static town = "";
    static apartment = 0;
    static houseNumber = 0;
    static state = "";
    static country = "";

    constructor(street, town, apartment, houseNumber, state, country){
        this.street = street;
        this.town = town;
        this.apartment = apartment;
        this.houseNumber = houseNumber;
        this.state = state;
        this.country = country;
    }
    
}