import React from 'react';

import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';
import FAQContents from '../modules/FAQ/FAQContents';

const FAQ = () => (
  <div>
    <Header />
    <FAQContents />
    <StickyFooter />
  </div>
);

export default FAQ;