
import { DataGrid, GridActionsCellItem, GridRowModes, GridRowModesModel } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, updateProduct } from '../store/productSlice';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectProducts } from '../store/selectors';
import { useState } from 'react';
// import { updateProduct } from '../store/appSlice';

const Product = () => {
  const dispatch = useDispatch();
  const rows = useSelector(selectProducts);
  console.log("products:", rows)
  const [rowModesModel, setRowModesModel] = useState({});

  const handleEditClick = (id) => () => {
    setRowModesModel((prev) => ({
      ...prev,
      [id]: { mode: GridRowModes.Edit },
    }));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel((prev) => ({
      ...prev,
      [id]: { mode: GridRowModes.View },
    }));
  };

  const handleSaveClick = (id) => () => {
    console.log(id);
    setRowModesModel((prev) => ({
      ...prev,
      [id]: { mode: GridRowModes.View },
    }));

    const updatedRow = rows.find((row) => row.id === id);
    if (updatedRow) {
      dispatch(updateProduct(updatedRow));
    }
  };

  const handleRowEditStop = (params) => {
    const { id, field, value } = params;
    const updatedRow = rows.find((row) => row.id === id);
    if (updatedRow) {
      updatedRow[field] = value;
      dispatch(updateProduct(updatedRow)); 
    }
  };


  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 100, editable: true },
    { field: 'unitPrice', headerName: 'Unit Price', type: 'number', width: 120, editable: true },
    { field: 'tax', headerName: 'Tax', type: 'number', width: 100, editable: true },
    { field: 'priceWithTax', headerName: 'Price With Tax', type: 'number', width: 160, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              key="save"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              onClick={handleCancelClick(id)}
              key="cancel"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={handleEditClick(id)}
            key="edit"
          />
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={setRowModesModel}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={handleRowEditStop}
      />
    </Box>
  );
};

export default Product;
