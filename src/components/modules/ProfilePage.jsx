import * as React from 'react';
import {useNavigate} from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// Style
import { ProfileCaption, GreyLinkText } from '../style/ProfileStyle';

// get Global State
// eslint-disable-next-line
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const {email, userName, name, birthday, gender, address, phoneNumber} = userInfo;
  
  const navigate = useNavigate();
  
  const rouletteCount = useSelector((state)=>state.rouletteCount);
  console.log(rouletteCount);
  
  return(
  <Box sx={{ flexGrow: 1, width: {xs:'80%', md:'60%'}, mx: 'auto' }}>
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Box sx={{ width:  '100%'}}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <ProfileCaption sx={{pb: 0}}>E-mail</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption sx={{pb: 0}}>{email}</ProfileCaption>
          </Grid>
          <Grid item xs={4} sx={{pb: 1}}/>
          <Grid item xs={8} sx={{pb: 1}}>
            <GreyLinkText onClick={()=>{navigate('/emailEdit')}}>Do you want to change your email address?</GreyLinkText>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>User Name</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>{userName}</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>First Name</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>{name.firstName}</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>Middle Name</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>{name.middleName}</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>Family Name</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>{name.familyName}</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>Date of Birth</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>{birthday}</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>Gender</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>{gender}</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>Aprtment, suite,etc</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>{address.other}</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>City</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>{address.city}</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>State/province/area</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>{address.area}</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>Country</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>{address.country}</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption>Password</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption>************</ProfileCaption>
          </Grid>
          <Grid item xs={4}>
            <ProfileCaption sx={{pb: 0}}>Phone</ProfileCaption>
          </Grid>
          <Grid item xs={8}>
            <ProfileCaption sx={{pb: 0}}>{phoneNumber}</ProfileCaption>
          </Grid>
          <Grid item xs={4} sx={{pb:1}}/>
          <Grid item xs={8} sx={{pb:1}}>
            <GreyLinkText onClick={()=>{navigate('/phoneNumberEdit')}}>Do you want to change your phone number?</GreyLinkText>
          </Grid>
        </Grid>
      </Box>
      <Button variant="contained" onClick={()=>{navigate('/profileEdit')}}>Edit</Button>
    </Grid>
  </Box>
)};

export default ProfilePage;
