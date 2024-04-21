import React, { useEffect, useState }from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductCard from './productListPage/ProductCard';

const ProductList = () => {
  const [productCardPropsArray, setProductCardPropsArray] = useState([]);
  const {selectedCategories, newOrUsed} = useSelector(state=>state.productListFilter);
  console.log(newOrUsed);
  const isVisibleCategory = (obj) => {
    const targetCategory = selectedCategories ? selectedCategories.find(category => category.name === obj.categoryName) : undefined;
    return targetCategory ? targetCategory.flag : false;
  };
  
  const isVisibleNewOrUsed = (obj) => {
    let res = false;
    if (newOrUsed === 'all') 
      { res = true }
    else if (newOrUsed === 'new')
     { res = obj.newOrNot }
    else if (newOrUsed === 'used')
     { res = !obj.newOrNot }
    return res;
  };
  
  const filterFunc = (obj) => isVisibleCategory(obj) && isVisibleNewOrUsed(obj);
  
  useEffect(()=>{
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/products-scan';
    const postBody = {};
    axios.post(baseUrl, postBody)
      .then((response)=>{
        const items = response.data.Item;
        console.log(items);
        const productArray = items.map(item => ({
          productId: item.product_id,
          productTitle: item.product_title,
          categoryName: item.category_name,
          lowestRankTicket: item.ticket_info.lowest_rank,
          lowestRankTicketUnit:item.ticket_info.lowest_rank_ticket_unit,
          rouletteDate: item.time_info.roulette_at,
          limitUnit: item.sheets_info.limit_sheets,
          pictures: item.pictures,
          newOrNot: item.new_or_not,
        }));
        console.log(productArray);
        setProductCardPropsArray(productArray);
      });
  },[])
  
  return(
    <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto', padding: 2}}>
      <Grid container spacing={2}>
          {productCardPropsArray && selectedCategories ?
            productCardPropsArray.filter(filterFunc).map((productCardProps)=>(
            <Grid item xs={12} sm={6} md={3}  key={productCardProps.productId} >
              <ProductCard {...productCardProps} />
            </Grid>
          )) :
            <div />
          }
      </Grid>
    </Box>
  );
};

export default ProductList;