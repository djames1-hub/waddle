
class CreditCard{
    static name = "";
    static number = 0;
    static CVV = 0;
    static expiration = new Date();
    static zipCode = 0;

    constructor(name, number, CVV, expiration, zipCode){
        this.name = name;
        this.number = number;
        this.CVV = CVV;
        this.expiration = expiration;
        this.zipCode = zipCode;
    }

}