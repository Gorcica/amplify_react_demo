import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';

import { Authenticator } from "@aws-amplify/ui-react";

import store from "./store/store";

import RootRouter from './router/RootRouter';

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#8bc34a',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    text: {
      primary: '#202020',
      secondary: '#808080',
      disabled: '#bfbfbf',
    },
    background: {
      paper: '#fffff0',
      default: '#f5f5f5',
    },
  },
});

const App = () => (
  <ThemeProvider theme={appTheme}>
  <BrowserRouter>
    <Authenticator.Provider>
    <Provider store={store}>
      <div className="App">
      <RootRouter />
        {/* <Routes>
          <Route path="/" element={<ServiceTop />} />
          <Route path="mypage" element={<LoginTop />} />
          <Route path='profileEdit' element={<ProfileEdit />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="login" element={<Login />} />
          <Route path="productDetail/:productId" element={<ProductDetailPage />} />
          <Route path="productList" element={<ProductListPage />} />
          <Route path="roulette/:productId" element={<RoulettePage />} />
          <Route path="ticket" element={<TicketPurchasePage />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy_notice" element={<PrivacyNoticePage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
        {/* <ServiceTop /> */}
      </div>
    </Provider>
    </Authenticator.Provider>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
