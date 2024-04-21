import * as React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import Button from '@mui/material/Button';

import { updateUserInfo } from "../slicer/userInfoSlice";

import BookmarkCard from './bookmarkPage/BookmarkCard';

const Bookmark = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const [bookmarkCardPropsArray, setBookmarkCardPropsArray] = React.useState([]);
  
  React.useEffect(()=>{
    const getUserBookmark = async ()=> {
      const baseURL = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/account-get-info';
      await axios
        .post(baseURL, {
          Keys:{
            user_id: localStorage.getItem('userId')
          },
        })
        .then((response) => {
          // 取得したデータをグローバルステートに格納する
          if (response.data.StatusCode === 200) {
            const rawData = response.data.Item;
            console.log(rawData);
            const userInfoData = {
              name: rawData.name,
              address: rawData.address,
              birthday: rawData.birthday,
              email: rawData.email,
              gender: rawData.gender,
              password: rawData.password,
              phoneNumber: rawData.phone_number,
              userId: rawData.user_id,
              userName: rawData.user_name,
              wishList: rawData.wish_list,
              entryList: rawData.entry_list,
              winningList: rawData.winning_list,
              tickets: rawData.tickets,
              points: rawData.points,
              bookmarks: rawData.bookmarks
            };
            dispatch(updateUserInfo(userInfoData));
        }})
        .catch((err) => alert(err));
      const { bookmarks } = userInfo;
      console.log(bookmarks);
  };
  
  const makeBookmarkCardProps = async () => {
    
    const url = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/bookmark-get-info';
    const body = {Keys:{
      bookmarks: userInfo.bookmarks
    }};
    await axios.post(url, body)
      .then((res)=>{
        const bookmarkProductList = res.data.Item;
        console.log(bookmarkProductList);
        const bookmarkCardProps = bookmarkProductList.map((item)=>({
          productId: item.product_id,
          productTitle: item.product_title,
          categoryName: item.category_name,
          lowestRankTicket: item.ticket_info.lowest_rank,
          lowestRankTicketUnit:item.ticket_info.lowest_rank_ticket_unit,
          rouletteDate: item.time_info.roulette_at,
          limitUnit: item.sheets_info.limit,
          handleEntryProduct: handleEntryProduct(item.productId),
          setBookmarkCardPropsArray,
          pictures: item.pictures[0].file_url
        }));
        console.log(bookmarkCardProps);
        setBookmarkCardPropsArray(bookmarkCardProps);
      })
      .catch((err)=>{console.log(err)});
  };
  
    getUserBookmark();
    makeBookmarkCardProps();
  // eslint-disable-next-line
  }, []);
  console.log(userInfo);
  
  const handleEntryProduct = (productId) => () =>  {
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/entry-wishlist-commit-unit';
    const postBody = {
      Keys: {
        user_id: userInfo.userId,
        product_id: productId
      }
    };
    console.log(postBody)
    axios.post(baseUrl, postBody).then((response)=>{console.log(response)});
  };

  // const bookmarkCardPropsArray = userInfo.entryList.map((item)=>({
  //   productId: item.product_id,
  //   productTitle: item.product_name,
  //   categoryName: item.category_name,
  //   lowestRankTicket: item.lowest_rank,
  //   lowestRankTicketUnit:item.lowest_rank_ticket_unit,
  //   rouletteDate: item.roulette_date,
  //   limitUnit: item.limit_sheets,
  //   participatingUnit: item.amount,
  //   ticketInfo:{
  //     normal:item.tickets.normal,
  //     gold:item.tickets.gold,
  //     premium:item.tickets.premium
  //   },
  //   handleEntryProduct: handleEntryProduct(item.productId),
  //   pictures: item.pictures
  // }));
  // console.log(bookmarkCardPropsArray);
  
  return (
  <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
    <FormGroup>
      <FormControlLabel control={<Switch />} label="Not display expired roulette" />
    </FormGroup>
     <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
          {bookmarkCardPropsArray.map((bookmarkCardProps)=>(
              <BookmarkCard {...bookmarkCardProps} bookmarkCardPropsArray={bookmarkCardPropsArray}/>
          ))}
      </Box>
  </Box>
)};

export default Bookmark;
