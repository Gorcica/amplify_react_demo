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
    <img src={GoldTickets} alt="" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const PremiumTicketsIcon = () => (
  <Box sx={{ width: 40, height: 30 }}>
    <img src={PremiumTickets} alt="" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const PastPerformanceCard = () => (
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
        <TitleItem>Past performance</TitleItem>
      </Grid>
      <Grid item />
      <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Grid item sx={4}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <DetailItem>Total</DetailItem>
              </Grid>
              <Grid item>
                <StatusNumber>41</StatusNumber>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item sx={4}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <DetailItem>Rejection</DetailItem>
              </Grid>
              <Grid item>
                <StatusNumber>28</StatusNumber>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item sx={4}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <DetailItem>Winning</DetailItem>
              </Grid>
              <Grid item>
                <StatusNumber>13</StatusNumber>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={2}>
          <NormalTicketsIcon />
        </Grid>
        <Grid item xs={2}>
          <TicketNumber>28</TicketNumber>
        </Grid>
        <Grid item xs={2}>
          <PremiumTicketsIcon />
        </Grid>
        <Grid item xs={2}>
          <TicketNumber>12</TicketNumber>
        </Grid>
        <Grid item xs={2}>
          <GoldTicketsIcon />
        </Grid>
        <Grid item xs={2}>
          <TicketNumber>3</TicketNumber>
        </Grid>
      </Grid>
      <Grid item>
        <DetailsLink>Details</DetailsLink>
      </Grid>
    </Grid>
  </Box>
);

export default PastPerformanceCard;
