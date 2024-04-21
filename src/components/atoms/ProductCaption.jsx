import React from 'react';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link as TransisionLink } from 'react-router-dom';
// style
import { TagName, ProductName } from '../style/ProductListStyle';

// atoms
import ProductRouletteInfoText from './ProductListRouletteInfoText';


/* eslint-disable-next-line */
const ProductTitle = ({productId, productTitle, categoryName}) => (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', width:"100%"}}>
      <TagName>{categoryName}</TagName>
      <TransisionLink to={`../productDetail/${productId}`}>
        <ProductName>{productTitle}</ProductName>
      </TransisionLink>
    </Box>
  );

const Spacer = () => <Box sx={{ height: 10 }} />;

/* eslint-disable-next-line */
const ProductCaption = ({productId,productTitle, categoryName, rouletteDate, lowestRankTicket, lowestRankTicketUnit, limitUnit}) => (
  
  <Box sx={{ flexGrow: 1 }}>
      <ProductTitle productTitle={productTitle} categoryName={categoryName} productId={productId}/>
      <Spacer />
      <ProductRouletteInfoText rouletteDate={rouletteDate} lowestRankTicket={lowestRankTicket} lowestRankTicketUnit={lowestRankTicketUnit} />
  </Box>
);

export default ProductCaption;