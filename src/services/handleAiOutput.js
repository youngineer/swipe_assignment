
import { addCustomer } from "../store/customerSlice";
import { addProduct } from "../store/productSlice";
import { addInvoice } from "../store/invoiceSlice";
import { validateCustomer, validateProduct, validateInvoice } from "./validation";

export const handleAiResponse = (text, dispatch) => {
  console.log("inside handleAiOpL:", text)
  try {
    // First try to find JSON in the text
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}') + 1;
    
    if (jsonStart === -1 || jsonEnd === -1) return null;
    
    // Extract the JSON string and clean it
    let jsonString = text.slice(jsonStart, jsonEnd);
    
    // Remove comments and properly quote properties
    jsonString = jsonString
      .replace(/\/\/.*/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/,(\s*[}\]])/g, '$1')
      .trim();

    console.log('Cleaned JSON string:', jsonString);
    const jsonObj = JSON.parse(jsonString);
    validateJsonObj(jsonObj, dispatch);
    
    return jsonObj;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
};

const validateJsonObj = (jsonObj, dispatch) => {
  if (!dispatch) {
    console.error("Dispatch function missing");
    return;
  }

  const invoicesArray = Array.isArray(jsonObj.invoices) ? jsonObj.invoices : [];
  const productsArray = Array.isArray(jsonObj.products) ? jsonObj.products : [];
  const customersArray = Array.isArray(jsonObj.customers) ? jsonObj.customers : [];

  try {
    customersArray.forEach(customer => {
      const validatedCustomer = validateCustomer(customer);
      if (validatedCustomer) {
        dispatch(addCustomer(validatedCustomer));
      }
    });

    productsArray.forEach(product => {
      const validatedProduct = validateProduct(product);
      if (validatedProduct) {
        dispatch(addProduct(validatedProduct));
      }
    });

    invoicesArray.forEach(invoice => {
      const validatedInvoice = validateInvoice(invoice);
      validatedInvoice.date = new Date(validatedInvoice.date).toISOString().split('T')[0];
      console.log(validatedInvoice.date);
      dispatch(addInvoice(validatedInvoice));
    });

  } catch (error) {
    console.error("Error dispatching actions:", error);
  }
};