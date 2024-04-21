import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// styles
import { GrayText } from '../style/GlobalStyle';

// atoms
import TicketIconUnit from './TicketIconUnit';

// svg
import Icon from './Icon';

/* eslint-disable-next-line */
const RouletteInfoText = ({lowestRankTicket, lowestRankTicketUnit, rouletteDate}) => {
  console.log(lowestRankTicket);
  return (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} direction="row" justifyContent="flex-start" alignItems="center">
      <Grid item>
        <TicketIconUnit ticketType={lowestRankTicket} />
      </Grid>
      <Grid item>
        <GrayText>*{lowestRankTicketUnit} (per unit)</GrayText>
      </Grid>
    </Grid>
    <Box sx={{display: 'flex', mb: 1}}>
      <Box sx={{width: 25, height: 25, ml: 1, mr: 1}}><Icon icon="roulette2" /></Box>
      <GrayText>: {rouletteDate}</GrayText>
    </Box>
  </Box>
);};

export default RouletteInfoText;