import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

import axios from 'axios';

// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Icon from './Icon';

// atoms
import TicketInfoText from './TicketInfoText';

// style
import { BlackText } from '../style/EntryListStyle';

const WideSpacer = () => <Box sx={{ height: 20 }} />;

/* eslint-disable-next-line */
const EntryParticipatingUnit = ({participatingUnit, ticketInfo, productId}) => {
  const navigate = useNavigate();
  const userId = useSelector((state)=>state.userInfo.userId);
  // const handleEntryProduct =  () =>  {
  //   const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/entry-wishlist-commit-unit';
  //   const postBody = {
  //     Keys: {
  //       user_id: userId,
  //       product_id: productId
  //     }
  //   };
  //   console.log(postBody)
  //   axios.post(baseUrl, postBody).then((response)=>{
  //     console.log(response)
  //     navigate('/mypage', {state:{tabValue:1}});
  //   });
  // };
  
  const  handleCancelProduct =  () =>  {
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/entry-cancel';
    const postBody = {
      Keys: {
        user_id: userId,
        cancel_product_id: productId
      }
    };
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
        <Box sx={{ height: 10 }} />
        <BlackText>Used Tickets</BlackText>
        <Box sx={{ display:'flex', flexDirection: 'row', justifyContent:"flex-start", alignItems:"center" , mt: 1, mb: 1}}>
          <TicketInfoText ticketInfo={ticketInfo} />
        </Box>
        <Button onClick={handleCancelProduct} style={{textTransform:'none', minWidth: 10}} sx={{pl: 0.5, pr: 0, color: 'red', mt: 1, mb: 1}}>
            <Icon icon="trash" />
        </Button>
      </Box>
    </Box>
  );
};

export default EntryParticipatingUnit;