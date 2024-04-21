import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useAuthenticator} from '@aws-amplify/ui-react';

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

const ProfileEditForm = () => {
    const userInfo = useSelector((state) => state.userInfo);
    const {email, userName, name, birthday, gender, address, phoneNumber} = userInfo;
    console.log(userInfo);
    
    const { user } = useAuthenticator();
    
    // genderは変更可能にする？
    const userData = {
      user_id: user.username,
      user_name: userName,
      name:{
        first_name: name.firstName || "",
        middle_name: name.middleName || "",
        family_name: name.familyName || ""
      },
      user_icon: "https://vkanviavbioaino.com/vanoaon/fnbaobvo.jpeg",
      birthday,
      address: {
        "zip_code": address.zip_code,
        "country": address.country,
        "area": address.area,
        "city": address.city,
        "other": address.other
      },
      gender: ""
    };
    
    // const [editedEmail, setEditedEmail] = useState(email);
    // const [editedUserName, setEditedUserName] = useState(userName);
    const [editedUserData, setEditedUserData] = useState(userData);
    const navigate = useNavigate();
    
    const handleEditForm = (key) => (event) => {
      const newUserData = {...editedUserData};
      newUserData[key] = event.target.value;
      setEditedUserData(newUserData);
      console.log(editedUserData);
    };
    
    const handleEditNameForm = (key) => (event) => {
      const newUserData = {...editedUserData};
      const newName = {...newUserData}.name;
      console.log(newName);
      newName[key] = event.target.value;
      // newUserData.name[key] = event.target.value;
      newUserData.name = newName;
      setEditedUserData(newUserData);
      console.log(editedUserData);
    }
    
    const handleEditAddressForm = (key) => (event) => {
      const newUserData = {...editedUserData};
      newUserData.address[key] = event.target.value;
      setEditedUserData(newUserData);
      console.log(editedUserData);
    };
    
    const handleCommitButton = () => {
      console.log(editedUserData);
      const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/account-edit';
      const postBody = {
        Keys: editedUserData
      };
      axios.post(baseUrl, postBody)
      .then((response)=>{
        console.log(response);
        navigate('/mypage', {state:{tabValue:6}});
      })
      .catch((error)=>alert(error));
    };
    
    const handleBackButton = () => {navigate('/mypage', {state:{tabValue: 6}})};
    
    return(
        <Box sx={{ flexGrow: 1, width: {xs:'80%', md:'60%'}, mx: 'auto' }}>
            <Grid container direction="column" spacing={0} justifyContent="center" alignItems="center">
              <Box sx={{ width: '100%'}}>
                    <FormGroup row sx={{alignItems:'center', margin:1}}>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>E-mail</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <ProfileCaption>{email}</ProfileCaption>
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>User Name</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={editedUserData.user_name} onChange={handleEditForm('user_name')} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>First Name</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={editedUserData.name.first_name} onChange={handleEditNameForm('first_name')} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Middle Name</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={editedUserData.name.middle_name} onChange={handleEditNameForm('middle_name')} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Last Name</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={editedUserData.name.last_name} onChange={handleEditNameForm('last_name')} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Date of Birth</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={editedUserData.birthday} onChange={handleEditForm('birthday')} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Gender</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <ProfileCaption>{gender}</ProfileCaption>
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Zip code</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={editedUserData.address.zip_code} onChange={handleEditAddressForm('zip_code')} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Aprtment, suite,etc</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={editedUserData.address.other} onChange={handleEditAddressForm('other')} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>City</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={editedUserData.address.city} onChange={handleEditAddressForm('city')} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>State/province/area</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={editedUserData.address.area} onChange={handleEditAddressForm('area')} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Country</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <TextField sx={{width:'100%'}}  value={editedUserData.address.country} onChange={handleEditAddressForm('country')} />
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Password</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <ProfileCaption>************</ProfileCaption>
                        </TextFieldGrid>
                      </FormElementGrid>
                      <FormElementGrid>
                        <Grid item xs={4}>
                          <ProfileCaption>Phone</ProfileCaption>
                        </Grid>
                        <TextFieldGrid>
                          <ProfileCaption>{phoneNumber}</ProfileCaption>
                        </TextFieldGrid>
                      </FormElementGrid>
                  </FormGroup>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Button variant="contained" color='inherit' sx={{mb: 2, ml: 3, mr: 3}} onClick={handleBackButton}>Turn Back</Button>
                  <Button variant="contained" sx={{mb: 2, ml: 3, mr: 3}} onClick={handleCommitButton}>Commit</Button>
                </Box>
              </Box>
            </Grid>
          </Box>
    );
};

export default ProfileEditForm;