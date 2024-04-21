import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
// import Grid from '@mui/material/Grid';

import '../../style/RoulettePage.css';

// import { styled } from '@mui/material/styles';

import { updateRouletteCount } from '../../slicer/rouletteCountInfoSlice';

// const data = [
//   { id: 1, option: 1 },
//   { id: 2, option: 2 },
//   { id: 3, option: 3 },
//   { id: 4, option: 4 },
//   { id: 5, option: 5 },
//   { id: 6, option: 6 },
//   { id: 7, option: 7 },
//   { id: 8, option: 8 },
//   { id: 9, option: 9 },
//   { id: 10, option: 10 },
//   { id: 11, option: 11 },
//   { id: 12, option: 12 },
//   { id: 13, option: 13 },
//   { id: 14, option: 14 },
//   { id: 15, option: 15 },
//   { id: 16, option: 16 },
//   { id: 17, option: 17 },
//   { id: 18, option: 18 },
//   { id: 19, option: 19 },
//   { id: 20, option: 20 },
// ];

// const UnsucsussfulCaption = styled(Box)(({ theme }) => ({
//   backgroundColor: '#ffffff',
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: '#000000',
//   fontSize: 24,
//   fontWeight: 'bold',
// }));

/*
const ContentTitle = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#000000',
}));


const UserNum = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#000000',
  fontSize: 50,
  fontWeight: 'bold',
}));

const UnsucsessfullUserNum = styled(Box)(({ theme }) => ({
  backgroundColor: '#808080',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#000000',
  fontSize: 50,
  fontWeight: 'bold',
})); */

// const Numbers = () => {
//   if (!mustSpin && prizeNumber === 19) {
//     return (
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
//           <Box sx={{ width: 100, height: 80, borderRadius: 2, border: 1 }}>
//             <UserNum>2</UserNum>
//           </Box>
//           <Box sx={{ width: 10 }} />
//           <Box sx={{ width: 100, height: 80, borderRadius: 2, border: 1 }}>
//             <UserNum>11</UserNum>
//           </Box>
//           <Box sx={{ width: 10 }} />
//           <Box sx={{ width: 100, height: 80, borderRadius: 2, border: 1, backgroundColor: '#808080' }}>
//             {!mustSpin && prizeNumber === 19 ? <UnsucsessfullUserNum>19</UnsucsessfullUserNum> : <UserNum>19</UserNum>}
//           </Box>
//         </Grid>
//       </Box>
//     );
//   }
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
//         <Box sx={{ width: 100, height: 80, borderRadius: 2, border: 1 }}>
//           <UserNum>2</UserNum>
//         </Box>
//         <Box sx={{ width: 10 }} />
//         <Box sx={{ width: 100, height: 80, borderRadius: 2, border: 1 }}>
//           <UserNum>11</UserNum>
//         </Box>
//         <Box sx={{ width: 10 }} />
//         <Box sx={{ width: 100, height: 80, borderRadius: 2, border: 1 }}>
//           <UserNum>19</UserNum>
//         </Box>
//       </Grid>
//     </Box>
//   );
// };

const makeInitialRouletteColorArray = (num) => {
  const colorArray = [...Array(num)].map((_, i) => (i%2 === 0 ? '#000000' : '#a83929')) ;
  if (colorArray.length % 2 === 1) colorArray.unshift('#398175');
  const dataArray = [...Array(num)].map((_, i) => ({id: i+1, option: i+1}));
  if (dataArray.length % 2 === 1) dataArray.unshift({id: 0, option: ""});
  return {colorArray, dataArray};
};

const wait = (sec) => (
  new Promise((resolve) => {
    setTimeout(resolve, sec*1000);
    // setTimeout(() => {reject(new Error("エラー！"))}, sec*1000);
  })
);

/* eslint-disable */
const RouletteModule = ({rouletteNumList, entryUsers, rouletteStartAt}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  console.log(prizeNumber);
  
  const [rouletteCount, setRouletteCount] = useState(0);
  // const [rouletteNum, setRouletteNum] = useState(1)
  
  console.log(rouletteNumList);
  
  const totalNumberOfParticipants = entryUsers.participants.reduce((prev, curr)=>prev + curr.amount, 0);
  

  const {colorArray, dataArray} = makeInitialRouletteColorArray(totalNumberOfParticipants);
  console.log(colorArray);
  
  // 回転時間[s]
  const spinDuration = 10;
  
  // 回転が終わってから、次の回転が始まるまでの間隔[s]
  const spinInterval = 5;
  
  const rouletteInterval = spinDuration + spinInterval; // ルーレット1回の時間[s]
  
  
  const dispatch = useDispatch();
  /* eslint-disable */
  useEffect(()=>{
    const rouletteSetting = async () => {
      const pageLoadTime = new Date(); // ルーレットページを表示した時刻
      const rouletteStartTime = new Date(rouletteStartAt); // ルーレットが開始した時刻
      const elapsedTime = pageLoadTime - rouletteStartTime; // 経過時間[ms]
      
      // すでに行われた抽選回数+1を最初に表示する
      const InitialRouletteCount = Math.ceil(elapsedTime / rouletteInterval / 1000) // ページをロードした時にすでに回っている回数+1
      
      const firstRouletteTime = rouletteStartTime.setSeconds(rouletteStartTime.getSeconds() + rouletteInterval*InitialRouletteCount) - pageLoadTime;
      
      if (InitialRouletteCount >= rouletteNumList.length) {
        setPrizeNumber(rouletteNumList[rouletteNumList.length - 1] - 1);
        setMustSpin(false);
        setRouletteCount(rouletteNumList.length);
        dispatch(updateRouletteCount({value:rouletteNumList.length}));
      } else if (InitialRouletteCount < rouletteNumList.length) {
        let rouletteCount = InitialRouletteCount;
        
        await wait(firstRouletteTime/1000)
        setPrizeNumber(rouletteNumList[InitialRouletteCount -1] - 1);
        setMustSpin(false);
        setRouletteCount(InitialRouletteCount);
        dispatch(updateRouletteCount({value:InitialRouletteCount}));
        const interval = setInterval(()=>{
          rouletteCount = rouletteCount + 1;
          setPrizeNumber(rouletteNumList[rouletteCount - 1] - 1);
          setMustSpin(true);
          setRouletteCount(rouletteCount);
          dispatch(updateRouletteCount({value:rouletteCount}));
          
          if (rouletteCount > rouletteNumList.length - 1) {
            clearInterval(interval);
          }
        },rouletteInterval * 1000)
        
      }
    };
    rouletteSetting();
  }, []);
  
  useEffect(()=>{
    
  }, [])
  
  // useEffect(()=>{
  //   if (rouletteCount < rouletteNumList.length) {
  //   const interval = setInterval(()=>{
  //     setPrizeNumber(rouletteNumList[rouletteCount] - 1);
  //     setMustSpin(true);
  //     setRouletteCount((prev) => prev + 1);
  //     dispatch(updateRouletteCount({value: rouletteCount+1}));
  //     console.log(rouletteCount);
  //   }, (spinDuration + spinInterval) * 1000);
  //   return ()=> clearInterval(interval);}
  // },[rouletteCount]);
  // console.log(rouletteCount);
  const globalRouletteCount = useSelector((state) => state.rouletteCount);
  // console.log(globalRouletteCount);
    
  const handleSpinClick  = () => {
    // const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(rouletteNumList[rouletteCount] - 1);
    setMustSpin(true);
    setRouletteCount(rouletteCount + 1);
  };

  return (
    <Box sx={{ flexGrow: 1, minWidth:"400px" }}>
      <div align="center">
        <Box sx={{ height: 20 }} />
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={dataArray}
            outerBorderColor={['#2e2e2e']}
            outerBorderWidth={[20]}
            innerRadius={[30]}
            innerBorderColor={['#2e2e2e']}
            innerBorderWidth={[20]}
            radiusLineColor={['#2e2e2e']}
            radiusLineWidth={[5]}
            textColors={['#ffffff']}
            fontSize={[30]}
            textDistance={[75]}
            perpendicularText={[true]}
            backgroundColors={colorArray}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
            spinDuration={[spinDuration / 10]}
          />
          <Button onClick={handleSpinClick}>
            spin!
          </Button>
      </div>
    </Box>
  );
};

export default RouletteModule;
