/* eslint-disable */

import React, { useState, useEffect, useReducer } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';

// import API, { graphqlOperation } from '@aws-amplify/api';

import axios from 'axios';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';
import RouletteModule from '../modules/roulettePage/RouletteModule';
import PrizeListModule from '../modules/roulettePage/PrizeListModule';
import DashboardModule from '../modules/roulettePage/DashboardModule';
import NumberList from '../modules/roulettePage/NumberList';

// import { createTestRoulette } from '../../graphql/mutations';
// import { onCreateTestRoulette } from '../../graphql/subscriptions';

const Title = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#000000',
}));

const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128,128,128,0.9);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CautionText = styled(Typography)`
  font-size: 32px;
`

const QUERY = 'QUERY';
const SUBSCRIPTION = 'SUBSCRIPTION';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case QUERY:
      return {...state, todos: action.todos};
    case SUBSCRIPTION:
      return {...state, todos:[...state.todos, action.todo]}
    default:
      return state;
  }
};


const TabPanel = (props) => {
  // eslint-disable-next-line
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component='span'>{children}</Typography>
        </Box>
      )}
    </div>
  );
};


const a11yProps = (index) => {
  return { id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}` };
};

const initWinningList = [1, 5, 9, 2];
const initNothingList = [3, 8, 12, 4];

const RoulettePage = () => {
  const {productId} = useParams();
  
  const [state] = useReducer(reducer, initialState);
  const [user] = useState(null);
  const [value, setValue] = useState(0);
  const [lotteryList, setLotteryList] = useState([]);
  const [prizeInfo, setPrizeInfo] = useState();
  const [entryUsers, setEntryUsers] = useState();
  const [rouletteStartAt, setRouletteStartAt] = useState();
  const [rouletteNumList, setRouletteNumList] = useState();
  const [isLotteryDoneOrNot, setIsLotteryDoneOrNot] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // eslint-disable-next-line
  const [winningList, setWinningList] = useState(initWinningList);
  // eslint-disable-next-line
  const [nothingList, setNothingList] = useState(initNothingList);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchData () {
      const baseUrl =
        "https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/product-get-info";
      const postBody = { Keys: { product_id: productId } };
      await axios
        .post(baseUrl, postBody)
        .then((response) => {
          const rawData = response.data.Item;
          setPrizeInfo(rawData.prize_info);
          setEntryUsers(rawData.entry_users);
          // setRouletteStartAt(rawData.time_info.roulette_at);
          setRouletteStartAt((new Date()).toISOString());
          setRouletteNumList([...(rawData?.entry_users?.lottery_list || [])]);
          setIsLotteryDoneOrNot(rawData.is_lottery_done_or_not);
          setIsLoading(false);
        });}
    fetchData();
  }, []);
  
  /* const handleTestButton = async () => {
    const baseUrl = 'https://xb3vzebasfa4rgoc5yq3kx6nai.appsync-api.ap-northeast-1.amazonaws.com/graphql'
    const postBody = {query:
    `subscription MySubscription {
      onUpdateCloudgDevProducts(product_id: "c78580f6-89e9-455a-9dc0-7cd840c0151f") {
        entry_users {
          winners {
            user_id
          }
        }
      }
    }`
    };
    const headers = {'x-api-key': 'da2-43om2hwgvndj3oqhtxfenovzv4'};
    await axios.post(baseUrl, postBody, {headers}).then((res)=>{console.log(res)});
  }; */
  
  
  return (
    <div>
      <Header />
      
      <Box sx={{ height: 20 }} />
      { isLoading ? <p>loading...</p> :
      (<>
        <Grid container minWidth="400px" spacing={1} direction="row" justifyContent="center" alignItems="flex-start" sx={{ zIndex: 0 }}>
          <Grid item xs={12} md={5}>
            <Box sx={{ flexGrow: 1 }}>
              { rouletteStartAt ? <RouletteModule rouletteStartAt={rouletteStartAt} rouletteNumList={rouletteNumList} entryUsers={entryUsers} /> : <p>loading...</p>}
              {/* <Button onClick={handleTestButton}>Test</Button> */}
              
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label="Prize List" {...a11yProps(0)} />
                <Tab label="Dashboard" {...a11yProps(1)} />
                <Tab label="Number List" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <TabPanel value={value} index={0}>
                {prizeInfo ? <PrizeListModule prizeInfo={prizeInfo} /> : <p>loading...</p>}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {entryUsers ? <DashboardModule entryUsers={entryUsers} prizeInfo={prizeInfo} /> : <p>loading...</p>}
              </TabPanel>
              <TabPanel value={value} index={2}>
                {entryUsers ? <NumberList entryUsers={entryUsers} prizeInfo={prizeInfo} /> : <p>loading...</p>}
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
        {!isLotteryDoneOrNot && (
          <Overlay>
            <CautionText>
              The lottery has not yet been drawn!
              <br />
              Reload this page {rouletteStartAt ? `after ${rouletteStartAt}` : 'after roulette started'}!
            </CautionText>
          </Overlay>
        )}
      </>
      )}
      <StickyFooter />
    </div>
  );
};

export default RoulettePage;
