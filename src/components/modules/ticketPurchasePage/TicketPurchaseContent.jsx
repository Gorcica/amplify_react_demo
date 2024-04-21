/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { useShoppingCart } from 'use-shopping-cart'

import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// modules
import CasherIconUnitResizable from '../../atoms/CasherIconUnitResizable';
import TicketIconUnitResizable from '../../atoms/TicketIconUnitResizable';

// styles
import {TitleName, NormalText} from '../../style/TicketPurchaseStyle';

const GCashButton = ({onClick})=>(
    <Box sx={{width:'50%', margin:1}}>
        <Button color='primary' variant="outlined" size='small' style={{textTransform: 'none', fontSize:12, width:'100%'}} onClick={onClick}>
            <CasherIconUnitResizable casherType="GCash"  width={18} height={18} marginRight={0.5}/>
            GCash
        </Button>
    </Box>
);

const StripeButton = ({onClick})=>(
    <Box sx={{width:'50%', margin:1}}>
        <Button color='success' variant="outlined" size='small' style={{textTransform: 'none', fontSize:12 }} sx={{width:'100%'}} onClick={onClick}>
            Stripe
        </Button>
    </Box>
);

const ExchangeButton = ({onClick})=>(
    <Box sx={{width:'100%', margin:1}}>
        <Button color='warning' variant="outlined" size='small' style={{textTransform: 'none', fontSize:12, width:'100%'}} onClick={onClick}>
            Exchange
        </Button>
    </Box>
);

const TicketNumTextField = ({onChange, value}) =>(
    <Box sx={{width:'100%'}}>
        <TextField size='small' fontSize='medium' inputProps={{ maxLength: 3, pattern: "^[0-9]+$", style: {fontSize: 12, width:20}}} value={value} onChange={onChange} />
    </Box>
);

// eslint-disable-next-line
const TicketPurchaseContent = ({ticketType, ticketInfo}) => {
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.userInfo);
    const userId = userInfo.userId;
    // eslint-disable-next-line
    const {OneTicket, TenTickets, Exchange} = ticketInfo;
    const [unitAmount, setUnitAmount] = React.useState();
    const [setAmount, setSetAmount] = React.useState();
    const [pointExchangeAmount, setPointExchangeAmount] = React.useState();
    
    // Stripe
    const { checkoutSingleItem } = useShoppingCart();
    
    const makePostJson = (ticketType, setType, amount, userId) => {
        console.log(ticketType);
        console.log(setType);
        let res = {
          "Keys": {
            "user_id": userId,
            "tickets": {
              "normal": 0,
              "gold": 0,
              "premium": 0
            },
            "points": 0,
            "money": {
              "iso_code": "PHP",
              "amount": 0
            }
          }
        };
    
        const priceTableAll = {
            Normal: {
                unit: {
                    ticketAmount: 1,
                    pointAmount: 1,
                    moneyAmount: 50
                },
                set10: {
                    ticketAmount: 10,
                    pointAmount: 15,
                    moneyAmount: 500
                },
                pointExchange: {
                    ticketAmount: 1,
                    pointAmount: -20,
                    moneyAmount: 0
                }
            },
            Gold: {
                unit: {
                    ticketAmount: 1,
                    pointAmount: 6,
                    moneyAmount: 250
                },
                set10: {
                    ticketAmount: 10,
                    pointAmount: 90,
                    moneyAmount: 2500
                },
                pointExchange: {
                    ticketAmount: 1,
                    pointAmount: -100,
                    moneyAmount: 0
                }
            },
            Premium: {
                unit: {
                    ticketAmount: 1,
                    pointAmount: 30,
                    moneyAmount: 1000
                },
                set10: {
                    ticketAmount: 10,
                    pointAmount: 450,
                    moneyAmount: 10000
                },
                pointExchange: {
                    ticketAmount: 1,
                    pointAmount: -400,
                    moneyAmount: 0
                }
            },
        };
        const priceTable = priceTableAll[ticketType][setType];
        console.log(priceTable);
        res.Keys.tickets[ticketType.toLowerCase()] = amount * priceTable.ticketAmount;
        res.Keys.points = amount * priceTable.pointAmount;
        res.Keys.money.amount= amount * priceTable.moneyAmount;
        return res;
    };
    
    
    const handleSettlementButton = (ticketType, setType, amount) => () => {
        const postBody = makePostJson(ticketType, setType, amount, userId);
        console.log(postBody)
        const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/tickets-purchase';
        
        axios.post(baseUrl, postBody)
            .then((res)=>{
                console.log(res);
                navigate('../mypage', {state:{tabValue: 5}});
            })
            .catch((error)=>{console.log(error)});
    };
    
    const stripePriceIdList = {
            Normal: {
                unit: "price_1MDzK4H0mdOr2N1UerxJWZ4W",
                set10: "price_1ME06MH0mdOr2N1UbF0Pcl3p",
            },
            Gold: {
                unit: "price_1ME03dH0mdOr2N1U8yU7llBU",
                set10: "price_1ME04NH0mdOr2N1U8MhJdC3M",
            },
            Premium: {
                unit: "price_1ME08ZH0mdOr2N1UTciU156l",
                set10: "price_1ME057H0mdOr2N1UBe6nTjr6",
        }};
    
    return(
    
    
    <Box sx={{width:'auto'}} >
        <TitleName>{ticketType} Ticket</TitleName>
        <Divider />
        <Box sx={{width:'auto' ,display: 'flex' , flexDirection:'row', alignItems:'center', justifyContent:"flex-start"}}>
            <Box sx={{width:90 ,display: 'flex' , flexDirection:'row', alignItems:'center', justifyContent:"flex-start", margin:1}}>
                <TicketIconUnitResizable ticketType={ticketType.toUpperCase()} width={32} height={24} />
                <NormalText>{OneTicket.Amount}</NormalText>
            </Box>
            <Box sx={{width:75 ,display: 'flex' , flexDirection:'row', alignItems:'center', justifyContent:"flex-start", margin:1}}>
                <TicketIconUnitResizable ticketType="COIN" width={18} height={18} />
                <NormalText>{OneTicket.Point}</NormalText>
            </Box>
            <Box sx={{width:85, margin:1}}>
                <NormalText>{OneTicket.Price}</NormalText>
            </Box>
            <Box sx={{width:50, margin:1}}>
                <TicketNumTextField onChange={(event)=>setUnitAmount(event.target.value)} value={unitAmount} />
            </Box>
            <Box sx={{width:200, display:'flex'}}>
                <GCashButton onClick={handleSettlementButton(ticketType, 'unit', unitAmount)} />
                <StripeButton onClick={() => checkoutSingleItem({ price: stripePriceIdList[ticketType].unit, quantity: Number(unitAmount) })} />
            </Box>
        </Box>
        <Box sx={{width:'auto' ,display: 'flex' , flexDirection:'row', alignItems:'center', justifyContent:"flex-start"}}>
            <Box sx={{width:90 ,display: 'flex' , flexDirection:'row', alignItems:'center', justifyContent:"flex-start", margin:1}}>
                <TicketIconUnitResizable ticketType={ticketType.toUpperCase()} width={32} height={24} />
                <NormalText>{TenTickets.Amount}</NormalText>
            </Box>
            <Box sx={{width:75 ,display: 'flex' , flexDirection:'row', alignItems:'center', justifyContent:"flex-start", margin:1}}>
                <TicketIconUnitResizable ticketType="COIN" width={18} height={18} />
                <NormalText>{TenTickets.Point}</NormalText>
            </Box>
            <Box sx={{width:85, margin:1}}>
                <NormalText>{TenTickets.Price}</NormalText>
            </Box>
            <Box sx={{width:50, margin:1}}>
                <TicketNumTextField onChange={(event)=>setSetAmount(event.target.value)} value={setAmount} />
            </Box>
            <Box sx={{width:200, display:'flex'}}>
                <GCashButton onClick={handleSettlementButton(ticketType, 'set10', setAmount)} />
                <StripeButton onClick={() => checkoutSingleItem({ price: stripePriceIdList[ticketType].set10, quantity: Number(setAmount) })} />
            </Box>
        </Box>
        <Box sx={{width:'auto' ,display: 'flex' , flexDirection:'row', alignItems:'center', justifyContent:"flex-start"}}>
            <Box sx={{width:90 ,display: 'flex' , flexDirection:'row', alignItems:'center', justifyContent:"flex-start", margin:1}}>
                <TicketIconUnitResizable ticketType={ticketType.toUpperCase()} width={32} height={24} />
                <NormalText>{Exchange.Amount}</NormalText>
            </Box>
            <Box sx={{width:75, margin:1}}>
                <NormalText>{Exchange.Point}</NormalText>
            </Box>
            <Box sx={{width:85 ,display: 'flex' , flexDirection:'row', alignItems:'center', justifyContent:"flex-start", margin:1}}>
                <TicketIconUnitResizable ticketType="COIN" width={18} height={18} />
                <NormalText>{Exchange.Price}</NormalText>
            </Box>
            <Box sx={{width:50, margin:1}}>
                <TicketNumTextField onChange={(event)=>setPointExchangeAmount(event.target.value)} value={pointExchangeAmount} />
            </Box>
            <Box sx={{width:200, display:'flex'}}>
                <ExchangeButton onClick={handleSettlementButton(ticketType, 'pointExchange', pointExchangeAmount)} />
            </Box>
        </Box>
    </Box>
)};

export default TicketPurchaseContent;