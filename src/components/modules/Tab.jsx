import * as React from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import TopPage from './TopPage';
import EntryStatus from './EntryStatus';
import ShippedStatusTab from './ShippedStatus';
import Bookmark from './Bookmark';
import YourOrdersPage from './YourOrdersPage';
import ProfilePage from './ProfilePage';
import WishList from './WishList';

// slicer
import { updateUserInfo } from "../slicer/userInfoSlice";

const WrappedTab = styled(Tab)(({ theme }) => ({
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
    maxWidth: "none",
  },
  "& .MuiTab-wrapper": {
    whiteSpace: "break-word",
  },
}));

const TabPanel = (props) => {
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

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  console.log('test');
  return { id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}` };
};

/* eslint-disable-next-line */
const BasicTabs = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(location.state.tabValue);
  const [loading, setLoading] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const dispatch = useDispatch();
  const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/account-get-info';
  const postBody = {
    Keys:{
      user_id: useSelector((state)=>state.userInfo.userId)
    }
  };
  axios.post(baseUrl, postBody)
    .then((response) => {
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
      setLoading(false);
    })
      .catch((err) => console.log(err));
  
  

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width:'100%' }}>
        <Tabs sx={{width:"100%"}} value={value} onChange={handleChange} aria-label="basic tabs example"       
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile>
          <WrappedTab label='Top' {...a11yProps(0)} />
          <WrappedTab label="Wish List" {...a11yProps(1)} />
          <WrappedTab label="Entry Status" {...a11yProps(2)} />
          <WrappedTab label="Shipped Status" {...a11yProps(3)} />
          <WrappedTab label="Bookmark" {...a11yProps(4)} />
          <WrappedTab label="Your Orders" {...a11yProps(5)} />
          <WrappedTab label="Profile" {...a11yProps(6)} />
        </Tabs>
      </Box>
      {loading && <div>loading</div>}
      {!loading && <>
        <TabPanel value={value} index={0}>
          <TopPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WishList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <EntryStatus />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ShippedStatusTab />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Bookmark />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <YourOrdersPage />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <ProfilePage />
        </TabPanel>
      </>}
    </Box>
  );
};

export default BasicTabs;
