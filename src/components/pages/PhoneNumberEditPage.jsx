import React from 'react';

import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';
import PhoneNumberEditForm from '../modules/phoneNumberEditPage/PhoneNumberEditForm';

const PhoneNumberEdit = () => (
  <div>
    <Header />
    <PhoneNumberEditForm />
    <StickyFooter />
  </div>
);

export default PhoneNumberEdit;