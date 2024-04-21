import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const StatusNumber = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#1A2027',
  fontSize: 30,
}));

const NotyetBox = () => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      minWidth: 300,
      minHeight: 150,
      border: 1,
    }}
  >
    <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
      <StatusNumber>Not yet</StatusNumber>
      <StatusNumber>2</StatusNumber>
    </Grid>
  </Box>
);

const Shipping = () => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      minWidth: 300,
      minHeight: 150,
      border: 1,
    }}
  >
    <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
      <StatusNumber>Shipping</StatusNumber>
      <StatusNumber>2</StatusNumber>
    </Grid>
  </Box>
);

const DoneBox = () => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      minWidth: 300,
      minHeight: 150,
      border: 1,
    }}
  >
    <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
      <StatusNumber>Done</StatusNumber>
      <StatusNumber>9</StatusNumber>
    </Grid>
  </Box>
);

const ShippedStatus = () => (
  <Box
    sx={{
      flexGrow: 1,
      p: 2,
      maxWidth: 1000,
    }}
  >
    <Grid container spacing={12} direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <NotyetBox />
      </Grid>
      <Grid item xs={4}>
        <Shipping />
      </Grid>
      <Grid item xs={4}>
        <DoneBox />
      </Grid>
    </Grid>
  </Box>
);

export default ShippedStatus;
