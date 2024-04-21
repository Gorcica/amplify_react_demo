import React from 'react';
import axios from 'axios';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Divider from '@mui/material/Divider';

// style
import { ContentAccordionSummaryTitle, ContentAccordionItemContents } from '../../style/ProductDetailStyle';


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

// eslint-disable-next-line
const FAQContents = () => {
    
    // accordion
    const [expandedCategory, setExpandedCategory] = React.useState('');
    const handleChangeCategory = (panel) => (event, newExpanded) => {
        setExpandedCategory(newExpanded ? panel : false);
    };
    
    const [expandedContents, setExpandedContents] = React.useState('');
    const handleChangeContents= (panel) => (event, newExpanded) => {
        setExpandedContents(newExpanded ? panel : false);
    };
    
    const [loading, setLoading] = React.useState(true);
    const [FAQList, setFAQList] = React.useState([]);
    
    React.useEffect(()=>{
        const getFAQs = async () => {
            const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/faq-scan';
            const postBody = {};
            await axios.post(baseUrl, postBody)
              .then((res)=>{
                console.log(res)
                setFAQList(res.data.Item);
              })
              .catch((error)=>console.log(error));
            setLoading(false)
        };
        getFAQs();
    },[]);
    
    return (<Box sx={{mt: 2, mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {loading && <div>loading</div>}
              {(!loading && FAQList) && FAQList.map((FAQCategory=>(
                <Box sx={{width: '80%', mt: 1, mb: 1}} key={FAQCategory.faq_name}>
                  <Accordion expanded={FAQCategory.faq_name === expandedCategory} onChange={handleChangeCategory(FAQCategory.faq_name)} sx={{backgroundColor: '#FFFFFF', border: 0}}>
                    <AccordionSummary aria-controls="panel1d-content" id={`faq category ${FAQCategory.faq_name}`} sx={{backgroundColor: '#FFFFFF', mt: -1, mb: -1}}>
                      <ContentAccordionSummaryTitle>{FAQCategory.faq_name}</ContentAccordionSummaryTitle>
                    </AccordionSummary>
                    <AccordionDetails sx={{mt:-1, mb:-1, ml: 6}}>
                      <Grid container direction="column" spacing={0}>
                        {FAQCategory.contents.map((FAQcontents)=>(
                          <div key={`faq category ${FAQCategory.faq_name} subject ${FAQcontents.subject}`} style={{marginBottom: "6px"}}>
                            <Accordion expanded={FAQcontents.subject === expandedContents} onChange={handleChangeContents(FAQcontents.subject)} sx={{backgroundColor: '#FFFFFF', border: 0}}>
                              <AccordionSummary aria-controls="panel1d-content" id={`faq category ${FAQCategory.faq_name} subject ${FAQcontents.subject} accordion`} sx={{backgroundColor: '#FFFFFF', mt: -1, mb: -1}}>
                                <ContentAccordionSummaryTitle>{FAQcontents.subject}</ContentAccordionSummaryTitle>
                              </AccordionSummary>
                              <AccordionDetails sx={{mt:-1, mb:-1, ml: 6}}>
                                <ContentAccordionItemContents>{FAQcontents.answer}</ContentAccordionItemContents>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        ))}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              )))}
        </Box>)
};

export default FAQContents;