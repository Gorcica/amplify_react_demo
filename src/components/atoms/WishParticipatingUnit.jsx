import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

import axios from 'axios';

// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// atoms
import TicketInfoText from './TicketInfoText';

const WideSpacer = () => <Box sx={{ height: 20 }} />;

/* eslint-disable-next-line */
const WishParticipatingUnit = ({participatingUnit, ticketInfo, productId}) => {
  const navigate = useNavigate();
  const userId = useSelector((state)=>state.userInfo.userId);
  const handleEntryProduct =  () =>  {
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/entry-wishlist-commit-unit';
    const postBody = {
      Keys: {
        user_id: userId,
        product_id: productId
      }
    };
    console.log(postBody)
    axios.post(baseUrl, postBody).then((response)=>{
      console.log(response)
      navigate('/mypage', {state:{tabValue:1}});
    });
  };
  
  const  handleCancelProduct =  () =>  {
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/entry-wishlist-cancel';
    const postBody = {
      Keys: {
        user_id: userId,
        cancel_product_id: productId
      }
    };
    console.log(postBody)
    axios.post(baseUrl, postBody).then((response)=>{
      console.log(response)
      navigate('/mypage', {state:{tabValue:1}});
    });
  };
  
  
  return (
    <Box sx={{ display:'flex', justifyContent:"flex-start", alignItems:"center" }}>
      <WideSpacer />
      <Box sx={{ display:'flex', flexDirection: 'column', justifyContent:"start", alignItems:"start" }}>
        <Button variant="outlined">unit: {participatingUnit}</Button>
        <Box sx={{ display:'flex', flexDirection: 'row', justifyContent:"flex-start", alignItems:"center" , mt: 1}}>
          <TicketInfoText ticketInfo={ticketInfo} />
        </Box>
        <Box sx={{ display:'flex', justifyContent:"flex-start", alignItems:"center" }}>
          <Button onClick={handleEntryProduct} style={{textTransform:'none'}}>
            Checkout
          </Button>
          <Button onClick={handleCancelProduct} style={{textTransform:'none'}}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
)};

export default WishParticipatingUnit;