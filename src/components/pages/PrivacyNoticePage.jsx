import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';

const PrivacyNoticePage = () => (
  <div>
    <Header />
    <Grid container sx={{mt: 1, mb: 1}} justifyContent="center">
      <Grid item sm={8} justifyContent="start">
        <Typography variant="h2" fontSize="32px" textAlign="left" sx={{mt:1, mb:1}}>
          cloud.G Privacy Notice
        </Typography>
        <Typography variant="body2" fontSize="16px" textAlign="left">
          Last updated： 2022/12/14
        </Typography>
        <Divider sx={{width: "100%", mt: 1, mb: 1}} />
        <Typography variant="body1" fontSize="16px" textAlign="left">
          Asuka Inc. recognizes the importance of protecting personal information in today&apos;s information-communication society and is committed to protecting personal information based on the following policy. We recognize the importance of protecting personal information and believe that it is our social responsibility to comply with laws and regulations and protect the privacy of our customers with the utmost care, and we will handle personal information with the utmost care so that our customers can use our services safely and securely.
        </Typography>
        
        <Typography variant="h3" fontSize="28px" textWeight="bold" textAlign="left" sx={{mt:2, mb:1}}>
          Collection of Personal Information
        </Typography>
        <Typography variant="body1" fontSize="16px" textAlign="left" sx={{ml: 1}}>
          We will acquire personal information through legal and fair means. When we receive personal information from our customers, we will clearly state in advance the purpose for which the information will be used.
          However, we may omit presenting the purpose of use when we receive personal information by telephone, fax, e-mail, or other means. If the personal information we obtain is insufficient, we may not be able to provide all or part of our services.
        </Typography>
        
        <Typography variant="h3" fontSize="28px" textWeight="bold" textAlign="left" sx={{mt:2, mb:1}}>
          Scope
        </Typography>
        <Typography variant="body1" fontSize="16px" textAlign="left" sx={{ml: 1}}>
          When we receive personal information from our customers, it usually includes the following
          Customer&apos;s name, place of employment, contact information (name, address, telephone number, e-mail address, etc.)
        </Typography>
        
        <Typography variant="h3" fontSize="28px" textWeight="bold" textAlign="left" sx={{mt:2, mb:1}}>
          Purpose of Use
        </Typography>
        <Typography variant="body1" fontSize="16px" textAlign="left" sx={{ml: 1}}>
          We will use the personal information provided by our customers within the scope of the following purposes.
          We will use the information within the scope of the purpose of use indicated at the time of acquisition of personal information, and only to the extent necessary for the performance of our business.
          We may use the information to request opinions, requests, and information for the purpose of further service improvement.
        </Typography>
        
        <Typography variant="h3" fontSize="28px" textWeight="bold" textAlign="left" sx={{mt:2, mb:1}}>
          To contact customers
        </Typography>
        <Typography variant="body1" fontSize="16px" textAlign="left" sx={{ml: 1}}>
          We may ask for other information for the purpose of providing better service to our customers, in which case we will clarify the purpose in advance.
        </Typography>
        
        <Typography variant="h3" fontSize="28px" textWeight="bold" textAlign="left" sx={{mt:2, mb:1}}>
          Disclosure to third parties
        </Typography>
        <Typography variant="body1" fontSize="16px" textAlign="left" sx={{ml: 1}}>
          Personal information (name, address, telephone number, e-mail address, etc.) provided by the customer will not be disclosed to any third party without the prior consent of the customer, except in the following cases
          When the customer has given consent
          When disclosure is required by law or other relevant authorities.
          In the case of disclosure in such a way that the individual customer cannot be identified.
        </Typography>
        
        <Typography variant="h3" fontSize="28px" textWeight="bold" textAlign="left" sx={{mt:2, mb:1}}>
          Sharing of Personal Data
        </Typography>
        <Typography variant="body1" fontSize="16px" textAlign="left" sx={{ml: 1}}>
          We may disclose your personal information to subcontractors, etc. to the extent necessary in the following cases.
          When performing work related to server and domain acquisition procedures
          When we need the customer&apos;s personal information for the production of a program, etc.
        </Typography>
        
        <Typography variant="h3" fontSize="28px" textWeight="bold" textAlign="left" sx={{mt:2, mb:1}}>
          Organization and Structure
        </Typography>
        <Typography variant="body1" fontSize="16px" textAlign="left" sx={{ml: 1}}>
          We will appoint a personal information protection manager and implement appropriate management of personal information.
          We will strive to thoroughly inform our employees about the protection of personal information, appropriate management methods, and the proper handling of personal information in their daily work.
        </Typography>
        
        <Typography variant="h3" fontSize="28px" textWeight="bold" textAlign="left" sx={{mt:2, mb:1}}>
          Management (Compliance Program)
        </Typography>
        <Typography variant="body1" fontSize="16px" textAlign="left" sx={{ml: 1}}>
          We will strive to properly manage our customers&apos; personal information and prevent it from being leaked to outside parties. We will formulate a compliance program, &quot;Personal Information Protection Regulations,&quot; and make these regulations known to our employees and other concerned parties in an effort to continually improve them.
        </Typography>
        
        <Typography variant="h3" fontSize="28px" textWeight="bold" textAlign="left" sx={{mt:2, mb:1}}>
          Change of Rules and Policies
        </Typography>
        <Typography variant="body1" fontSize="16px" textAlign="left" sx={{ml: 1}}>
          In the event of any change in the acquisition, scope, or purpose of use of your personal information, we will post a notice on our website to keep you informed of the latest information.
          When we change the content of our privacy policy as necessary, we will indicate the change on the website and clearly indicate the date when the changes become effective.
        </Typography>
        
        <Typography variant="h3" fontSize="28px" textWeight="bold" textAlign="left" sx={{mt:2, mb:1}}>
          Other
        </Typography>
        <Typography variant="body1" fontSize="16px" textAlign="left" sx={{ml: 1}}>
          When we disclose or use personal information for any reason, we will do so only after confirming with you in advance and obtaining your permission.
          Supplementary Provisions
          These Terms and Conditions are effective as of January 1, 2023.
          January 1, 2023 Establishment
          Management Company: Aska Corporation
          Representative Director: Annabelle
        </Typography>
        
        
      </Grid>
    </Grid>
    <StickyFooter />
  </div>
);

export default PrivacyNoticePage;