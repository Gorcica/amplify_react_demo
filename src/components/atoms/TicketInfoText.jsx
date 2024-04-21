import React from 'react';
import Grid from '@mui/material/Grid';

// styles
import { GrayText } from '../style/GlobalStyle';

// atoms
import TicketIconUnit from './TicketIconUnit';

const TicketInfoText = ({ticketInfo}) => (
    /* eslint-disable-next-line */
    Object.keys(ticketInfo).map(key=>(
      <Grid item container key={key} xs={4} spacing={0} direction="row" justifyContent="flex-start" alignItems="center">
        <Grid item>
          <TicketIconUnit ticketType={key.toUpperCase()} />
        </Grid>
        <Grid item>
          <GrayText>*{ticketInfo[key]}</GrayText>
        </Grid>
      </Grid>)
    )
);

export default TicketInfoText;