import React from 'react';
import { Box } from '@mui/material';

import NormalTickets from '../../Images/normal_tickets.png';
import GoldTickets from '../../Images/gold_tickets.png';
import PremiumTickets from '../../Images/premium_tickets.png';
import PointCoin from '../../Images/pointCoin.png';

const NormalTicketsIcon = () => (
    <img src={NormalTickets} alt="normal tickets" style={{ width: '100%', height: '100%' }} />
);

const GoldTicketsIcon = () => (
    <img src={GoldTickets} alt="gold tickets" style={{ width: '100%', height: '100%' }} />
);

const PremiumTicketsIcon = () => (
    <img src={PremiumTickets} alt="premium tickets" style={{ width: '100%', height: '100%' }} />
);

const CoinIcon = () => (
    <img src={PointCoin} alt="point coin" style={{ width: '100%', height: '100%', marginRight: '1px', display: 'block'}} />
);

/* eslint-disable-next-line */
const TicketIconUnit = ({ticketType}) => {
  switch(ticketType) {
      case 'NORMAL': return <NormalTicketsIcon />;
      case 'GOLD': return <GoldTicketsIcon />;
      case 'PREMIUM': return <PremiumTicketsIcon />;
      case 'COIN' : return (<CoinIcon />);
      default: return <div />;
  }
};

/* eslint-disable-next-line */
const TicketIconUnitResizable = ({ticketType, width, height})=>(
  <Box sx={{ width, height, alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
    <TicketIconUnit ticketType={ticketType} />
  </Box>
);

export default TicketIconUnitResizable;