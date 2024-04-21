import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

// import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';

import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';

// Style
import { ProfileCaption } from '../style/ProfileStyle';

// eslint-disable-next-line
const FormElementGrid = ({children}) => (
  <Grid item container direction='row' alignItems='center' sx={{my:0.5}}>
    {children}
  </Grid>
);

// eslint-disable-next-line
const TextFieldGrid = ({children}) => (
  <Grid item xs={12} sx={{ textAlign:'left'}}>
    {children}
  </Grid>
);

const ContactPage = () => {
  const navigate = useNavigate();
  const userInfo = useSelector(state=>state.userInfo);
  console.log(userInfo);
  const [ contactInfo, setContactInfo ] = useState({
    user_id: userInfo.userId,
    user_name: userInfo.userName,
    email: userInfo.email,
    subject: "",
    inquiry_type: "About Products",
    contents: ""
  });
  
  const handleChangeText = (key) => (event) => {
    const newContactInfo = {...contactInfo};
    console.log(newContactInfo);
    newContactInfo[key] = event.target.value;
    setContactInfo(newContactInfo);
  };
  
  const handleCommitButton = () => {
      console.log(contactInfo);
      const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/contact';
      const postBody = {
        Keys: contactInfo
      };
      axios.post(baseUrl, postBody)
      .then((response)=>{
        console.log(response);
        navigate('/productList');
      })
      .catch((error)=>alert(error));
    };
    
    const handleBackButton = () => {navigate(-1)};
  
  return (
    <div>
      <Header />
      <Grid container sx={{mt: 1, mb: 1}} justifyContent="center">
        <FormGroup row sx={{alignItems:'center', margin:1, width: "60%"}}>
          <Grid item xs={12} direction='row' alignItems='center' sx={{my:0.5}}>
            <Typography variant="h2" fontSize="32px" textAlign="left" sx={{mt:1, mb:1}}>
              Contact Us
            </Typography>
          </Grid>
          
          <FormElementGrid>
            <Grid item xs={12}>
              <ProfileCaption>Your Name/Username*</ProfileCaption>
            </Grid>
            <TextFieldGrid>
              <TextField sx={{width:'100%'}} value={contactInfo.user_name} onChange={handleChangeText('user_name')} disabled={Boolean(userInfo.userId)}/>
            </TextFieldGrid>
          </FormElementGrid>
          
          <FormElementGrid>
            <Grid item xs={12}>
              <ProfileCaption>Your Email*</ProfileCaption>
            </Grid>
            <TextFieldGrid>
              <TextField sx={{width:'100%'}} value={contactInfo.email} onChange={handleChangeText('email')}/>
            </TextFieldGrid>
          </FormElementGrid>
          
          <FormElementGrid>
            <Grid item xs={12}>
              <ProfileCaption>Inquiry Type*</ProfileCaption>
            </Grid>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={contactInfo.inquiry_type}
                onChange={handleChangeText("inquiry_type")}
              >
                <FormControlLabel value="About Products" control={<Radio />} label="About Products" />
                <FormControlLabel value="About Delivery" control={<Radio />} label="About Delivery" />
                <FormControlLabel value="To Sellers" control={<Radio />} label="To Sellers" />
                <FormControlLabel value="Others" control={<Radio />} label="Others" />
              </RadioGroup>
          </FormElementGrid>
          
          <FormElementGrid>
            <Grid item xs={12}>
              <ProfileCaption>Subject*</ProfileCaption>
            </Grid>
            <TextFieldGrid>
              <TextField sx={{width:'100%'}} value={contactInfo.subject} onChange={handleChangeText('subject')}/>
            </TextFieldGrid>
          </FormElementGrid>
          
          <FormElementGrid>
            <Grid item xs={12}>
              <ProfileCaption>Contents*</ProfileCaption>
            </Grid>
            <TextFieldGrid>
              <TextField sx={{width:'100%'}} value={contactInfo.contents} onChange={handleChangeText('contents')} multiline rows={8} />
            </TextFieldGrid>
          </FormElementGrid>
          
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button variant="contained" color='inherit' sx={{mb: 2, ml: 3, mr: 3}} onClick={handleBackButton}>Turn Back</Button>
            <Button variant="contained" sx={{mb: 2, ml: 3, mr: 3}} onClick={handleCommitButton}>Submit</Button>
          </Box>
        </FormGroup>
      </Grid>
      <StickyFooter />
    </div>
  );};

export default ContactPage;