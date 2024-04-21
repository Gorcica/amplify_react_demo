import React from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from "react-redux";

import Header from '../modules/Header';
import ProductList from '../modules/ProductList';
import StickyFooter from '../modules/Footer';
import ProductListSortForms from '../modules/ProductListSortForms';

// slicer
// import { updateUserInfo } from "../slicer/userInfoSlice";

const ProductListPage = () => {
    console.log('test');
  // const dispatch = useDispatch();
  // const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/account-get-info';
  // const postBody = {
  //   Keys:{
  //     user_id: useSelector((state)=>state.userInfo.userId)
  //   }
  // };
  // axios.post(baseUrl, postBody)
  //   .then((response) => {
  //     const rawData = response.data.Item;
  //     console.log(rawData);
  //     const userInfoData = {
  //       name: rawData.name,
  //       address: rawData.address,
  //       birthday: rawData.birthday,
  //       email: rawData.email,
  //       gender: rawData.gender,
  //       password: rawData.password,
  //       phoneNumber: rawData.phone_number,
  //       userId: rawData.user_id,
  //       userName: rawData.user_name,
  //       wishList: rawData.wish_list,
  //       entryList: rawData.entry_list,
  //       winningList: rawData.winning_list,
  //       tickets: rawData.tickets,
  //       points: rawData.points,
  //       bookmarks: rawData.bookmarks
  //     };
  //     dispatch(updateUserInfo(userInfoData));
  //   })
  //     .catch((err) => console.log(err));
  
  return (
  <div>
    <Header />
    <ProductListSortForms categoryHidden={false} />
    <ProductList />
    <StickyFooter />
  </div>
);};

export default ProductListPage;