import React from 'react';

import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';
import PhoneNumberVerifyForm from '../modules/phoneNumberVerifyPage/PhoneNumberVerifyForm';

const PhoneNumberVerifyPage = () => (
  <div>
    <Header />
    <PhoneNumberVerifyForm />
    <StickyFooter />
  </div>
);

export default PhoneNumberVerifyPage;