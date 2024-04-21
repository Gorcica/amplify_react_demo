import React from 'react';

import { Box } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

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

const makeTicketDisableFlag =(ticket) =>{
  switch(ticket){
    case 'NORMAL':
      return ({
        disableNormalTicket: false,
        disableGoldTicket: false,
        disablePremiumTicket: false
      });
    case 'GOLD':
      return ({
        disableNormalTicket: true,
        disableGoldTicket: false,
        disablePremiumTicket: false
      });
    case 'PREMIUM':
      return ({
        disableNormalTicket: true,
        disableGoldTicket: true,
        disablePremiumTicket: false
      });
    default:
      return ({
        disableNormalTicket: false,
        disableGoldTicket: false,
        disablePremiumTicket: false
      });
}};


/* eslint-disable-next-line */
const SelectTicketBox = ({ticket, setTicket, lowestRank}) => {
  // ticket select box
  
  
  const selectTicket = (event) => {
    setTicket(event.target.value);
  };
  
  const { disableNormalTicket, disableGoldTicket, disablePremiumTicket} = makeTicketDisableFlag(lowestRank);
  
  return (
  <Box sx={{ width: '100%', height:40 }}>
    <FormControl fullWidth>
      <InputLabel id="ticket-select-label">Ticket</InputLabel>
      <Select labelId="ticket-select-label" id="ticket-select" value={ticket} label="Ticket" onChange={selectTicket} size="small" sx={{height: 40}}>
        <MenuItem value="NORMAL" disabled={disableNormalTicket} sx={{display: 'flex', flexDirection:"row", justifyContent: 'start', alignItems:'center'}}>
          <Box sx={{display: 'flex', flexDirection:"row", justifyContent: 'start', alignItems:'center'}}>
            <NormalTicketsIcon />
            <Typography>Normal Ticket</Typography>
          </Box>
        </MenuItem>
        <MenuItem value="GOLD" disabled={disableGoldTicket} sx={{display: 'flex', flexDirection:"row", justifyContent: 'start', alignItems:'center'}}>
          <Box sx={{display: 'flex', flexDirection:"row", justifyContent: 'start', alignItems:'center'}}>
            <GoldTicketsIcon />
            <Typography>Gold Ticket</Typography>
          </Box>
        </MenuItem>
        <MenuItem value="PREMIUM" disabled={disablePremiumTicket} sx={{display: 'flex', flexDirection:"row", justifyContent: 'start', alignItems:'center'}}>
          <Box sx={{display: 'flex', flexDirection:"row", justifyContent: 'start', alignItems:'center'}}>
            <PremiumTicketsIcon />
            <Typography>Premium Ticket</Typography>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  </Box>
);};

export default SelectTicketBox;