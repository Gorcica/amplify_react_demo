import * as React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import WishListCard from './wishListPage/WishListCard';
import WishListTable from './wishListPage/WishListTable';

const Caution = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#ff0000',
  fontSize: 18,
}));

const EntryStatus = () => {
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);
  
  const handleEntryProduct = (productId) => () =>  {
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/entry-wishlist-commit-unit';
    const postBody = {
      Keys: {
        user_id: userInfo.userId,
        product_id: productId
      }
    };
    console.log(postBody)
    axios.post(baseUrl, postBody).then((response)=>{console.log(response)});
  };

  const entryCardPropsArray = userInfo.wishList.map((item)=>({
    productId: item.product_id,
    productTitle: item.product_name,
    categoryName: item.category_name,
    lowestRankTicket: item.lowest_rank,
    lowestRankTicketUnit:item.lowest_rank_ticket_unit,
    rouletteDate: item.roulette_date,
    limitUnit: item.limit_sheets,
    participatingUnit: item.amount,
    ticketInfo:{
      normal:item.tickets.normal,
      gold:item.tickets.gold,
      premium:item.tickets.premium
    },
    handleEntryProduct: handleEntryProduct(item.productId),
    pictures:item.pictures
  }));
  console.log(entryCardPropsArray);
  
  const entryAllProducts = () => {
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/entry-wishlist-commit';
    const postBody = {
      Keys: {
        user_id: userInfo.userId
      }
    };
    axios.post(baseUrl, postBody).then((response)=>{console.log(response)});
  };
  
  
  return(
    <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
      <Caution>You can edit and delete roulette unit up to 2 hours before the roulette starts.</Caution>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Not display expired roulette" />
      </FormGroup>
      <Button color='success' onClick={entryAllProducts}>Entry All Products!</Button>
      <Box sx={{display: 'flex', flexWrap: 'wrap' }}>
          {/* entryCardPropsArray.map((entryCardProps)=>(
              <WishListCard {...entryCardProps} />
          )) */}
          <WishListTable productArray={entryCardPropsArray} />
      </Box>
    </Box>
  );
};

export default EntryStatus;
