// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   getById: {},
//   allIds: [],
//   nextId: 1
// };

// const customerSlice = createSlice({
//   name: 'customers',
//   initialState,
//   reducers: {
//     addCustomer: (state, action) => {
//       const { customerName, phoneNumber, totalPurchaseAmount } = action.payload;
//       const id = state.nextId;
//       state.getById[id] = {
//         id,
//         customerName,
//         phoneNumber,
//         totalPurchaseAmount
//       };
//       state.allIds.push(id);
//       state.nextId += 1;
//     },
//     updateCustomer: (state, action) => {
//       const { id, ...updates } = action.payload;
//       if (state.getById[id]) {
//         state.getById[id] = {
//           ...state.getById[id],
//           ...updates
//         };
//       }
//     }
//   }
// });

// export const {
//   addCustomer,
//   updateCustomer,
//   deleteCustomer,
//   setCustomers
// } = customerSlice.actions;

// export default customerSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import { updateInvoicesForCustomerChange } from './invoiceSlice';

const initialState = {
  getById: {},
  allIds: [],
  nextId: 1,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      const { customerName, phoneNumber, totalPurchaseAmount } = action.payload;
      const id = state.nextId;
      state.getById[id] = { id, customerName, phoneNumber, totalPurchaseAmount };
      state.allIds.push(id);
      state.nextId += 1;
    },
    updateCustomerLocal: (state, action) => {
      const { id, ...updates } = action.payload;
      if (state.getById[id]) {
        state.getById[id] = { ...state.getById[id], ...updates };
      }
    },
  },
});

export const { addCustomer, updateCustomerLocal } = customersSlice.actions;

export const updateCustomer = payload => (dispatch, getState) => {
  dispatch(updateCustomerLocal(payload));
  const state = getState();
  const updatedCustomer = state.customers.getById[payload.id];
  dispatch(updateInvoicesForCustomerChange({ customerId: payload.id, updatedCustomer }));
};

export default customersSlice.reducer;
