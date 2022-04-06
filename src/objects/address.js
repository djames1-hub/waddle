/* 
Holds onto address details
*/
class Address{
    street = "";
    town = "";
    apartment = 0;
    houseNumber = 0;
    state = "";
    country = "";

    constructor(street, town, apartment, houseNumber, state, country){
        this.street = street;
        this.town = town;
        this.apartment = apartment;
        this.houseNumber = houseNumber;
        this.state = state;
        this.country = country;
    }
    
}

export default Address;