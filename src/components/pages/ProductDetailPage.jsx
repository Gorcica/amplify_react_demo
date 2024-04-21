/* eslint-disable */

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';
import ImagesModule from '../modules/productDetailPage/ImagesModule';
import CaptionModule from '../modules/productDetailPage/CaptionModule';


const ProductDetailPage = () =>{
  const {productId} = useParams();
  console.log(productId);
  const [data, setData] = useState(null);

  useEffect(() => {
      const baseURL = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/product-get-info';
      const postBody = {
        Keys: {
          product_id: productId
        }
      };
      axios.post(baseURL, postBody)
        .then((response)=>{
          const res = response.data.Item;
          console.log(res);
          setData({
            productTitle: res.product_title,
            prizeInfo: res.prize_info,
            productId: res.product_id,
            categoryId: res.category_id,
            categoryName: res.category_name,
            tagIds: res.tag_ids,
            priceInfo: res.price_info,
            timeInfo: res.time_info,
            ticketInfo: res.ticket_info,
            sheetsInfo: res.sheets_info,
            singleOrNot: res.single_or_not,
            tagDetails: res.tag_details,
            entryUsers: res.entry_users,
            tagDetails: res.tag_details.flat(),
            pictures: res.pictures,
            newOrNot: res.new_or_not,
            explain: res.explain,
          });
          console.log(data);
        })
        .catch((error)=>{
          console.log(error);
        });
    }, []);
    
  console.log(data);
  
  return (
  <div>
    <Header />
    <Box sx={{ height: 30 }} />
    <Box sx={{ flexGrow: 1, width: '70%', mx: 'auto' }}>
      <Grid container direction="row" justifyContent="center" alignContent="flex-start" spacing={1}>
        {data === null ? (<div>loading</div>) :
          (<Grid item xs={12} sm={5}>
            <ImagesModule pictures={data.pictures} />
          </Grid>) 
        }
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={6}>
          {data == null ? <div></div> :
            <CaptionModule
              productTitle={data.productTitle}
              productId={data.productId}
              categoryId={data.categoryId}
              categoryName={data.categoryName}
              tagIds={data.tagIds}
              priceInfo={data.priceInfo}
              timeInfo={data.timeInfo}
              ticketInfo ={data.ticketInfo}
              sheetsInfo={data.sheetsInfo}
              entryUsers={data.entryUsers}
              tagDetails={data.tagDetails}
              prizeInfo={data.prizeInfo}
              pictures={data.pictures}
              newOrNot={data.newOrNot}
              explain={data.explain}
            />}
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ height: 30 }} />
    <StickyFooter />
  </div>
);};

export default ProductDetailPage;
