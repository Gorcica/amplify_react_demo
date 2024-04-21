import React from 'react';
import { Box } from '@mui/material';

import GCash from '../../Images/GCashLogo.jpg';

const GCashIcon = () => (
    <img src={GCash} alt="gcash" style={{ width: '100%', height: '100%' }} />
);

/* eslint-disable-next-line */
const CasherIconUnit = ({casherType}) => {
  switch(casherType) {
      case 'GCash': return <GCashIcon />;
      default: return <div />;
  }
};

/* eslint-disable-next-line */
const CasherIconUnitResizable = ({casherType, width, height, marginRight})=>(
  <Box sx={{ width, height, marginRight }}>
    <CasherIconUnit casherType={casherType} />
  </Box>
);

export default CasherIconUnitResizable;