export default class Product{
    constructor(name="", quantity=0, unitPrice=0, tax=0, priceWithTax=0){
        this.name = name;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.tax = tax;
        this.priceWithTax = priceWithTax;
    };

    getName(){
        return this.getName;
    };

    setName(name){
        this.name = name;
    };

    getQuantity(){
        return this.quantity;
    };

    setQuantity(qty){
        this.quantity = qty;
    };

    getUnitPrice(){
        return this.unitPrice;
    };

    setUnitPrice(price){
        this.unitPrice = price;
    };

    getTax(){
        return this.tax;
    };

    setTax(tax){
        this.tax = tax;
    };

    getPriceWithTax(){
        return this.getPriceWithTax;
    };

    setPriceWithTax(){
        this.priceWithTax = (this.unitPrice * this.tax);
    };
};
