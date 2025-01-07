export const handleAiResponse = (text) => {
  console.log("inside handleAiOp");
  try {
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}") + 1;

    if (jsonStart === -1 || jsonEnd === -1) return null;

    // Extract the JSON string and clean it
    let jsonString = text.slice(jsonStart, jsonEnd);
    jsonString = jsonString
      .replace(/\/\/.*/g, "")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/,(\s*[}\]])/g, "$1")
      .trim();

    console.log("Cleaned JSON string:", jsonString);
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
};

export const validateJsonObj = async (
  jsonObj,
  validateCustomer,
  validateProduct,
  validateInvoice,
  dispatchValidEntities,
  setPopupHandlers
) => {
  console.log("inside ValidateJsonObj; jsonData:", jsonObj);

  const invoicesArray = Array.isArray(jsonObj.invoices) ? jsonObj.invoices : [];
  const productsArray = Array.isArray(jsonObj.products) ? jsonObj.products : [];
  const customersArray = Array.isArray(jsonObj.customers) ? jsonObj.customers : [];

  const validEntities = {
    customers: [],
    products: [],
    invoices: []
  };

  const pendingValidation = {
    customers: [],
    products: [],
    invoices: []
  };

  // Validate customers
  for (const customer of customersArray) {
    const { validatedCustomer, isDisplayPopup } = validateCustomer(customer);
    if (isDisplayPopup) {
      pendingValidation.customers.push(customer);
    } else {
      validEntities.customers.push(validatedCustomer);
    }
  }

  // Validate invoices
  for (const invoice of invoicesArray) {
    const { validatedInvoice, isDisplayPopup } = validateInvoice(invoice);
    if (isDisplayPopup) {
      pendingValidation.invoices.push(invoice);
    } else {
      validEntities.invoices.push(validatedInvoice);
    }
  }

  // Validate products
  for (const product of productsArray) {
    const { validatedProduct, isDisplayPopup } = validateProduct(product);
    if (isDisplayPopup) {
      pendingValidation.products.push(product);
    } else {
      validEntities.products.push(validatedProduct);
    }
  }

  console.log("valid entities:", validEntities);
  console.log("pending validation entities:", pendingValidation);

  // Dispatch valid entities immediately
  dispatchValidEntities(validEntities);

  // Handle pending validations via popups
  setPopupHandlers(pendingValidation);
};
