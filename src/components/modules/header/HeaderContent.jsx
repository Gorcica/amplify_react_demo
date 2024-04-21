import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthenticator } from '@aws-amplify/ui-react';

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Typography from '@mui/material/Typography';

// modules
// import TicketMenuIcon from '../atoms/TicketMenuIcon';
// import TicketIconUnit from '../../atoms/TicketIconUnit';
import TicketIconUnitResizable from '../../atoms/TicketIconUnitResizable';

// eslint-disable-next-line
const HeaderContent = ({handleMobileMenuOpen, handleProfileMenuOpen}) => {
    const navigate = useNavigate();
    // const menuId = 'primary-search-account-menu';
    // const mobileMenuId = 'primary-search-account-menu-mobile';
    
    const { route } = useAuthenticator();
    
    const handleTicketIconButton = () => {
        navigate('/ticket');
    };
    const userInfo = useSelector((state) => state.userInfo);
    console.log(userInfo);
    
    
    const {normal, gold, premium} = route === 'authenticated' || route === 'signIn' ? userInfo.tickets :
      {normal:"-", gold:"-", premium:"-"};
    const {points, wishList} = route === 'authenticated' ? userInfo :
      {points:"-", wishList:[]};
  
  const wishProductsNum = wishList.length;
    
    return (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="normalTicket" color="inherit" sx={{ p:0, mr: 1}} onClick={handleTicketIconButton}>
                <Box sx={{ display:"flex", flexDirection: 'row', alignItems: 'center' }}>
                  <TicketIconUnitResizable ticketType="NORMAL" width={32} height={24} />
                  <Typography sx={{color: "white", fontSize: "medium"}}>{normal}</Typography>
                </Box>
              </IconButton>
              <IconButton size="large" aria-label="goldTicket" color="inherit" sx={{ p:0, mr: 1 }} onClick={handleTicketIconButton}>
                <Box sx={{ display:"flex", flexDirection: 'row', alignItems: 'center' }}>
                  <TicketIconUnitResizable ticketType="GOLD" width={32} height={24} />
                  <Typography sx={{color: "white", fontSize: "medium"}}>{gold}</Typography>
                </Box>
              </IconButton>
              <IconButton size="large" aria-label="premiumTicket" color="inherit" sx={{ p:0, mr: 1 }} onClick={handleTicketIconButton}>
                <Box sx={{ display:"flex", flexDirection: 'row', alignItems: 'center' }}>
                  <TicketIconUnitResizable ticketType="PREMIUM" width={32} height={24} />
                  <Typography sx={{color: "white", fontSize: "medium"}}>{premium}</Typography>
                </Box>
              </IconButton>
              <IconButton size="large" aria-label="pointCoin" color="inherit" sx={{ p:0, mr: 1 }} onClick={handleTicketIconButton}>
                <Box sx={{ display:"flex", flexDirection: 'row', alignItems: 'center'}}>
                  <TicketIconUnitResizable ticketType="COIN" width={18} height={18} />
                  <Typography sx={{color: "white", fontSize: "medium", ml: 0.5}}>{points}</Typography>
                </Box>
              </IconButton>
              <IconButton size="large" aria-label="ShoppingCart" color="inherit" onClick={()=>{navigate('/mypage', {state:{tabValue:1}})}}>
                <Badge badgeContent={wishProductsNum} color="success">
                  <ShoppingCartOutlinedIcon sx={{color: "white"}} />
                </Badge>
              </IconButton>
            </Box>
    )
};

export default HeaderContent;