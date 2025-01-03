// import { configureStore } from '@reduxjs/toolkit';
// import customerReducer from './customerSlice';
// import productReducer from './productSlice';
// import invoiceReducer from './invoiceSlice';
// import apiKeyReducer from './apiKeySlice';

// export const store = configureStore({
//   reducer: {
//     customers: customersSlice.reducer,
//     products: productsSlice.reducer,
//     invoices: invoicesSlice.reducer,
//   },
// });

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import appReducer from "./appSlice"; // Replace with the actual path to your reducer file

// const store = configureStore({
//   reducer: {
//     app: appReducer,
//     apiKey: apiKeyReducer
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './customerSlice';
import productsReducer from './productSlice';
import invoicesReducer from './invoiceSlice';
import apiKeyReducer from './apiKeySlice';

const asyncDispatchMiddleware = storeAPI => next => action => {
  if (typeof action === 'function') {
    return action(storeAPI.dispatch, storeAPI.getState);
  }
  return next(action);
};

const store = configureStore({
  reducer: {
    customers: customersReducer,
    products: productsReducer,
    invoices: invoicesReducer,
    apiKey: apiKeyReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(asyncDispatchMiddleware),
});

export default store;

