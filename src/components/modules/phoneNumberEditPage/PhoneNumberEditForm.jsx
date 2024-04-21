import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
// import axios from 'axios';
import {useAuthenticator} from '@aws-amplify/ui-react';
import {Auth} from 'aws-amplify';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';

// Style
import { ProfileCaption } from '../../style/ProfileStyle';

// eslint-disable-next-line
const FormElementGrid = ({children}) => (
  <Grid item container direction='row' alignItems='center' sx={{my:0.5}}>
    {children}
  </Grid>
);

// eslint-disable-next-line
const TextFieldGrid = ({children}) => (
  <Grid item xs={8} sx={{ textAlign:'left'}}>
    {children}
  </Grid>
);

const PhoneNumberEditForm = () => {
    const userInfo = useSelector((state) => state.userInfo);
    const {phoneNumber} = userInfo;
    console.log(userInfo);
    
    const { user } = useAuthenticator();

    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [confirmPhoneNumber, setConfirmPhoneNumber] = useState("");
    const navigate = useNavigate();
    
    
    const handleCommitButton = () => {
      const updatePhoneNumber = async () => {
        await Auth.updateUserAttributes(
          user,
          {
            phone_number: newPhoneNumber,
          }
        ).then(()=>{navigate('/PhoneNumberVerify')});
      };
      
      console.log('Process Start!');
      updatePhoneNumber();
      console.log('Process Finish!');
    };
    
    const handleBackButton = () => {navigate('/mypage', {state:{tabValue: 6}})};
    
    return(
        <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
            <Grid container direction="column" spacing={0} justifyContent="center" alignItems="center">
              <Box sx={{ width: 600 }}>
                    <FormGroup row sx={{alignItems:'center', margin:1}}>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Registered Phone Number</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <ProfileCaption>{phoneNumber}</ProfileCaption>
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>New Phone Number</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={newPhoneNumber} onChange={(e)=>{setNewPhoneNumber(e.target.value)}} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Confirm Phone Number</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={confirmPhoneNumber} onChange={(e)=>{setConfirmPhoneNumber(e.target.value)}} />
                        </TextFieldGrid>
                      </FormElementGrid>
                  </FormGroup>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Button variant="contained" color='inherit' sx={{mb: 2, ml: 3, mr: 3}} onClick={handleBackButton}>Turn Back</Button>
                  <Button variant="contained" sx={{mb: 2, ml: 3, mr: 3}} onClick={handleCommitButton} disabled={newPhoneNumber!==confirmPhoneNumber}>Commit</Button>
                </Box>
              </Box>
            </Grid>
          </Box>
    );
};

export default PhoneNumberEditForm;