export default class Invoice {
    constructor(
        id = null,
        serialNumber = "",
        customerName = '',
        productName = '',
        quantity = 0,
        price = 0,
        taxAmount = 0,
        totalPrice = 0,
        date = null
    ) {
        this.id = id;
        this.serialNumber = serialNumber;
        this.customerName = customerName;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
        this.taxAmount = taxAmount; 
        this.totalPrice = totalPrice;
        this.date = date;
    }

    getSerialNumber(){
        return this.serialNumber;
    };

    setSerialNumber(serialNumber){
        this.serialNumber = serialNumber;
    };

    getCustomerName() {
        return this.customerName;
    }

    setCustomerName(name) {
        this.customerName = name;
    }

    getProductName() {
        return this.productName;
    }

    setProductName(productName) {
        this.productName = productName;
    }

    getQuantity() {
        return this.quantity;
    }

    setQuantity(qty) {
        this.quantity = qty;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getTaxAmount() {
        return this.taxAmount;
    }

    setTaxAmount(taxAmount) {
        this.tax = taxAmount;
    }

    getTotalPrice() {
        return this.totalPrice;
    }

    setTotalPrice(totalPrice) {
        this.totalPrice = totalPrice;
    }

    getDate() {
        return this.date;
    }

    setDate(date) {
        this.date = date;
    }

    calculateTotalPrice() {
        return (this.price * this.quantity) + this.taxAmount;
    }
};
