import * as React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Dashboard', width: 400, sortable: false },
  {
    field: 'num',
    headerName: ' ',
    width: 200,
    editable: false,
    sortable: false,
  },
];

/* eslint-disable */
const DashboardModule = ({entryUsers, prizeInfo}) => {
  console.log(prizeInfo);
  const amountPrize = prizeInfo.length;
  console.log(amountPrize);

  console.log(entryUsers);
  const totalNumberOfParticipants = entryUsers.participants.reduce((prev, curr)=>prev + curr.amount, 0);
  const rouletteCount = useSelector(state=>state.rouletteCount.value);
  let numberOfUnsuccessfulParticipants = 0;
  let numberOfWinners = 0;
  
  if (rouletteCount + amountPrize <= totalNumberOfParticipants) {
    numberOfUnsuccessfulParticipants = rouletteCount;
    numberOfWinners = 0;
  }
  else {
    numberOfUnsuccessfulParticipants = totalNumberOfParticipants - amountPrize;
    numberOfWinners = rouletteCount - numberOfUnsuccessfulParticipants;
  }
  
  const numberOfParticipantsLeft = totalNumberOfParticipants - rouletteCount;
  
  const rows = [
    { id: 'Total number of participants', num: totalNumberOfParticipants },
    { id: 'Number of unsuccessful participants', num: numberOfUnsuccessfulParticipants },
    { id: 'Number of participants left', num: numberOfParticipantsLeft },
    { id: 'Number of Winners', num: numberOfWinners },
  ];
  return (
  <div style={{ height: 190, width: 600 }}>
    <DataGrid
      rows={rows}
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

export default DashboardModule;
