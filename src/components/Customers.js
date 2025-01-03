import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { selectCustomers } from '../store/selectors';

const Customers = () => {
  const customers = useSelector(selectCustomers);
  const cusMap = useSelector(state => state.customers?.getById);

  console.log(customers, cusMap);

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'customerName', headerName: 'Customer Name', width: 180, editable: true },
    { field: 'phoneNumber', headerName: 'Phone', width: 150, editable: true },
    { 
      field: 'totalPurchaseAmount', 
      headerName: 'Total Purchase', 
      width: 160,
      valueFormatter: (params) => {
        if (typeof params.value === 'number') {
          return `$${params.value.toFixed(2)}`;
        }
        return params.value;
      },
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={customers} 
        columns={columns}  
        pageSize={5}  
        rowsPerPageOptions={[5]}  
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Customers;