import React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import {MyNumberBox, NumberBox} from '../../style/RoulettePageStyle';


// const testArray = [
//     {num: 1, nothing: true, myNumber: true},
//     {num: 2, winning: true},
//     {num: 3, nothing: true},
//     {num: 4, nothing: true},
//     {num: 6, winning: true},
//     {num: 7, winning: true, myNumber: true},
//     {num: 8, nothing: true, myNumber: true},
//     {num: 9, nothing: true},
//     {num: 10},
//     {num: 11, myNumber: true},
//     {num: 5, nothing: true, myNumber: true},
//     {num: 12},
//     {num: 13},
//     {num: 14},
//     {num: 15},
//     {num: 16},
//     {num: 17},
//     {num: 18},
//     {num: 19},
//     {num: 88}
// ];

// eslint-disable-next-line
const SwitchNumberBox = ({data}) => (
    // eslint-disable-next-line
    data.myNumber ? <MyNumberBox backgroundColor={makeBackgroundColor(data)}>{data.num}</MyNumberBox> : <NumberBox backgroundColor={makeBackgroundColor(data)}>{data.num}</NumberBox>
);

// eslint-disable-next-line
const makeBackgroundColor = (data) => (
    // eslint-disable-next-line
    data.winning ? 'yellow'
    // eslint-disable-next-line
    : data.nothing ? '#CCCCCC'
    // eslint-disable-next-line
    : 'white'
);

/* eslint-disable */
const NumberList = ({entryUsers, prizeInfo}) => {
    console.log(entryUsers);
    const userId = useSelector(state=>state.userInfo.userId);
    
    console.log(userId);
    console.log(prizeInfo);
    const amountPrize = prizeInfo.length;
    console.log(amountPrize);
    const participants = entryUsers.participants;
    const amountUnit = participants.reduce((prev, curr)=>prev + curr.amount, 0);
    console.log(amountUnit);
    const numArray = [...Array(amountUnit)].map((_, i)=>({num:i+1}));
    console.log(numArray);
    const lotteryList = entryUsers.lottery_list;
    const winningAllList = lotteryList.slice(-1*amountPrize);
    console.log(winningAllList);
    const nothingAllList = lotteryList.slice(0, amountUnit - amountPrize);
    console.log(nothingAllList);
    
    const myInfo = participants.filter((participant)=>participant.user_id === userId)[0];
    console.log(myInfo);
    let myNumberList = Array(0);
    if (myInfo && "entry_number" in myInfo) myNumberList = myInfo.entry_number;
    console.log(myNumberList);
    
    const rouletteCount = useSelector(state=>state.rouletteCount.value);
    const nothingNowList = nothingAllList.slice(0, rouletteCount);
    let winningNowList = [];
    if (rouletteCount - nothingAllList.length > 0) winningNowList = winningAllList.slice(0, rouletteCount - nothingAllList.length);
    
    const numArray2 = numArray.map((item)=>({...item, myNumber: myNumberList.includes(item.num)}));
    const numArray3 = numArray2.map((item) => ({...item, winning: winningNowList.includes(item.num)}));
    const numArray4 = numArray3.map((item)=>({...item, nothing: nothingNowList.includes(item.num)}));
    console.log(numArray4);
    return (
        <Box sx={{display:'flex', justifyContent:'flex-start', flexWrap:'wrap'}}>
            {numArray4.map((data)=>(
                <SwitchNumberBox data={data} key={data.num} />
            ))}
        </Box>
    )
};

export default NumberList;