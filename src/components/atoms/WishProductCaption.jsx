import React from 'react';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link as TransisionLink } from 'react-router-dom';
// style
import { TagName, ProductName, BlackText } from '../style/EntryListStyle';

// atoms
import RouletteInfoText from './RouletteInfoText';
import WishParticipatingUnit from './WishParticipatingUnit';


/* eslint-disable-next-line */
const ProductTitle = ({productTitle, categoryName, productId}) => (
    <Box>
      <TagName>{categoryName}</TagName>
      <TransisionLink to={`../productDetail/${productId}`}>
        <ProductName>{productTitle}</ProductName>
      </TransisionLink>
    </Box>
  );

const Spacer = () => <Box sx={{ height: 10 }} />;

/* eslint-disable-next-line */
const WishProductCaption = ({productId, productTitle, categoryName, rouletteDate, lowestRankTicket, lowestRankTicketUnit, participatingUnit, ticketInfo, limitUnit, handleEntryProduct}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <ProductTitle productTitle={productTitle} categoryName={categoryName} productId={productId}/>
    <Spacer />
    <RouletteInfoText rouletteDate={rouletteDate} lowestRankTicket={lowestRankTicket} lowestRankTicketUnit={lowestRankTicketUnit} />
    <Spacer />
    <BlackText>Limit Unit: {limitUnit}</BlackText>
    <Spacer />
    <BlackText>Participating Unit</BlackText>
    <WishParticipatingUnit participatingUnit={participatingUnit} ticketInfo={ticketInfo} productId={productId}/>
  </Box>
);

export default WishProductCaption;