import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link as TransisionLink } from 'react-router-dom';
// style
import { TagName, ProductName, BlackText, RedText } from '../style/LoginTopStyle';

// atoms
import RouletteInfoText from './RouletteInfoText';
import ParticipatingUnit from './ParticipatingUnit';


/* eslint-disable-next-line */
const ProductTitle = ({productId,productTitle, categoryName}) => (
    <Box sx={{ flexGrow: 1, overflow:"hidden" }}>
      <TagName>{categoryName}</TagName>
      <TransisionLink to={"../productDetail/"+productId}>
        <ProductName>{productTitle}</ProductName>
      </TransisionLink>
    </Box>
  );

const Spacer = () => <Box sx={{ height: 10 }} />;

/* eslint-disable-next-line */
const EntryProductCaption = ({productId, productTitle, categoryName, rouletteDate, lowestRankTicket, lowestRankTicketUnit, participatingUnit, ticketInfo, limitUnit}) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} direction="column" justifyContent="center" alignItems="flex-start">
      <ProductTitle productTitle={productTitle} categoryName={categoryName} productId={productId}/>
      <Spacer />
      <RouletteInfoText rouletteDate={rouletteDate} lowestRankTicket={lowestRankTicket} lowestRankTicketUnit={lowestRankTicketUnit} />
      <TransisionLink to="../roulette">
        <RedText>Roulette Now!</RedText>
      </TransisionLink>
      <Spacer />
      <BlackText>Limit Unit: {limitUnit}</BlackText>
      <Spacer />
      <BlackText>Participating Unit</BlackText>
      <ParticipatingUnit participatingUnit={participatingUnit} ticketInfo={ticketInfo} />
    </Grid>
  </Box>
);

export default EntryProductCaption;