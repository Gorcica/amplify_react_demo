/* eslint-disable */

import { Box, Button } from '@mui/material';
import React, { useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import NormalTickets from '../../../Images/normal_tickets.png';
import GoldTickets from '../../../Images/gold_tickets.png';
import PremiumTickets from '../../../Images/premium_tickets.png';

// style
import { GrayText } from '../../style/GlobalStyle';
import { ProductName, ProductCaptionTitle, ContentItemText, ContentTitle } from '../../style/ProductDetailStyle';

// components

import SelectTicketNumBox from './SelectTicketNumBox';
import SelectTicketBox from './SelectTicketBox';
import TicketUnitText from './TicketUnitText';
import PrizeInfoAccordion from './PrizeInfoAccordion';
import BookmarkButton from './BookmarkButton';

// function
import calcTicketValue from './calcTicketValue';

const NormalTicketsIcon = () => (
  <Box sx={{ width: 40, height: 30 }}>
    <img src={NormalTickets} alt="normal tickets" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const GoldTicketsIcon = () => (
  <Box sx={{ width: 40, height: 30 }}>
    <img src={GoldTickets} alt="gold tickets" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const PremiumTicketsIcon = () => (
  <Box sx={{ width: 40, height: 30 }}>
    <img src={PremiumTickets} alt="premium tickets" style={{ width: '100%', height: '100%' }} />
  </Box>
);

// type Props = {
//     productTitle:'string',
//     categoryId:'string',
//     tagIds:'string',
//     priceInfo:'string',
//     timeInfo:'string'
//   };


const makePostTickets = (ticket, ticketNum) => {
    switch(ticket){
      case 'NORMAL':
        return {
          normal:ticketNum,
          gold:0,
          premium:0
        };
      case 'GOLD':
        return {
          normal:0,
          gold:ticketNum,
          premium:0
        };
      case 'PREMIUM':
        return {
          normal:0,
          gold:0,
          premium:ticketNum
        };
    }};
    

const calcAmount = (ticket, ticketNum, lowestRank, lowestRankTicketUnit) => {
  const lowestUnitValue = lowestRankTicketUnit * calcTicketValue(lowestRank);
  const payedUnitValue = ticketNum * calcTicketValue(ticket);
  return Math.floor(payedUnitValue / lowestUnitValue);
};

const CaptionModule = (props) => {
  console.log(props);
  const {productTitle, priceInfo, productId, categoryId, categoryName, entryUsers, tagIds, timeInfo, ticketInfo, sheetsInfo, tagDetails, prizeInfo, pictures, newOrNot, explain} = props;
  const userInfo = useSelector((state) => state.userInfo);
  const {userId} = userInfo;
  
  const navigate = useNavigate();
  
  const lowestRank = ticketInfo.lowest_rank;
  const lowestRankTicketUnit = ticketInfo.lowest_rank_ticket_unit;
  // category_id, tag_idは後にnameに変更
  
  const [ticket, setTicket] = React.useState(lowestRank);
  const [ticketNum, setTicketNum] = React.useState(lowestRankTicketUnit);
  
  // 仮置きの税率
  const taxRate = 0.2;
  
  const limitSheets = sheetsInfo.limit;
  const limitPayUnitValue = limitSheets * lowestRankTicketUnit * calcTicketValue(lowestRank);
  const lowestRankTicketUnitValue = lowestRankTicketUnit * calcTicketValue(lowestRank);
  
  // ルーレット日時の文字列処理
  const rouletteDatestr = timeInfo.roulette_at;
  console.log(rouletteDatestr);
  const rouletteDate = new Date(rouletteDatestr);
  console.log(rouletteDate);
  const getDateStringForPhl = (date) => { 
    const [month, day, year]       = [date.getMonth()+1, date.getDate(), date.getFullYear()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    return (`${day}/${month}/${year} ${hour}:${("0"+minutes).slice(-2)}`);
  };
  const formedRouletteDate = getDateStringForPhl(rouletteDate);
  
  
  // APIへのrequest Body作成
  const handleClickToParticipate = (productId) => (event) => {
    const baseURL = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/entry-wishlist-add';
    
    console.log(userId);
    console.log(calcAmount(ticket, ticketNum, lowestRank, lowestRankTicketUnit));
    
    const postBody = {
      Keys: {
        user_id: userId,
        add_data: {
          product_id: productId,
          product_name: productTitle,
          amount: calcAmount(ticket, ticketNum, lowestRank, lowestRankTicketUnit),
          tickets: makePostTickets(ticket, ticketNum),
          category_id: categoryId,
          category_name: categoryName,
          lowest_rank: lowestRank,
          lowest_rank_ticket_unit: lowestRankTicketUnit,
          roulette_date: rouletteDatestr,
          limit_sheets: sheetsInfo.limit,
          pictures: pictures[0].file_url
        }
      }
    };
    console.log(postBody);
    axios.post(baseURL, postBody)
      .then((response)=>{
        console.log(response);
        navigate('/mypage', {state:{tabValue:1}});
      })
      .catch((error)=>{
        console.log(error);
      });
  };
  
  
  console.log(entryUsers.participants);
  
  // Payed Ticketsってなんだっけ？どこの情報？
  // Limit Ticketsってなんだっけ？どこの情報？
  
  // PrizeInfoのレンダリング機能は未実装。
  console.log(entryUsers);
  console.log(userId);
  const myParticipationInfo = entryUsers.participants.filter((user)=>(user.user_id===userId));
  console.log(myParticipationInfo[0]);
  const payedUnit = myParticipationInfo[0] ? myParticipationInfo[0].amount : 0;
  
  return (
    <div align="left">
      <Box sx={{ flexGrow: 1, maxWidth: 800 }}>
        <GrayText>{categoryName}</GrayText>
        <Box sx={{display: 'flex'}}>
          <div
            className="d-flex justify-content-between align-items-center fs-6 fw-bold pr-1 pl-1 mb-2 me-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              text: "center",
              fontSize: 12,
              fontWeight: "bold",
              padding: 1,
              marginBottom: 2,
              marginRight: 2,
              border: "1px solid",
              borderRadius: 4,
              borderColor: "#8b52a1",
              color: "#8b52a1",
            }}
            key={"NewOrNot"}
          >
            <span style={{ marginRight: "10px", marginLeft: "10px" }}>
              { newOrNot ? "Brand-new" : "Secondhand" }
            </span>
          </div>
          {tagDetails.map(tag=>(<div
            className="d-flex justify-content-between align-items-center fs-6 fw-bold pr-1 pl-1 mb-2 me-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              text: "center",
              fontSize: 12,
              fontWeight: "bold",
              padding: 1,
              marginBottom: 2,
              marginRight: 2,
              border: "1px solid",
              borderRadius: 4,
              borderColor: tag.tag_color,
              color: tag.tag_color,
            }}
            key={tag.tag_id}
          >
            <span style={{ marginRight: "10px", marginLeft: "10px" }}>
              {tag.tag_name}
            </span>
          </div>))}
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
          <ProductName>{productTitle}</ProductName>
          <BookmarkButton productId={productId} />
        </Box>
        <Box sx={{ height: 10 }} />
        <Grid container direction="row">
          <Grid item xs={5}>
            <ContentItemText>Evalutates price</ContentItemText>
          </Grid>
          <Grid item xs={6} sx={{margin:1}}>
            <ContentItemText>P${Number(priceInfo.price).toLocaleString()}-</ContentItemText>
          </Grid>
          <Grid item xs={5}>
            <ContentItemText>Roulette date</ContentItemText>
          </Grid>
          <Grid item xs={6} sx={{margin:1}}>
            <ContentItemText>{formedRouletteDate}</ContentItemText>
          </Grid>
          <Grid item xs={5}>
            <ContentItemText>Requires Ticket Unit</ContentItemText>
          </Grid>
          <Grid item xs={6} sx={{margin:1}}>
            <TicketUnitText ticketRank={lowestRank} ticketUnit={lowestRankTicketUnit} lowestRankTicketUnitValue={lowestRankTicketUnitValue}/>
          </Grid>
          <Grid item xs={5}>
            <ContentItemText>Payed / Limit</ContentItemText>
          </Grid>
          <Grid item xs={6} sx={{margin:1}}>
            <ContentItemText>{payedUnit} / {limitSheets}</ContentItemText>
          </Grid>
          <Grid item xs={5}>
            <ContentItemText>Seller</ContentItemText>
          </Grid>
          <Grid item xs={6} sx={{margin:1}}>
            <ContentItemText>Asuka Inc.</ContentItemText>
          </Grid>
          <Grid item xs={12} sx={{mt: 1}}>
            <ContentItemText>Explain</ContentItemText>
          </Grid>
          <Grid item xs={12}>
            <ContentItemText>{explain}</ContentItemText>
          </Grid>
        </Grid>

        <Box sx={{ height: 20 }} />
        <ContentItemText>You'll pay :</ContentItemText>
        <Box sx={{ height: 10 }} />
        <Grid container direction="row" spacing={1} alignItems="center" justifyContent="start">
          <Grid item xs={12}>
            <SelectTicketBox ticket={ticket} lowestRank={lowestRank} setTicket={setTicket} />
          </Grid>
          <Grid item xs={12}>
            {ticket == null ? <div></div> : <SelectTicketNumBox ticket={ticket} ticketNum={ticketNum} setTicketNum={setTicketNum} limitPayUnitValue={limitPayUnitValue} lowestRankTicketUnitValue={lowestRankTicketUnitValue} />}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleClickToParticipate(productId)} size="small" sx={{height: 40, textTransform: 'none', width: '100%'}}>Participate!</Button>
          </Grid>
        </Grid>

        <Box sx={{ height: 30 }} />
        <ContentItemText>Prize details</ContentItemText>

        <div>
          <PrizeInfoAccordion prizeInfo={prizeInfo} />
        </div>
      </Box>
    </div>
  );
};

export default CaptionModule;
