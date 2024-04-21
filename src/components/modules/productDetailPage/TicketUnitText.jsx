import { Box } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';

import NormalTickets from '../../../Images/normal_tickets.png';
import GoldTickets from '../../../Images/gold_tickets.png';
import PremiumTickets from '../../../Images/premium_tickets.png';

const NormalTicketsIcon = () => (
  <Box sx={{ width: 40, height: 30 }}>
    <img src={NormalTickets} alt="normal tickets" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const GoldTicketsIcon = () => (
  <Box sx={{ width: 40, height: 30 }}>
    <img src={GoldTickets} alt="gold tickets" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const PremiumTicketsIcon = () => (
  <Box sx={{ width: 40, height: 30 }}>
    <img src={PremiumTickets} alt="premium tickets" style={{ width: '100%', height: '100%' }} />
  </Box>
);

/* eslint-disable-next-line */
const TicketsIcon = ({ticketRank}) => {
    switch (ticketRank) 
        {
            case 'NORMAL' : return <NormalTicketsIcon />;
            case 'GOLD' : return <GoldTicketsIcon />;
            case 'PREMIUM' : return <PremiumTicketsIcon />;
            default: return <div />;
        }
};

/* eslint-disable-next-line */
const TicketUnitText = ({ticketRank, ticketUnit}) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container alignItems="center">
      <Grid item>
        <TicketsIcon ticketRank={ticketRank} />
      </Grid>
      <Grid item>*{ticketUnit}</Grid>
    </Grid>
  </Box>
);

export default TicketUnitText;