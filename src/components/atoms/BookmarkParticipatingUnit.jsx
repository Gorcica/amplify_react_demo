import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import axios from 'axios';

// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const WideSpacer = () => <Box sx={{ height: 20 }} />;

/* eslint-disable-next-line */
const BookmarkParticipatingUnit = ({ productId, bookmarkCardPropsArray, setBookmarkCardPropsArray }) => {
  // const navigate = useNavigate();
  const userId = useSelector((state) => state.userInfo.userId);

  const handleCancelProduct = () => {
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/bookmark-cancel';
    const postBody = {
      Keys: {
        user_id: userId,
        product_id: productId
      }
    };
    console.log(postBody)
    axios.post(baseUrl, postBody).then((response) => {
      console.log(response);
      const newBookmark = [...bookmarkCardPropsArray].filter(item => item.productId !== productId);
      console.log(newBookmark);
      setBookmarkCardPropsArray(newBookmark);
      // navigate('/mypage', {state:{tabValue:4}});
    });
  };


  return (
    <Box sx={{ display: 'flex', justifyContent: "flex-start", alignItems: "center" }}>
      <WideSpacer />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "start", alignItems: "start" }}>
        <Box sx={{ display: 'flex', justifyContent: "flex-start", alignItems: "center" }}>
          <Button onClick={handleCancelProduct} style={{ textTransform: 'none' }}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  )
};

export default BookmarkParticipatingUnit;