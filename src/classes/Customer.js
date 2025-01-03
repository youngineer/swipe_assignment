export default class Customer {
  constructor(id, customerName, phoneNumber, totalPurchaseAmount) {
    this.id = id;
    this.customerName = customerName;
    this.phoneNumber = phoneNumber;
    this.totalPurchaseAmount = totalPurchaseAmount;
  }
  
  getName() {
    return this.customerName;
  }

  getPhone() {
    return this.phoneNumber;
  }

  getTotalPurchase() {
    return this.totalPurchaseAmount;
  }

  // Setters
  setName(customerName) {
    this.customerName = customerName;
  }

  setPhone(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  setTotalPurchase(totalPurchaseAmount) {
    this.totalPurchaseAmount = totalPurchaseAmount;
  }
}