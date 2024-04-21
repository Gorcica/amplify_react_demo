import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import NormalTickets from '../../../Images/normal_tickets.png';
import GoldTickets from '../../../Images/gold_tickets.png';
import PremiumTickets from '../../../Images/premium_tickets.png';

const TitleItem = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#1A2027',
  fontSize: 22,
}));

const DetailItem = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#1A2027',
  fontSize: 18,
}));

const StatusNumber = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#1A2027',
  fontSize: 30,
}));

const TicketNumber = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#1A2027',
  fontSize: 18,
}));

const DetailsLink = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#a9a9a9',
  fontSize: 16,
}));

const NormalTicketsIcon = () => (
  <Box sx={{ width: 40, height: 30 }}>
    <img src={NormalTickets} alt="" style={{ width: '100%', height: '100%' }} />
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

const EntryCard = () => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      minWidth: '50%',
      minHeight: 250,
      border: 1,
    }}
  >
    <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <TitleItem>Entry</TitleItem>
      </Grid>
      <Grid item>
        <DetailItem>Current number of entries</DetailItem>
      </Grid>
      <Grid item>
        <StatusNumber>22</StatusNumber>
      </Grid>

      <Grid item>
        <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
          <NormalTicketsIcon />
          <TicketNumber>28</TicketNumber>
          <PremiumTicketsIcon />
          <TicketNumber>12</TicketNumber>
          <GoldTicketsIcon />
          <TicketNumber>3</TicketNumber>
        </Grid>
      </Grid>
      <DetailsLink>Details</DetailsLink>
    </Grid>
  </Box>
);

export default EntryCard;
