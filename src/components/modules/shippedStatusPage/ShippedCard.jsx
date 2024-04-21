import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LocalActivityIcon from '@mui/icons-material/LocalActivity';
// import { blue } from '@mui/material/colors';
import { Link as TransisionLink } from 'react-router-dom';
import SampleProductImage from '../../../sampleImages/sample_tshirt_men.png';

// Style
// import { BlackText } from '../../style/LoginTopStyle';

import ShippingProductCaption from '../../atoms/ShippingProductCaption';

const WideSpacer = () => <Box sx={{ height: 20 }} />;

/*

const ProductTitle = () => (
  <Box sx={{ flexGrow: 1 }}>
    <TagName>T-shirt</TagName>
    <TransisionLink to="../productDetail">
      <ProductName>Product Name</ProductName>
    </TransisionLink>
  </Box>
);

const RouletteDate = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} direction="row" justifyContent="flex-start" alignItems="center">
      <LocalActivityIcon sx={{ color: blue }} />
      <GrayText>*2 (per unit)</GrayText>
    </Grid>
    <GrayText>Roulette date: 15/01/2022 12:00:00</GrayText>
  </Box>
);

const ParticipatingUnit = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
      <WideSpacer />
      <BlackText>Participating Unit:2 (</BlackText>
      <LocalActivityIcon sx={{ color: blue }} />
      <GrayText>*4)</GrayText>
    </Grid>
  </Box>
);

const Spacer = () => <Box sx={{ height: 10 }} />;
const WideSpacer = () => <Box sx={{ width: 20 }} />;

const ProductCaption = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} direction="column" justifyContent="center" alignItems="flex-start">
      <ProductTitle />
      <Spacer />
      <RouletteDate />
      <Spacer />
      <Box sx={{ height: 10 }} />
      <ParticipatingUnit />
      <BlackText>Your prize: 1st</BlackText>
      <Spacer />
      <BlackText>status: Proparing for delivary</BlackText>
    </Grid>
  </Box>
); */

const ProductImage = () => (
  <Box sx={{ flexGrow: 1, maxWidth: '40%' }}>
    <TransisionLink to="../productDetail">
      <img src={SampleProductImage} alt="" style={{ width: '100%', height: '100%' }} />
    </TransisionLink>
  </Box>
);

const ShippedCard = (props) => {
  // eslint-disable-next-line
  const {participatingUnit} = props; 
  return (
    <Box sx={{ flexGrow: 1, borderRadius: 2, p: 2, border: 1, maxWidth: 800, padding: 5 }}>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <ProductImage />
        <WideSpacer />
        <ShippingProductCaption {...props} />
      </Grid>
    </Box>
  );};

export default ShippedCard;
