import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link as TransisionLink } from 'react-router-dom';
// style
import { TagName, ProductName, BlackText } from '../style/LoginTopStyle';

// atoms
import RouletteInfoText from './RouletteInfoText';


/* eslint-disable-next-line */
const ProductTitle = ({productTitle, categoryName}) => (
    <Box sx={{ flexGrow: 1 }}>
      <TagName>{categoryName}</TagName>
      <TransisionLink to="../productDetail">
        <ProductName>{productTitle}</ProductName>
      </TransisionLink>
    </Box>
  );

const Spacer = () => <Box sx={{ height: 10 }} />;

/* eslint-disable-next-line */
const ShippingProductCaption = ({productTitle, categoryName, rouletteDate, lowestRankTicket, lowestRankTicketUnit, participatingUnit, ticketInfo, limitUnit, prizeRank, prizeName, deliveryStatus, trackingNumber}) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} direction="column" justifyContent="center" alignItems="flex-start">
      <ProductTitle productTitle={productTitle} categoryName={categoryName}/>
      <Spacer />
      <RouletteInfoText rouletteDate={rouletteDate} lowestRankTicket={lowestRankTicket} lowestRankTicketUnit={lowestRankTicketUnit} />
      <Spacer />
      <BlackText>Participating Unit: {participatingUnit}</BlackText>
      <Spacer />
      <BlackText>Prize Rank: {prizeRank}</BlackText>
      <BlackText>Prize Name: {prizeName}</BlackText>
      <Spacer />
      <BlackText>Status: {deliveryStatus}</BlackText>
      {trackingNumber ? <BlackText>Tracking Number: {trackingNumber}</BlackText> : <div />}
    </Grid>
  </Box>
);

export default ShippingProductCaption;