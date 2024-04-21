import React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

// modules
import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';

// images
import RoulettePng from '../../Images/roulette.png';
import HighQualityLowPricePng from '../../Images/high_quality_low_price.png';
import MensPicturePng from '../../Images/mens.png';
import SearchIllustrationPng from '../../Images/search_mushimegane.png';
import ProductDetailPageCapturePng from '../../Images/productDetail_0510.png';
import RoulettePageCapturePng from '../../Images/roulette_page.png';

// Styles
import { ContentTitleBold, ContentText } from '../style/GlobalStyle';
import { BoxTitle, BoxText, BoxTitleBold } from '../style/ServiceTopStyle';


// Accordion
const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const RouletteImage = () => (
  <Box sx={{ width: 400, height: 400 }}>
    <img src={RoulettePng} alt="normal tickets" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const HighQualityLowPriceImage = () => (
  <Box sx={{ width: 250, height: 200 }}>
    <img src={HighQualityLowPricePng} alt="" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const MenImage = () => (
  <Box sx={{ width: 350, hright: 200 }}>
    <img src={MensPicturePng} alt="" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const SearchImage = () => (
  <Box sx={{ width: 200, height: 200 }}>
    <img src={SearchIllustrationPng} alt="" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const ProductDetailImage = () => (
  <Box sx={{ width: 350, height: 200 }}>
    <img src={ProductDetailPageCapturePng} alt="" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const RoulettePageImage = () => (
  <Box sx={{ width: 380, height: 200 }}>
    <img src={RoulettePageCapturePng} alt="" style={{ width: '100%', height: '100%' }} />
  </Box>
);

const ServiceTop = () => {
  // accordion
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Header />

      <Box sx={{ width: '60%', mx: 'auto', mt: '10px' }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={0} sx={{display: {xs: 'block', md: 'none'}}}>
            <Box sx={{ flexGrow: 1, maxWidth: 700 }}>
              <ContentTitleBold>Play roulette and Get valuable products at low prices and have fun!</ContentTitleBold>
              <Grid container direction="row">
                <Button variant="contained" size="large" href="/signin" sx={{"textTransform": 'none', pl:0.5, pr: 0.5, m: 1}}>
                  Sign In / Sign Up
                </Button>
                <Button variant="contained" size="large" href="/productList" sx={{"textTransform": 'none', pl:0.5, pr: 0.5, m:1}}>
                  Get In Product List!
                </Button>
              </Grid>
              <ContentText>
                You must agree to the Terms of Use and Privacy Policy Before using This Service.
              </ContentText>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <RouletteImage />
          </Grid>
          <Grid item xs={0} md={6} sx={{display: {xs: 'none', md: 'block'}}}>
            <Box sx={{ flexGrow: 1, maxWidth: 700 }}>
              <ContentTitleBold>Play roulette and Get valuable products at low prices and have fun!</ContentTitleBold>
              <Grid container direction="row">
                <Button variant="contained" size="large" href="/signin" sx={{"textTransform": 'none', pl:0.5, pr: 0.5, m: 1}}>
                  Sign In / Sign Up
                </Button>
                <Button variant="contained" size="large" href="/productList" sx={{"textTransform": 'none', pl:0.5, pr: 0.5, m:1}}>
                  Get In Product List!
                </Button>
              </Grid>
              <ContentText>
                You must agree to the Terms of Use and Privacy Policy Before using This Service.
              </ContentText>
            </Box>
          </Grid>
          
        </Grid>
        <Box sx={{ height: 20 }} />
        <ContentTitleBold>About CloudG</ContentTitleBold>
        <Grid container>
          <Grid item xs={3}>
            <HighQualityLowPriceImage />
          </Grid>
          <Grid item xs={9}>
            <Box sx={{ height: 150, borderRadius: 8, p: 2, backgroundColor: '#f5f5f5', justifyContent: 'center' }}>
              <BoxTitle>Get what you want at low price.</BoxTitle>
              <BoxText>In our service, you can win products by participating in roulette. </BoxText>
              <BoxText>The minimum entry fee is approximately 1/20th of the product&apos;s list price.</BoxText>
              <BoxText>Get the product of your dreams at a discounted price.</BoxText>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ height: 20 }} />
        <Grid container>
          <Grid item xs={8}>
            <Box sx={{ height: 150, borderRadius: 8, p: 2, backgroundColor: '#f5f5f5', justifyContent: 'center' }}>
              <BoxTitle>Excitement and thrill for you!</BoxTitle>
              <BoxText>The roulette draw you paticipate in will be live online.</BoxText>
              <BoxText>You can enjoy playing roulette with your family, friends, and loved ones.</BoxText>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <MenImage />
          </Grid>
        </Grid>

        <Box sx={{ height: 20 }} />
        <ContentTitleBold>How to Use</ContentTitleBold>
        <Box sx={{ height: 200, borderRadius: 8, p: 2, backgroundColor: '#f5f5f5', justifyContent: 'center' }}>
          <Grid container alignItems="center">
            <Grid item xs={1} />
            <Grid item xs={2}>
              <BoxTitleBold>Step1</BoxTitleBold>
            </Grid>
            <Grid item xs={6}>
              <BoxTitle>Excitement and thrill for you!</BoxTitle>
              <BoxText>The roulette draw you paticipate in will be live online.</BoxText>
              <BoxText>You can enjoy playing roulette with your family, friends, and loved ones.</BoxText>
            </Grid>
            <Grid item xs={3}>
              <SearchImage />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: 20 }} />
        <Box sx={{ height: 200, borderRadius: 8, p: 2, backgroundColor: '#f5f5f5', justifyContent: 'center' }}>
          <Grid container alignItems="center">
            <Grid item xs={1} />
            <Grid item xs={2}>
              <BoxTitleBold>Step2</BoxTitleBold>
            </Grid>
            <Grid item xs={5}>
              <BoxTitle>Join the roulette!</BoxTitle>
              <BoxText>Use the tickets available on the site</BoxText>
              <BoxText>to participate in the roulette of the products you want.</BoxText>
            </Grid>
            <Grid item xs={4}>
              <ProductDetailImage />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: 20 }} />
        <Box sx={{ height: 200, borderRadius: 8, p: 2, backgroundColor: '#f5f5f5', justifyContent: 'center' }}>
          <Grid container alignItems="center">
            <Grid item xs={1} />
            <Grid item xs={2}>
              <BoxTitleBold>Step3</BoxTitleBold>
            </Grid>
            <Grid item xs={5}>
              <BoxTitle>Check the roulette results.</BoxTitle>
              <BoxText>Check the roulette results to see if you&apos;ve won.</BoxText>
            </Grid>
            <Grid item xs={4}>
              <RoulettePageImage />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: 20 }} />
        <ContentTitleBold>Facebook</ContentTitleBold>

        <Box sx={{ height: 20 }} />
        <ContentTitleBold>FAQ</ContentTitleBold>
        <div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <BoxTitle>Question1</BoxTitle>
            </AccordionSummary>
            <AccordionDetails>
              <BoxText>BoxText1</BoxText>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <BoxTitle>Question2</BoxTitle>
            </AccordionSummary>
            <AccordionDetails>
              <BoxText>BoxText2</BoxText>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <BoxTitle>Question3</BoxTitle>
            </AccordionSummary>
            <AccordionDetails>
              <BoxText>BoxText3</BoxText>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
      <Box sx={{ height: 20 }} />
      <StickyFooter />
    </div>
  );
};

export default ServiceTop;
