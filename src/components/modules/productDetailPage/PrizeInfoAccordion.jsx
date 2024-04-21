import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

// style
import { ContentAccordionSummaryTitle, ContentAccordionItemTitle, ContentAccordionItemContents } from '../../style/ProductDetailStyle';


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

const indicator = (i) => {
  const j = Math.abs(i);
  const cent = j % 100;
  if (cent >= 10 && cent <= 20) return `${j}th`;

  const dec = j % 10;
  if (dec === 1) return `${j}st`;
  if (dec === 2) return `${j}nd`;
  if (dec === 3) return `${j}rd`;
  return `${j}th`;
};

// eslint-disable-next-line
const PrizeInfoAccordion = ({prizeInfo}) => {
    
    // accordion
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
          {// eslint-disable-next-line
            prizeInfo.map((prize)=>(
              <Accordion expanded={expanded === indicator(prize.rank)} onChange={handleChange(indicator(prize.rank))} key={prize.title} sx={{backgroundColor: '#FFFFFF', border: 0}}>
                <AccordionSummary aria-controls="panel1d-content" id={`${indicator(prize.rank)}d-header`} sx={{backgroundColor: '#FFFFFF', mt: -1, mb: -1}}>
                  <ContentAccordionSummaryTitle>{`${indicator(prize.rank)} Prz. : ${prize.title}`}</ContentAccordionSummaryTitle>
                </AccordionSummary>
                <AccordionDetails sx={{mt:-1, mb:-1}}>
                  <Grid container direction="column" spacing={0}>
                    {prize.details.map(detailInfo=>(<div key={`${indicator(prize.rank)}prize ${indicator(detailInfo.detail_order)} info`} style={{marginBottom: "6px"}}>
                      <Grid item xs={12}>
                        <ContentAccordionItemTitle>{detailInfo.detail_title}</ContentAccordionItemTitle>
                      </Grid>
                      <Grid item xs={12}>
                        <ContentAccordionItemContents>{detailInfo.detail_contents}</ContentAccordionItemContents>
                      </Grid>
                    </div>))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        )
};

export default PrizeInfoAccordion;