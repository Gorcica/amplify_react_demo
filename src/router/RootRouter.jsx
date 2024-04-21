// import WithoutAuthRouter from './WithoutAuthRouter';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
// eslint-disable-next-line
import '@aws-amplify/ui-react/styles.css';

import ContactPage from '../components/pages/ContactPage';
import FAQ from '../components/pages/FAQ';
import SignIn from '../components/pages/Signin';
import NotFound from '../components/pages/NotFound';
import LoginTop from '../components/pages/LoginTop';
import ProductDetailPage from '../components/pages/ProductDetailPage';
import PrivacyNoticePage from '../components/pages/PrivacyNoticePage';
import RoulettePage from '../components/pages/RoulettePage';
import ServiceTop from '../components/pages/ServiceTop';
// import Login from '../components/pages/Login';
import ProductListPage from '../components/pages/ProductListPage';
import ProfileEdit from '../components/pages/ProfileEdit';
import TicketPurchasePage from '../components/pages/TicketPurchasePage';
import SearchResultListPage from '../components/pages/SearchResultListPage';
import EmailEdit from '../components/pages/EmailEditPage';
import EmailVerify from '../components/pages/EmailVerifyPage';
import PhoneNumberEdit from '../components/pages/PhoneNumberEditPage';
import PhoneNumberVerify from '../components/pages/PhoneNumberVerifyPage';

import AuthenticatorComponents from '../components/modules/authenticator/AuthenticatorComponents';

const formFields = {
  signIn: {
    username: {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    username: {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      order: 1,
    },
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: true,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password:',
      placeholder: 'Confirm your Password:',
      isRequired: true,
      order: 3,
    },
    phone_number: {
      label: 'Phone number',
      dialCodeList: ["+63", "+81"],
      isRequired: true,
      order: 4,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

// eslint-disable-next-line
const NeedAuthenticate = ({ children }) => {


  // const services = {signUp: ({formdata}) => {
  //   console.log(formdata);
  //   const {username, password, phone_number} = formdata;

  // }}

  return (
    <Authenticator components={AuthenticatorComponents} formFields={formFields} signUpAttributes={['phone_number']} UserNameAttributes="email">
      {children}
    </Authenticator>
  )
};

const RootRouter = () => {
  console.log('test');
  const navigate = useNavigate();

  const handleSignUpDefaultFunc = async (formData) => {
    // eslint-disable-next-line
    const { username, password, attributes } = formData;
    console.log(formData);
    await Auth.signUp({
      username,
      password,
      attributes: {
        // eslint-disable-next-line
        phone_number: attributes.phone_number,
        email: username
      },
    });
  };

  const handleSingInOnLoginPageFunc = async (formData) => {
    const { username, password } = formData;
    return Auth.signIn({
      username,
      password,
    }).then((response) => {
      console.log(response);
      navigate('/productList');
    });
  }

  const services = { handleSignIn: handleSingInOnLoginPageFunc, handleSignUp: handleSignUpDefaultFunc };

  return (
    <Routes>
      <Route path="/" element={<ServiceTop />} />
      <Route path="mypage" element={<NeedAuthenticate><LoginTop /></NeedAuthenticate>} />
      <Route path='profileEdit' element={<NeedAuthenticate><ProfileEdit /></NeedAuthenticate>} />
      <Route path='emailEdit' element={<NeedAuthenticate><EmailEdit /></NeedAuthenticate>} />
      <Route path='emailVerify' element={<NeedAuthenticate><EmailVerify /></NeedAuthenticate>} />
      <Route path='phoneNumberEdit' element={<NeedAuthenticate><PhoneNumberEdit /></NeedAuthenticate>} />
      <Route path='phoneNumberVerify' element={<NeedAuthenticate><PhoneNumberVerify /></NeedAuthenticate>} />
      <Route path="signin" element={<SignIn />} />
      <Route path="login" element={<Authenticator services={services} components={AuthenticatorComponents} formFields={formFields} signUpAttributes={['phone_number']} UserNameAttributes="email" />} />
      <Route path="productDetail/:productId" element={<ProductDetailPage />} />
      <Route path="productList" element={<ProductListPage />} />
      <Route path="search" element={<SearchResultListPage />} />
      <Route path="roulette/:productId" element={<NeedAuthenticate><RoulettePage /></NeedAuthenticate>} />
      <Route path="ticket" element={<NeedAuthenticate><TicketPurchasePage /></NeedAuthenticate>} />
      <Route path="faq" element={<FAQ />} />
      <Route path="privacy_notice" element={<PrivacyNoticePage />} />
      <Route path="contacts" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default RootRouter;