import { Routes, Route } from 'react-router-dom';

import ContactPage from '../components/pages/ContactPage';
import FAQ from '../components/pages/FAQ';
import SignIn from '../components/pages/Signin';
import NotFound from '../components/pages/NotFound';
import LoginTop from '../components/pages/LoginTop';
import ProductDetailPage from '../components/pages/ProductDetailPage';
import PrivacyNoticePage from '../components/pages/PrivacyNoticePage';
import RoulettePage from '../components/pages/RoulettePage';
import ServiceTop from '../components/pages/ServiceTop';
import Login from '../components/pages/Login';
import ProductListPage from '../components/pages/ProductListPage';
import ProfileEdit from '../components/pages/ProfileEdit';
import TicketPurchasePage from '../components/pages/TicketPurchasePage';

const WithoutAuthRouter = () => {
    console.log("test");
    return (
        <Routes>
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
        </Routes>
        )
};

export default WithoutAuthRouter;