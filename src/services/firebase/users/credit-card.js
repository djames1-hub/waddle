
class CreditCard{
    name = "";
    number = 0;
    CVV = 0;
    expiration = new Date();
    zipCode = 0;

    constructor(name, number, CVV, expiration, zipCode){
        this.name = name;
        this.number = number;
        this.CVV = CVV;
        this.expiration = expiration;
        this.zipCode = zipCode;
    }

}

export default CreditCard;