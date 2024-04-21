import * as React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import TicketIconUnitResizable from '../../atoms/TicketIconUnitResizable';



// eslint-disable-next-line
const WishListTable = ({productArray}) => {
  const userInfo = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const handleEntryProduct = async (productId) =>  {
    console.log('test!!');
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/entry-wishlist-commit-unit';
    const postBody = {
      Keys: {
        user_id: userInfo.userId,
        product_id: productId
      }
    };
    console.log(postBody)
    await axios.post(baseUrl, postBody).then((response)=>{
      console.log(response)
      navigate('/mypage', {state:{tabValue:2}});
    }).catch(error=>{console.log(error)});
  };
  
  // eslint-disable-next-line
  const rows1 = productArray.map((item, index)=>({
      id: index+1,
      image: item.pictures,
      date: item.rouletteDate,
      productName: item.productTitle,
      unitNum: item.participatingUnit,
      normalTicket: item.ticketInfo.normal,
      goldTicket: item.ticketInfo.gold,
      premiumTicket: item.ticketInfo.premium,
      productId: item.productId
    })
  );
  const rows2 = rows1.sort((a, b) => (a.date > b.date) ? -1 : 1);
  console.log(rows2);
  // eslint-disable-next-line
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
      field: 'productName',
      headerName: 'Product name',
      width: 150,
      editable: false,
    },
    {
      field: 'image',
      headerName: 'Image',
      width: 130,
      renderCell: (params) => (
        <img src={params.value} alt={params.row.productName} style={{ height: 100, width: 100 }} />
      ),
    },
    { field: 'date', headerName: 'Roulette Date', width: 200 },
    {
      field: 'unitNum',
      headerName: 'Unit',
      width: 80,
      editable: false,
    },
    {
      field: 'normalTicket',
      headerName: 'Normal',
      type: 'number',
      width: 100,
      editable: false,
      renderHeader: () => (
        <strong>
          <span role="img" aria-label="enjoy">
            <TicketIconUnitResizable ticketType="NORMAL" width={36} height={27} />
          </span>
        </strong>
      )
    },
    {
      field: 'goldTicket',
      headerName: 'Gold',
      type: 'number',
      width: 100,
      editable: false,
      renderHeader: () => (
        <strong>
          <span role="img" aria-label="enjoy">
            <TicketIconUnitResizable ticketType="GOLD" width={36} height={27} />
          </span>
        </strong>
      )
    },
    {
      field: 'premiumTicket',
      headerName: 'Premium',
      type: 'number',
      width: 100,
      editable: false,
      renderHeader: () => (
        <strong>
          <span role="img" aria-label="enjoy">
            <TicketIconUnitResizable ticketType="PREMIUM" width={36} height={27} />
          </span>
        </strong>
      )
    },
    {
      field: 'participate',
      headerName: 'Participate!',
      width: 150,
      renderCell: (params) => (
        <Button variant="contained" color="primary" sx={{textTransform: 'none'}} onClick={() => handleEntryProduct(params.row.productId)}>
          Participate!
        </Button>
      ),
    },
  ];
  
  return (
  <div style={{ height: 650, width: '80%' }}>
    <DataGrid
      rows={rows2}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      autoHeight
      autoPageSize
      disableSelectionOnClick
    />
  </div>
);};

export default WishListTable;
