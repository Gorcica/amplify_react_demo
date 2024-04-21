import * as React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link as RouteLink } from 'react-router-dom';

// eslint-disable-next-line
import {useSelector, useDispatch} from "react-redux";
// eslint-disable-next-line
import {updateUserInfo} from "../slicer/userInfoSlice";

const baseURL = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/account-get-info';

const Copyright = (props) => {
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>;
};

const theme = createTheme();


// Login時にAWSにemailとPWを送信して、User情報を受け取る機能を今後実装。


const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };
  
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  
  const CreatePost = () => {
    axios
      .post(baseURL, {
        Keys:{
          user_id: '113fa103-fa98-4d7a-9272-090cbf828c56'
        },
      })
      .then((response) => {
        // 取得したデータをグローバルステートに格納する
        if (response.data.StatusCode === 200) {
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
            points: rawData.points
          };
          dispatch(updateUserInfo(userInfoData));
          try{
            localStorage.setItem('userId', userInfoData.userId);
          } catch(error) {
            console.log("エラー：", error.message);
          }
          navigate('/productList',{state:{defaultValue:0}});
      }})
      .catch((err) => alert(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // component={RouteLink}
              color="primary"
              onClick={CreatePost}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="foo" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="foo" variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
