import * as React from 'react';
import {useNavigate} from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Copyright = () => (
  <Typography variant="body2" color="text.secondary">
    {'Copyright © '}
    {new Date().getFullYear()}.
    <Link color="inherit" href="https://mui.com/">
      Cloud.G, Asuka inc.
    </Link>{' '}
  </Typography>
);

const StickyFooter = () => {
  const navigate = useNavigate();
  return (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '500',
    }}
  >
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="md">
        <Box sx={{display: {md:'flex', xs: 'none'}, justifyContent: 'center'}}>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5, }}>
            Conditions of Use
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}}>
            |
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}} onClick={()=>navigate('/privacy_notice')}>
            Privacy Notice
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}}>
            |
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}}>
            Interest Based Ads Policy
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}}>
            |
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}} onClick={()=>{navigate('/contacts')}}>
            Contact
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}}>
            |
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}} onClick={()=>{navigate('/faq')}}>
            FAQ
          </Typography>
        </Box>
        <Box sx={{display: {md:'none', xs: 'flex'}, flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5, }}>
            Conditions of Use
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}} onClick={()=>navigate('/privacy_notice')}>
            Privacy Notice
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}}>
            Interest Based Ads Policy
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}} onClick={()=>{navigate('/contacts')}}>
            Contact
          </Typography>
          <Typography variant="body1" sx={{mr: 0.5, ml: 0.5}} onClick={()=>{navigate('/faq')}}>
            FAQ
          </Typography>
        </Box>
        <Copyright />
      </Container>
    </Box>
  </Box>
)};

export default StickyFooter;
