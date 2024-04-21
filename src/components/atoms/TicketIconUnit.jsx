import React from 'react';
import { Box } from '@mui/material';

import NormalTickets from '../../Images/normal_tickets.png';
import GoldTickets from '../../Images/gold_tickets.png';
import PremiumTickets from '../../Images/premium_tickets.png';
import PointCoin from '../../Images/pointCoin.png';

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

const CoinIcon = () => (
  <Box sx={{ width: 30, height: 30, mr:1 }}>
    <img src={PointCoin} alt="point coin" style={{ width: '100%', height: '100%' }} />
  </Box>
);

/* eslint-disable-next-line */
const TicketIconUnit = ({ticketType}) => {
  switch(ticketType) {
      case 'NORMAL': return <NormalTicketsIcon />;
      case 'GOLD': return <GoldTicketsIcon />;
      case 'PREMIUM': return <PremiumTicketsIcon />;
      case 'COIN' : return <CoinIcon />;
      default: return <div />;
  }
};

export default TicketIconUnit;