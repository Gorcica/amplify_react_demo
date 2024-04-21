import React from 'react';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
// style
import { TagName, ProductName, BlackText } from '../style/EntryListStyle';

// atoms
import RouletteInfoText from './RouletteInfoText';
import RouletteLink from './RouletteLink';
import BookmarkParticipatingUnit from './BookmarkParticipatingUnit';


/* eslint-disable-next-line */
const ProductTitle = ({productTitle, categoryName, productId}) => {
  const navigate = useNavigate();
  console.log(categoryName);
  return(
    <Box>
      <TagName>{categoryName}</TagName>
      <ProductName onClick={()=>{navigate(`../productDetail/${productId}`)}}>{productTitle}</ProductName>
    </Box>
  );};

const Spacer = () => <Box sx={{ height: 10 }} />;


/* eslint-disable-next-line */
const BookmarkProductCaption = ({productId, productTitle, categoryName, rouletteDate, lowestRankTicket, lowestRankTicketUnit, limitUnit, setBookmarkCardPropsArray, bookmarkCardPropsArray}) => {

return (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <ProductTitle productTitle={productTitle} categoryName={categoryName} productId={productId}/>
    <Spacer />
    <RouletteInfoText rouletteDate={rouletteDate} lowestRankTicket={lowestRankTicket} lowestRankTicketUnit={lowestRankTicketUnit} />
    <RouletteLink rouletteDate={rouletteDate} productId={productId} />
    <Spacer />
    <BlackText>Limit Unit: {limitUnit}</BlackText>
    <BookmarkParticipatingUnit productId={productId} setBookmarkCardPropsArray={setBookmarkCardPropsArray} bookmarkCardPropsArray={bookmarkCardPropsArray} />
  </Box>
);};

export default BookmarkProductCaption;