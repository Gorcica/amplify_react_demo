import React from 'react';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
// style
import { TagName, ProductName, BlackText } from '../style/EntryListStyle';

// atoms
import RouletteInfoText from './RouletteInfoText';
import RouletteLink from './RouletteLink';
import EntryParticipatingUnit from './EntryParticipatingUnit';


/* eslint-disable-next-line */
const ProductTitle = ({productTitle, categoryName, productId}) => {
  const navigate = useNavigate();
  console.log(categoryName);
  return(
    <Box>
      <TagName>{categoryName}</TagName>
      <ProductName onClick={()=>{navigate(`../productDetail/${productId}`)}}>{productTitle}</ProductName>
    </Box>
  );};

const Spacer = () => <Box sx={{ height: 10 }} />;

/* eslint-disable-next-line */
// const EntryProductCaption = ({productId, productTitle, categoryName, rouletteDate, lowestRankTicket, lowestRankTicketUnit, participatingUnit, ticketInfo, limitUnit, handleEntryProduct}) => (
//   <Box sx={{ flexGrow: 1 }}>
//     <Grid container spacing={0} direction="column" justifyContent="center" alignItems="flex-start">
//       <ProductTitle productTitle={productTitle} categoryName={categoryName} productId={productId}/>
//       <Spacer />
//       <RouletteInfoText rouletteDate={rouletteDate} lowestRankTicket={lowestRankTicket} lowestRankTicketUnit={lowestRankTicketUnit} />
//       <RouletteLink rouletteDate={rouletteDate} productId={productId} />
//       <Spacer />
//       <BlackText>Limit Unit: {limitUnit}</BlackText>
//       <Spacer />
//       <BlackText>Participating Unit</BlackText>
//       <EntryParticipatingUnit participatingUnit={participatingUnit} ticketInfo={ticketInfo} productId={productId}/>
//     </Grid>
//   </Box>
// );

/* eslint-disable-next-line */
const EntryProductCaption2 = ({productId, productTitle, categoryName, rouletteDate, lowestRankTicket, lowestRankTicketUnit, participatingUnit, ticketInfo, limitUnit, handleEntryProduct}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <ProductTitle productTitle={productTitle} categoryName={categoryName} productId={productId}/>
    <Spacer />
    <RouletteInfoText rouletteDate={rouletteDate} lowestRankTicket={lowestRankTicket} lowestRankTicketUnit={lowestRankTicketUnit} />
    <RouletteLink rouletteDate={rouletteDate} productId={productId} />
    <Spacer />
    <BlackText>Participating Unit</BlackText>
    <EntryParticipatingUnit participatingUnit={participatingUnit} ticketInfo={ticketInfo} productId={productId}/>
  </Box>
);

export default EntryProductCaption2;