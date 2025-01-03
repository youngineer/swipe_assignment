export const validateProduct = (product) => {
  let { name, quantity, unitPrice, tax } = product;
  const promptText = `Product Name: ${name}
                      Quantity: ${quantity}
                      Unit Price: ${unitPrice}
                      Tax: ${tax}`;

  if (!name || name === "missing") {
    product.name = prompt(promptText + "Enter the name: ");
  }
  if (quantity === undefined || quantity === -1) {
    product.quantity = parseInt(prompt(promptText + "Enter the quantity: "), 10);
  }
  if (unitPrice === undefined || unitPrice === -1) {
    product.unitPrice = parseFloat(prompt(promptText +  "Enter the unit price: "));
  }
  if (tax === undefined || tax === -1) {
    product.tax = parseFloat(prompt(promptText + "Enter the tax: "));
  }

  return product;
};

export const validateCustomer = (customer) => {
  let { customerName, phoneNumber, totalPurchaseAmount } = customer;
  const promptText = `Customer Name: ${customerName}
                      Phone Number: ${phoneNumber}
                      Total Purchase Amount: ${totalPurchaseAmount}`;

  if (!customerName || customerName === "missing") {
    customer.customerName = prompt(promptText + "Enter the customer name: ");
  }
  if (!phoneNumber || phoneNumber === "missing") {
    customer.phoneNumber = prompt(promptText + "Enter the phone number: ");
  }
  if (totalPurchaseAmount === undefined || totalPurchaseAmount === -1) {
    customer.totalPurchaseAmount = parseFloat(prompt(promptText + "Enter the total purchase amount: "));
  }

  return customer;
};

export const validateInvoice = (invoice) => {
  let { serialNumber, customerName, productName, quantity, price, tax, totalPrice, date } = invoice;
  const promptText = `Serial Number: ${serialNumber}
                      Customer Name: ${customerName}
                      Product Name: ${productName}
                      Quantity: ${quantity}
                      Price: ${price}
                      Tax: ${tax}
                      Total Price: ${totalPrice}
                      Date: ${date}`;

  if (!serialNumber || serialNumber === "missing") {
    invoice.serialNumber = prompt(promptText + "Enter the serial number: ");
  }
  if (!customerName || customerName === "missing") {
    invoice.customerName = prompt(promptText + "Enter the customer name: ");
  }
  if (!productName || productName === "missing") {
    invoice.productName = prompt(promptText + "Enter the product name: ");
  }
  if (quantity === undefined || quantity === -1) {
    invoice.quantity = parseInt(prompt(promptText + "Enter the quantity: "), 10);
  }
  if (price === undefined || price === -1) {
    invoice.price = parseFloat(prompt(promptText + "Enter the price: "));
  }
  if (tax === undefined || tax === -1) {
    invoice.tax = parseFloat(prompt(promptText + "Enter the tax: "));
  }
  if (totalPrice === undefined || totalPrice === -1) {
    invoice.totalPrice = (1 + invoice.tax * 0.01) * invoice.quantity * invoice.price;
  }
  if (!date || date === "missing") {
    invoice.date = prompt(promptText + "Enter the date (YYYY/DD/MM): ");
    invoice.date = new Date(invoice.date); 
  }

  return invoice;
};



// export const validateProduct = (product) => {
//   let { name, quantity, unitPrice, tax } = product;

//   // Replacing prompt with dummy values
//   if (!name || name === "missing") {
//     product.name = "Dummy Product"; // Dummy value for name
//   }
//   if (quantity === undefined || quantity === -1) {
//     product.quantity = 10; // Dummy value for quantity
//   }
//   if (unitPrice === undefined || unitPrice === -1) {
//     product.unitPrice = 99.99; // Dummy value for unit price
//   }
//   if (tax === undefined || tax === -1) {
//     product.tax = 5; // Dummy value for tax (5%)
//   }

//   return product;
// };

// export const validateCustomer = (customer) => {
//   let { customerName, phoneNumber, totalPurchaseAmount } = customer;

//   // Replacing prompt with dummy values
//   if (!customerName || customerName === "missing") {
//     customer.customerName = "John Doe"; // Dummy name
//   }
//   if (!phoneNumber || phoneNumber === "missing") {
//     customer.phoneNumber = "555-1234"; // Dummy phone number
//   }
//   if (totalPurchaseAmount === undefined || totalPurchaseAmount === -1) {
//     customer.totalPurchaseAmount = 1500.75; // Dummy total purchase amount
//   }

//   return customer;
// };

// export const validateInvoice = (invoice) => {
//   let { serialNumber, customerName, productName, quantity, price, tax, totalPrice, date } = invoice;

//   // Replacing prompt with dummy values
//   if (!serialNumber || serialNumber === "missing") {
//     invoice.serialNumber = "INV-12345"; // Dummy invoice serial number
//   }
//   if (!customerName || customerName === "missing") {
//     invoice.customerName = "John Doe"; // Dummy customer name
//   }
//   if (!productName || productName === "missing") {
//     invoice.productName = "Dummy Product"; // Dummy product name
//   }
//   if (quantity === undefined || quantity === -1) {
//     invoice.quantity = 5; // Dummy quantity
//   }
//   if (price === undefined || price === -1) {
//     invoice.price = 50.0; // Dummy price per unit
//   }
//   if (tax === undefined || tax === -1) {
//     invoice.tax = 5; // Dummy tax rate (5%)
//   }
//   if (totalPrice === undefined || totalPrice === -1) {
//     invoice.totalPrice = (1 + invoice.tax * 0.01) * invoice.quantity * invoice.price; // Calculate total price
//   }
//   if (!invoice.date || invoice.date === "missing") {
//     invoice.date = "2024-12-30";
//     return invoice;
//   }

//   if (typeof invoice.date === 'string' && invoice.date.includes('/')) {
//     const [day, month, year] = invoice.date.split('/');
//     invoice.date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
//   }
//   return invoice;
// };
  
