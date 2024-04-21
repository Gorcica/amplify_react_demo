import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { DataGrid } from '@mui/x-data-grid';

import TicketIconUnitResizable from '../../atoms/TicketIconUnitResizable';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'date', headerName: 'Date', width: 200 },
  {
    field: 'productName',
    headerName: 'Product name',
    width: 300,
    editable: false,
  },
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
    field: 'coin',
    headerName: 'Coin',
    type: 'number',
    width: 100,
    editable: false,
    renderHeader: () => (
      <strong>
        <span role="img" aria-label="enjoy">
          <TicketIconUnitResizable ticketType="COIN" width={27} height={27} />
        </span>
      </strong>
    )
  },
  {
    field: 'money',
    headerName: 'Money',
    width: 200,
    editable: false,
  },
];


// ID欄削除
// Unit/normal/gold/premiumの欄縮小


/*
const testRows = [
  {
    id: 1,
    date: '14/02/2022 12:00:00',
    productName: 'Summer T-Shirt',
    unitNum: 'Unit:2',
    blueTicket: 0,
    yellowTicket: 0,
    redTicket: -1,
    coin: 0,
    money: '-',
  },
  {
    id: 2,
    date: '14/02/2022 11:00:00',
    productName: 'Premium Ticket * 1 + 30 Points',
    unitNum: 'Unit:1',
    blueTicket: 0,
    yellowTicket: 0,
    redTicket: +1,
    coin: +30,
    money: 'P$1,000',
  },
  {
    id: 3,
    date: '14/02/2022 10:00:00',
    productName: 'Premium Ticket * 1 ',
    unitNum: 'Unit:1',
    blueTicket: 0,
    yellowTicket: 0,
    redTicket: +1,
    coin: -400,
    money: '-',
  },
  {
    id: 4,
    date: '14/02/2022 10:00:00',
    productName: 'Premium Ticket * 1 ',
    unitNum: 'Unit:1',
    blueTicket: 0,
    yellowTicket: 0,
    redTicket: +1,
    coin: -400,
    money: '-',
  },
  {
    id: 5,
    date: '14/02/2022 10:00:00',
    productName: 'Premium Ticket * 1 ',
    unitNum: 'Unit:1',
    blueTicket: 0,
    yellowTicket: 0,
    redTicket: +1,
    coin: -400,
    money: '-',
  },
]; */

const OrderList = () => {
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);
  const userId = userInfo.userId ? userInfo.userId : localStorage.getItem('userId');
  const [rows, setRows] = useState([]);
  useEffect(()=>{
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/log-get-info';
    const postBody = {
      Keys:{
        user_id: userId
      }
    };
    console.log(postBody);
    axios.post(baseUrl, postBody)
      .then((response)=>{
        console.log(response);
        const items = response.data.Item;
        const rows1 = items.map((item)=>{
          const moneyString = (item.money.amount === 0 ) ? '-' : `P$ ${item.money.amount.toLocaleString()}-`;
          return ({
            id: item.log_id,
            date: item.logtime,
            productName: item.production.product_name,
            unitNum: item.production.amount,
            normalTicket: item.tickets.normal,
            goldTicket: item.tickets.gold,
            premiumTicket: item.tickets.premium,
            coin: item.points,
            money: moneyString
          })
        });
        const rows2 = rows1.sort((a, b) => (a.date > b.date) ? -1 : 1);
        console.log(rows2);
        setRows(rows2);
      });
  // eslint-disable-next-line
  }, []);
  
  return (
  <div style={{ height: 650, width: '80%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      autoHeight
      autoPageSize
      disableSelectionOnClick
    />
  </div>
);};

export default OrderList;
