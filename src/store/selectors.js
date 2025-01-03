import { createSelector } from 'reselect';

// Base selectors for each slice
const selectCustomersState = state => state.customers;
const selectProductsState = state => state.products;
const selectInvoicesState = state => state.invoices;

// Memoized intermediate selectors for customers
const selectCustomerIds = createSelector(
  [selectCustomersState],
  customers => customers.allIds
);

const selectCustomerById = createSelector(
  [selectCustomersState],
  customers => customers.getById
);

// Memoized intermediate selectors for products
const selectProductIds = createSelector(
  [selectProductsState],
  products => products.allIds
);

const selectProductById = createSelector(
  [selectProductsState],
  products => products.getById
);

// Memoized intermediate selectors for invoices
const selectInvoiceIds = createSelector(
  [selectInvoicesState],
  invoices => invoices.allIds
);

const selectInvoiceById = createSelector(
  [selectInvoicesState],
  invoices => invoices.getById
);

// Final memoized selectors that combine the intermediate results
export const selectCustomers = createSelector(
  [selectCustomerIds, selectCustomerById],
  (ids, byId) => ids.map(id => byId[id])
);

export const selectProducts = createSelector(
  [selectProductIds, selectProductById],
  (ids, byId) => ids.map(id => byId[id])
);

export const selectInvoices = createSelector(
  [selectInvoiceIds, selectInvoiceById],
  (ids, byId) => ids.map(id => byId[id])
);

// Individual selectors for single items
export const makeSelectCustomerById = () =>
  createSelector(
    [selectCustomerById, (_, id) => id],
    (byId, id) => byId[id]
);

export const makeSelectProductById = () =>
  createSelector(
    [selectProductById, (_, id) => id],
    (byId, id) => byId[id]
);

export const makeSelectInvoiceById = () =>
  createSelector(
    [selectInvoiceById, (_, id) => id],
    (byId, id) => byId[id]
);

// Additional useful selectors for derived data
export const selectTotalCustomers = createSelector(
  [selectCustomerIds],
  ids => ids.length
);

export const selectTotalProducts = createSelector(
  [selectProductIds],
  ids => ids.length
);

export const selectTotalInvoices = createSelector(
  [selectInvoiceIds],
  ids => ids.length
);

// import { createSelector } from "reselect";

// const selectState = (state) => state.app;

// // Customers
// export const selectCustomers = createSelector(
//   [selectState],
//   (app) => app.customers.allIds.map((id) => app.customers.byId[id])
// );

// // Products
// export const selectProducts = createSelector(
//   [selectState],
//   (app) => app.products.allIds.map((id) => app.products.byId[id])
// );

// // Invoices
// export const selectInvoices = createSelector(
//   [selectState],
//   (app) =>
//     app.invoices.allIds.map((id) => {
//       const invoice = app.invoices.byId[id];
//       const customer = app.customers.byId[invoice.customerId];
//       const product = app.products.byId[invoice.productId];
//       return {
//         ...invoice,
//         customerName: customer?.customerName,
//         productName: product?.name,
//       };
//     })
// );
