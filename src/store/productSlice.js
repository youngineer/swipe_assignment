// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   getById: {},
//   allIds: [],
//   nextId: 1
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     addProduct: (state, action) => {
//       const { name, quantity, unitPrice, tax } = action.payload;
//       const id = state.nextId;
//       const priceWithTax = (unitPrice + tax) * quantity;
      
//       state.getById[id] = {
//         id,
//         name,
//         quantity,
//         unitPrice,
//         tax,
//         priceWithTax
//       };
//       state.allIds.push(id);
//       state.nextId += 1;
//     },
//     updateProduct: (state, action) => {
//       const { id, name, quantity, unitPrice, tax } = action.payload;
//       if (state.getById[id]) {
//         const priceWithTax = (unitPrice + tax) * quantity;
//         state.getById[id] = {
//           id,
//           name,
//           quantity,
//           unitPrice,
//           tax,
//           priceWithTax
//         };
//       }
//     }
//   }
// });

// export const {
//   addProduct,
//   updateProduct
// } = productsSlice.actions;

// export default productsSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import { updateInvoicesForProductChange } from './invoiceSlice';

const initialState = {
  getById: {},
  allIds: [],
  nextId: 1,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { name, quantity, unitPrice, tax } = action.payload;
      const id = state.nextId;
      state.getById[id] = { id, name, quantity, unitPrice, tax };
      state.allIds.push(id);
      state.nextId += 1;
    },
    updateProductLocal: (state, action) => {
      const { id, ...updates } = action.payload;
      if (state.getById[id]) {
        state.getById[id] = { ...state.getById[id], ...updates };
      }
    },
  },
});

export const { addProduct, updateProductLocal } = productsSlice.actions;

export const updateProduct = payload => (dispatch, getState) => {
  dispatch(updateProductLocal(payload));
  const state = getState();
  const updatedProduct = state.products.getById[payload.id];
  dispatch(updateInvoicesForProductChange({ productId: payload.id, updatedProduct }));
};

export default productsSlice.reducer;
