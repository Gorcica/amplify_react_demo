import * as React from 'react';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LocalActivityIcon from '@mui/icons-material/LocalActivity';
// import { blue } from '@mui/material/colors';

import { Link as TransisionLink } from 'react-router-dom';
import ProductCaption from '../../atoms/ProductCaption';

import NoImage from '../../../Images/no_image_icon_23494.png';


const WideSpacer = () => <Box sx={{ height: 20 }} />;

/* eslint-disable */
const NoImageComponent = ({productId}) => (
  <Box sx={{ height: "100px"  }} >
      <TransisionLink to={`../productDetail/${productId}`}>
        <img src={NoImage} style={{ width: '100%', height: '100%' , objectFit: "contain"}} alt={`${productId}EyeCatch`} />
      </TransisionLink>
    </Box>);

const ProductImage = ({pictures, productId}) => {
  var res = <Box />;
  if (pictures.length)
  { res = (
  <Box sx={{ flexGrow: 1, width: "100%", height: "100px" }}>
    <TransisionLink to={`../productDetail/${productId}`}>
      <img src={pictures[0]["file_url"]} alt={`${productId}EyeCatch`} style={{ width: '100%', height: '100%' , objectFit: "contain"}} />
    </TransisionLink>
  </Box>)}
  return res;
};

const ProductCard = (props) => {
  console.log(props.pictures);
  return (
    <Box sx={{ flexGrow: 1, borderRadius: 2, p: 1, border: 1, maxWidth: 800}}>
      <Box container spacing={2} direction="row" justifyContent="center" alignItems="center">
        {(props.pictures && props.pictures.length) ? <ProductImage {...props}/> : <NoImageComponent {...props} />}
        <WideSpacer />
        <ProductCaption {...props}/>
      </Box>
    </Box>
  );}

export default ProductCard;
