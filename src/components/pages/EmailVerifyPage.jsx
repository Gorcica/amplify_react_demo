import React from 'react';

import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';
import EmailVerifyForm from '../modules/EmailVerifyPage/EmailVerifyForm';

const EmailVerifyPage = () => (
  <div>
    <Header />
    <EmailVerifyForm />
    <StickyFooter />
  </div>
);

export default EmailVerifyPage;