import * as React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ShippedCard from './shippedStatusPage/ShippedCard';

const testWinnginList = [{
  productId: '11',
  productTitle: 'testShippedProd',
  categoryName: 'Test',
  lowestRankTicket: 'normal',
  lowestRankTicketUnit: 5,
  rouletteDate: '2023-05-01',
  limitUnit: 20,
  participatingUnit: 2,
  prizeRank: 2,
  prizeName: '2nd-Prize',
  deliveryStatus: 'Not Yet',
  trackingNumber: '111111'
}];

const ShippedStatus = () => {
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);
  console.log(userInfo.winningList);
  
  const shippedCardPropsArray1 = userInfo.winningList ? userInfo.winningList.map((item)=>({
    productId: item.product_id,
    productTitle: item.product_name,
    categoryName: item.category_name,
    lowestRankTicket: item.lowest_rank,
    lowestRankTicketUnit: item.lowest_rank_ticket_unit,
    rouletteDate: item.roulette_date,
    limitUnit: item.limit_sheets,
    participatingUnit: item.amount,
    prizeRank: item.prize_info.rank,
    prizeName: item.prize_info.title,
    deliveryStatus: item.delivery_status.status,
    trackingNumber: item.delivery_status.tracking_number
  })) : testWinnginList;
  
  console.log(shippedCardPropsArray1);
  
  
  return (
    <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
      <FormGroup>
        <FormControlLabel control={<Switch />} label="Not display expired roulette" />
      </FormGroup>
      <Grid container spacing={2}>
        {shippedCardPropsArray1.map((shippedCardProps)=>(
          <Grid item xs={12} sm={6} md={3} key={shippedCardProps.productId} >
            <ShippedCard {...shippedCardProps} />
          </Grid>
        ))}
      </Grid>
    </Box>
);};

export default ShippedStatus;
