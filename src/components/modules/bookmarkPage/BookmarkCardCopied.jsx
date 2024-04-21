import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { blue } from '@mui/material/colors';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import { Link as TransisionLink } from 'react-router-dom';

// Sample Image
import SampleProductImage from '../../../sampleImages/sample_tshirt_men.png';

// Style
import { TagName, ProductName, GrayText, BlackText } from '../../style/LoginTopStyle';

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

const Spacer = () => <Box sx={{ height: 10 }} />;
const WideSpacer = () => <Box sx={{ width: 20 }} />;

const ProductCaption = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} direction="column" justifyContent="center" alignItems="flex-start">
      <ProductTitle />
      <Spacer />
      <RouletteDate />
      <Spacer />
      <BlackText>Limit Unit: 20</BlackText>
      <Spacer />
      <Link href={() => false} underline="hover">
        Delete
      </Link>
    </Grid>
  </Box>
);

const ProductImage = () => (
  <Box sx={{ flexGrow: 1, maxWidth: '30%' }}>
    <TransisionLink to="../productDetail">
      <img src={SampleProductImage} alt="" style={{ width: '100%', height: '100%' }} />
    </TransisionLink>
  </Box>
);

const label = { inputProps: { 'aria-label': 'Delete Checkbox' } };

const BookmarkCard = () => (
  <Box sx={{ flexGrow: 1, borderRadius: 2, p: 2, border: 1, maxWidth: 800, padding: 3 }}>
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
      <WideSpacer />
      <Checkbox {...label} />
      <ProductImage />
      <WideSpacer />
      <ProductCaption />
    </Grid>
  </Box>
);

export default BookmarkCard;
