import React from 'react';

import { CartProvider } from 'use-shopping-cart'

import Header from '../modules/Header';
import TicketPurchase from '../modules/ticketPurchasePage/TicketPurchase';
import StickyFooter from '../modules/Footer';

const TicketPurchasePage = () => (
  <div>
    <Header />
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe="pk_test_51I6HHhH0mdOr2N1U9vxkrhIEL3RwV0RVvsjbl8MAWpX223msjDmlMfASYnZWEDZ1skLLGI0YVkBK5niC0UwxRuMU00W04flnEx"
      currency="PHP"
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000"
    >
      <TicketPurchase />
    </CartProvider>
    <StickyFooter />
  </div>
);

export default TicketPurchasePage;
