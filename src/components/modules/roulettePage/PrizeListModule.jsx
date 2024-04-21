import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Prize', width: 100, sortable: false },
  {
    field: 'productName',
    headerName: 'Product Name',
    width: 200,
    editable: false,
    sortable: false,
  },
  {
    field: 'winner',
    headerName: 'Winner',
    width: 100,
    editable: false,
    sortable: false,
  },
];

// const rows = [
//   { id: '1st', productName: 'Special Summer T-shirt', winner: '-' },
//   { id: '2nd', productName: 'Cotton Summer T-Shirt', winner: '-' },
//   { id: '3rd', productName: 'T-shirt', winner: '-' },
//   { id: '4th', productName: 'T-shirt', winner: '-' },
//   { id: '5th', productName: 'T-shirt', winner: '-' },
//   { id: '6th', productName: 'T-shirt', winner: '-' },
//   { id: '7th', productName: 'T-shirt', winner: '-' },
//   { id: '8th', productName: 'T-shirt', winner: '-' },
//   { id: '9th', productName: 'T-shirt', winner: '-' },
//   { id: '10th', productName: 'T-shirt', winner: '-' },
// ];

const indicator = (i) => {
  const j = Math.abs(i);
  const cent = j % 100;
  if (cent >= 10 && cent <= 20) return `${j}th`;
  
  const dec = j % 10;
  if (dec === 1) return `${j}st`;
  if (dec === 2) return `${j}nd`;
  if (dec === 3) return `${j}rd`;
  return `${j}th`;
};

/* eslint-disable */
const PrizeListModule = ({prizeInfo}) => {
  const prizeInfoRows = prizeInfo.map((prizeData)=>{
    const res = {id: indicator(prizeData.rank), productName: prizeData.title, winner: '-'};
    if (prizeData.hasOwnProperty('winner_id')) res.winner=prizeData.winner_name;
    return res;
  })
  
  return(
  <div style={{ height: 400, width: "100%" }}>
    <DataGrid
      rows={prizeInfoRows}
      columns={columns}
      headerHeight={45}
      rowHeight={35}
      pageSize={10}
      rowsPerPageOptions={[10]}
      disableColumnMenu
      disableColumnSelector
      hideFooterPagination
      hideFooter
      showCellRightBorder={false}
      showColumnRightBorder={false}
      sx={{ fontSize: 14 }}
    />
  </div>
)};

export default PrizeListModule;
