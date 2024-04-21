import React from 'react';

import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';
import EmailEditForm from '../modules/EmailEditPage/EmailEditForm';

const EmailEdit = () => (
  <div>
    <Header />
    <EmailEditForm />
    <StickyFooter />
  </div>
);

export default EmailEdit;