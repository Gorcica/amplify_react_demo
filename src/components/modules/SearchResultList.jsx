import React, { useEffect, useState }from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductCard from './productListPage/ProductCard';

const SearchResultList = () => {
  const [productCardPropsArray, setProductCardPropsArray] = useState([]);
  const {selectedCategories, newOrUsed} = useSelector(state=>state.productListFilter);
  console.log(newOrUsed);
  const isVisibleCategory = (obj) => {
    const targetCategory = selectedCategories ? selectedCategories.find(category => category.name === obj.categoryName) : undefined;
    return targetCategory ? targetCategory.flag : false;
  };
  
  const [searchParams] = useSearchParams();

  
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
    const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/search-text';
    const postBody = {Keys:{
      search_text_list: searchParams.get('word').split(" "),
      category_id: searchParams.get('categoryId')
    }};
    console.log(postBody);
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
  // eslint-disable-next-line
  },[])
  
  return(
    <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto', padding: 2}}>
      <Typography sx={{fontSize:22}} align="left">Search results</Typography>
      <Grid container spacing={2}>
          {productCardPropsArray && selectedCategories && productCardPropsArray.length > 0 ?
            productCardPropsArray.filter(filterFunc).map((productCardProps)=>(
            <Grid item xs={12} sm={6} md={3}  key={productCardProps.productId} >
              <ProductCard {...productCardProps} />
            </Grid>
          )) :
          <Grid item xs={12}>
            <Typography sx={{fontSize:26}} align="center">No results</Typography>
          </Grid>
          }
      </Grid>
    </Box>
  );
};

export default SearchResultList;