import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Badge = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffa500',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#ffffff',
}));

const TitleItem = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#1A2027',
  fontSize: 18,
}));

const UserInformation = () => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      margin: 2,
      maxHeight: 240,
      overflow: 'scroll',
      outline: '1px solid',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
    }}
  >
    <Grid container spacing={2}>
      <Grid item container direction="column" spacing={2} alignItems="flex-start">
        <Grid container direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Grid item xs={1}>
            <Badge>new</Badge>
            <Grid />
          </Grid>
          <Grid item xs={11}>
            <TitleItem>this is a sample text. This space will keep you informed about the Service. </TitleItem>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Grid item xs={1}>
            <Badge>new</Badge>
            <Grid />
          </Grid>
          <Grid item xs={11}>
            <TitleItem>this is a sample text. This space will keep you informed about the Service. </TitleItem>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Grid item xs={1}>
            <Badge>new</Badge>
            <Grid />
          </Grid>
          <Grid item xs={11}>
            <TitleItem>this is a sample text. This space will keep you informed about the Service. </TitleItem>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Grid item xs={1}>
            <Badge>new</Badge>
            <Grid />
          </Grid>
          <Grid item xs={11}>
            <TitleItem>this is a sample text. This space will keep you informed about the Service. </TitleItem>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Grid item xs={1}>
            <Badge>new</Badge>
            <Grid />
          </Grid>
          <Grid item xs={11}>
            <TitleItem>this is a sample text. This space will keep you informed about the Service. </TitleItem>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Grid item xs={1}>
            <Badge>new</Badge>
            <Grid />
          </Grid>
          <Grid item xs={11}>
            <TitleItem>this is a sample text. This space will keep you informed about the Service. </TitleItem>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Grid item xs={1}>
            <Badge>new</Badge>
            <Grid />
          </Grid>
          <Grid item xs={11}>
            <TitleItem>this is a sample text. This space will keep you informed about the Service. </TitleItem>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Grid item xs={1}>
            <Badge>new</Badge>
            <Grid />
          </Grid>
          <Grid item xs={11}>
            <TitleItem>this is a sample text. This space will keep you informed about the Service. </TitleItem>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Grid item xs={1}>
            <Badge>new</Badge>
            <Grid />
          </Grid>
          <Grid item xs={11}>
            <TitleItem>this is a sample text. This space will keep you informed about the Service. </TitleItem>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);

export default UserInformation;
