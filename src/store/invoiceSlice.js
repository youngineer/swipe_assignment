// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   getById: {},
//   allIds: [],
//   nextId: 1
// };

// const invoicesSlice = createSlice({
//   name: 'invoices',
//   initialState,
//   reducers: {
//     addInvoice: (state, action) => {
//       const {
//         serialNumber,
//         customerName,
//         productName,
//         quantity,
//         price,
//         tax,
//         totalPrice,
//         date
//       } = action.payload;
    
//       const id = state.nextId;
    
//       state.getById[id] = {
//         id,
//         serialNumber,
//         customerName,
//         productName,
//         quantity,
//         price,
//         tax,
//         totalPrice,
//         date
//       };
    
//       state.allIds.push(id);
//       state.nextId += 1;
//     },
//     updateInvoice: (state, action) => {
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
//   addInvoice,
//   updateInvoice
// } = invoicesSlice.actions;

// export default invoicesSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  getById: {},
  allIds: [],
  nextId: 1,
};

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      const { serialNumber, customerName, productName, customerId, productId, quantity, price, tax, totalPrice, date } = action.payload;
      const id = state.nextId;

      state.getById[id] = {
        id,
        serialNumber,customerName, productName,
        customerId,
        productId,
        quantity,
        price,
        tax,
        totalPrice,
        date,
      };

      state.allIds.push(id);
      state.nextId += 1;
    },
    updateInvoice: (state, action) => {
      const { id, ...updates } = action.payload;
      if (state.getById[id]) {
        state.getById[id] = {
          ...state.getById[id],
          ...updates,
        };
      }
    },
    updateInvoicesForProductChange: (state, action) => {
      const { productId, updatedProduct } = action.payload;
      Object.values(state.getById).forEach(invoice => {
        if (invoice.productId === productId) {
          invoice.price = updatedProduct.unitPrice;
          invoice.tax = updatedProduct.tax;
          invoice.totalPrice = (updatedProduct.unitPrice + updatedProduct.tax) * invoice.quantity;
        }
      });
    },
    updateInvoicesForCustomerChange: (state, action) => {
      const { customerId, updatedCustomer } = action.payload;
      Object.values(state.getById).forEach(invoice => {
        if (invoice.customerId === customerId) {
          invoice.customerName = updatedCustomer.customerName;
        }
      });
    },
  },
});

export const { addInvoice, updateInvoice, updateInvoicesForProductChange, updateInvoicesForCustomerChange } = invoicesSlice.actions;
export default invoicesSlice.reducer;
