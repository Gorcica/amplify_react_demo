import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import OrderList from './yourOrdersPage/OrdersList';

const YourOrdersPage = () => (
  <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
    <Grid container direction="column" justifyContent="center" alignItems="center">
      Your Orders
      <OrderList />
    </Grid>
  </Box>
);

export default YourOrdersPage;
