import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { useAuthenticator } from '@aws-amplify/ui-react';

// import { styled, alpha } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StarIcon from '@mui/icons-material/Star';
import HistoryIcon from '@mui/icons-material/History';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Input from '@mui/material/Input';

import Select from '@mui/material/Select';

// svg
import Icon from '../atoms/Icon';
// import {ReactComponent as RouletteIcon} from '../../Images/rouletteIcon2.svg';
import TicketsIcon from '../../Images/tickets.png';

// css
import '../style/Header.css';

// modules
import HeaderContent from './header/HeaderContent';

// slicer
import { updateUserInfo } from "../slicer/userInfoSlice";

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   backgroundColor: "white",
//   borderRadius: "10px",
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

const SAppBar = styled(AppBar)(()=>({
  backgroundColor: "#1C2B53",
  height: 100,
}));

// const SPaper = styled(Paper)(()=>({
//   backgroundColor: "#1C2B53",
// }))

const StyledSearchButton = styled(Button)({
  position: 'relative',
  '&:hover': {
    '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        zIndex: 1,
        borderRadius: '0 5px 5px 0',
      },
  },
});

const PrimarySearchAppBar = () => {
  const { signOut, user } = useAuthenticator(context=>[context.user]);
  const { route } = useAuthenticator();
  if (route === 'signIn') {window.location.reload()}
 
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [loading, setLoading] = useState(false);
  
  
  React.useEffect(()=>{
    const getUserInfo = async () => {
      if (route === 'authenticated' || route === 'signIn'){
        const baseURL = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/account-get-info';
        const postBody = {Keys:{user_id: user.username}};
        setLoading(true);
        await axios.post(baseURL, postBody)
          .then((response) => {
            // 取得したデータをグローバルステートに格納する
            const rawData = response.data.Item;
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
          .catch((err) => console.log(err));}
      };
      
      getUserInfo();
      
    // eslint-disable-next-line
    },[route]);
    
  React.useEffect(()=>{
    // eslint-disable-next-line
    const getCategoryList = async () => {
      setCategoryLoading(true);
      const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/category-scan';
      const postBody = {};
      await axios.post(baseUrl, postBody)
        .then((res)=>{
          console.log(res)
          const categoryNameList = res.data.Item;
          const newCategoryList = categoryNameList.map(category=>({
            categoryName: category.category_name,
            categoryId: category.category_id
          })).sort();
          setCategoryList([{categoryName: 'ALL', categoryId: "ALL"},...newCategoryList]);
          setCategoryLoading(false);
      }).catch((error)=>{console.log(error)});
    };
    
    getCategoryList();
  },[])
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [accountDropdownAnchorEl, setAccountDropdownAnchorEl] = useState(null);
  const openAccountDD = Boolean((accountDropdownAnchorEl));
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();
  
  
  // Drawer用
  const [state, setState] = React.useState({
    left: false,
  });

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    navigate('/mypage', {state:{tabValue:0}});
    setAnchorEl(event.currentTarget);
  };
  
  const handleOpenDropdown = (event) => {
    setAccountDropdownAnchorEl(event.currentTarget);
  };
  
  const handleCloseDropdown = () => {
    setAccountDropdownAnchorEl(null);
  };
  
  const handleMobileMenuOpen = (event) => {
    console.log('open');
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    console.log('close');
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleCloudGIconButton = () => {
      navigate('/productList');
    };
  
  const handleDeliveryAddressButton = () => {
    navigate('/mypage', {state: {tabValue: 6}});
  };
  
  const handleEnterKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="ShoppingCart" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <p>ShoppingCart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // Drawer用
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Purchase Tickets', 'Cart', 'Profile'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const anchor = 'left';
  console.log(userInfo);
  
  
  const handleSearch = () => {
    const searchCategoryId = selectedCategory === 'ALL' ? "" : selectedCategory;
    navigate(`/search?categoryId=${searchCategoryId}&word=${searchWord}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SAppBar position="static">
        <Box sx={{height: "60px", display: 'flex', pl: 2, pr:2, alignItems: "center", justifyContent: 'start'}}>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
          <Button onClick={handleCloudGIconButton} sx={{textTransform: 'none', mr:1, display: { xs: 'none', sm: 'block' }}}>
            <Typography variant="h6" component="div" sx={{ color:'white', width:'auto' }}>
              cloud.G
            </Typography>
          </Button>
          {route === 'authenticated' ? (
          <Button onClick={handleDeliveryAddressButton} style={{textTransform: 'none'}} sx={{width:145, mr: 1, ml: 1, pr: 1, pl: 1, display: { xs: 'none', sm: 'flex' }}}>
            <LocalShippingIcon className="reverse" sx={{color: "white", mr: 1}}/>
            <Box sx={{display: { xs: 'none', sm: 'block' }}}>
              <Typography variant="h6" component="div" noWrap textAlign="left" sx={{ display: { xs: 'none', sm: 'block' }, width: {sm: 80}, overflow: 'hidden', color:'white' , fontSize:10, fontWeight:'light'}}>
                Deliver to {userInfo.userName}
              </Typography>
              <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' }, color:'white', width:'auto', fontSize:12, textAlign: 'left'}}>
                {userInfo.address.zip_code}
              </Typography>
            </Box>
          </Button>) : (
          <Button onClick={handleDeliveryAddressButton} style={{textTransform: 'none'}} sx={{width:145, mr: 1, ml: 1, pr: 1, pl: 1}}>
            <PersonIcon className="reverse" sx={{color: "white", mr: 1}}/>
            <Box sx={{display: { xs: 'none', sm: 'block' }}}>
              <Typography variant="h6" component="div" noWrap textAlign="left" sx={{ display: { xs: 'none', sm: 'block' }, width: {sm: 80}, overflow: 'hidden', color:'white' , fontSize:10, fontWeight:'light'}}>
                You are
              </Typography>
              <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' }, color:'white', width:'auto', fontSize:12, textAlign: 'left'}}>
                Guest
              </Typography>
            </Box>
          </Button>
          )}
          <Box sx={{ display: "flex", height: 30, width: { xs: '100%', sm: '60%', md: '50%' }, mr: 1, ml:1}}>
            <Select
              name="searchWay"
              size="small"
              outline="none"
              value={selectedCategory}
              onChange={(e)=>setSelectedCategory(e.target.value)}
              sx={{backgroundColor: "#C6C6C6", width: 180, borderTopRightRadius: 0, borderBottomRightRadius: 0, fontSize: 14}}
            >
              {categoryLoading ? <MenuItem value="ALL">ALL</MenuItem> :(
                categoryList.map(category=>(<MenuItem value={category.categoryId}>{category.categoryName}</MenuItem>)
              ))}
            </Select>
            <Input placeholder="Search by Product Name, Detail, or Tags" onKeyDown={handleEnterKeyDown} inputProps={{ inputMode: 'text' }} sx={{backgroundColor: '#FFFFFF', width: "100%", outline: "1px", fontSize: 14, pl: 1}} value={searchWord} onChange={(event)=>setSearchWord(event.target.value)} />
            <StyledSearchButton size="small" onClick={()=>handleSearch()} sx={{backgroundColor:"#337FBF", borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
              <SearchIcon sx={{color:"#FFFFFF"}} />
            </StyledSearchButton>
          </Box>
          <Box sx={{ml:"auto", display: { xs: 'none', sm: 'block' }}} >
            {loading && <div>loading...</div>}
            {!loading && <HeaderContent handleMobileMenuOpen={handleMobileMenuOpen} handleProfileMenuOpen={handleProfileMenuOpen} />}
          </Box>
        </Box>
       <Box sx={{height: "40px", display: 'inline-flex', pl: 2, pr:2, alignItems: "center"}}>
          <Button
            onClick={()=>{navigate('/productList')}}
            size="small"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, alignItems: "center" }}>
              <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'block' }, fontSize:"medium", color:'white', textTransform: 'none' }}>
                Category
              </Typography>
          </Button>
          <Button
            size="small"
            color="inherit"
            aria-label="open drawer"
            onClick={()=>{navigate('/ticket')}}
            sx={{ mr: 2, alignItems: "center" }}>
              <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'block', md: 'none' }, fontSize:"medium", color:'white', textTransform: 'none' }}>
                Tickets
              </Typography>
          </Button>
          <Button
            size="small"
            color="inherit"
            aria-label="open drawer"
            onClick={()=>{navigate('/mypage', {state:{tabValue: 4}})}}
            sx={{ mr: 2, alignItems: "center" }}>
              <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'block', md: 'none' }, fontSize:"medium", color:'white', textTransform: 'none' }}>
                Bookmarks
              </Typography>
          </Button>
          {route !== 'authenticated' ? 
          (<Button
            size="small"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0, alignItems: "center", ml:"auto"}}
            onClick={()=>navigate('/login')}
            >
              <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, fontSize:"medium", color:'white', textTransform: 'none' }}>
                login
              </Typography>
          </Button>) : 
          (<><Button
            size="small"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0, alignItems: "center", ml:"auto"}}
            onClick={handleOpenDropdown}>
              <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'block' }, fontSize:"medium", color:'white', textTransform: 'none' }}>
                My Accounts
              </Typography>
              <ArrowDropDownIcon sx={{color: '#FFFFFF'}} />
          </Button>
          <Menu
            anchorEl={accountDropdownAnchorEl}
            open={openAccountDD}
            onClose={handleCloseDropdown}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            MenuListProps={{sx: {backgroundColor: theme=>theme.palette.grey[300], color: "#000000"}}}
          >
            <MenuItem sx={{display: "flex"}} onClick={()=>navigate('/mypage', {state:{tabValue: 0}})}><DashboardIcon /><Typography sx={{ml: 1}}>My Account Top</Typography></MenuItem>
            <MenuItem sx={{display: "flex"}} onClick={()=>navigate('/ticket')}><img src={TicketsIcon} alt="tickets" style={{ width: '18px', height: '18px' }} /><Typography sx={{ml: 1}}>Tickets</Typography></MenuItem>
            <MenuItem sx={{display: "flex"}} onClick={()=>navigate('/mypage', {state:{tabValue: 1}})}><ShoppingCartOutlinedIcon /><Typography sx={{ml: 1}}>Wish List</Typography></MenuItem>
            <MenuItem sx={{display: "flex"}} onClick={()=>navigate('/mypage', {state:{tabValue: 2}})}><Box sx={{width: 23, height: 23}}><Icon icon="roulette2" /></Box><Typography sx={{ml: 1}}>Entry List</Typography></MenuItem>
            <MenuItem sx={{display: "flex"}} onClick={()=>navigate('/mypage', {state:{tabValue: 3}})}><LocalShippingIcon /><Typography sx={{ml: 1}}>Shipped Status</Typography></MenuItem>
            <MenuItem sx={{display: "flex"}} onClick={()=>navigate('/mypage', {state:{tabValue: 4}})}><StarIcon /><Typography sx={{ml: 1}}>Bookmarks</Typography></MenuItem>
            <MenuItem sx={{display: "flex"}} onClick={()=>navigate('/mypage', {state:{tabValue: 5}})}><HistoryIcon /><Typography sx={{ml: 1}}>Your Orders</Typography></MenuItem>
            <MenuItem sx={{display: "flex"}} onClick={()=>navigate('/mypage', {state:{tabValue: 6}})}><AccountBoxIcon /><Typography sx={{ml: 1}}>Profile</Typography></MenuItem>
            <MenuItem sx={{display: "flex"}} onClick={()=>signOut()}><LogoutIcon /><Typography sx={{ml: 1}}>Logout</Typography></MenuItem>
          </Menu></>
          )
          }
        </Box>
      </SAppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default PrimarySearchAppBar;
