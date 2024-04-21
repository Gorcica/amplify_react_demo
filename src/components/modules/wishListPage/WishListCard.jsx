import * as React from 'react';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LocalActivityIcon from '@mui/icons-material/LocalActivity';
// import { blue } from '@mui/material/colors';

import { Link as TransisionLink } from 'react-router-dom';
// import SampleProductImage from '../../../sampleImages/sample_tshirt_men.png';

import WishProductCaption from '../../atoms/WishProductCaption';

const WideSpacer = () => <Box sx={{ height: 20 }} />;
/* eslint-disable-next-line */
const ProductImage = ({pictures, productId}) => (
  <Box sx={{ height: 160 }}>
    <TransisionLink to={`../productDetail/${productId}`}>
      <img src={pictures} alt="" style={{ width: '100%', height: '100%', borderRadius: '9px' }} />
    </TransisionLink>
  </Box>
);

/* eslint-disable */
const WishListCard = (props) => {
  const {pictures} = props;
  return (
    <Box sx={{ display: "flex", flexDirection:"column", justifyContent:"start", alignItems:"center", borderRadius: 2, pl: 1, pr: 1, pt: 2, border: 1, mr: 2 , mb: 2, width: '300px', height: 530, textAlign: 'center' }}>
        <ProductImage {...props} />
        <WideSpacer />
        <WishProductCaption {...props}/>
    </Box>
  );}

export default WishListCard;
