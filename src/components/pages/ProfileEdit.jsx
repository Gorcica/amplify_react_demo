import React from 'react';

import Header from '../modules/Header';
import StickyFooter from '../modules/Footer';
import ProfileEditForm from '../modules/profileEditPage/ProfileEditForm';

const ProfileEdit = () => (
  <div>
    <Header />
    <ProfileEditForm />
    <StickyFooter />
  </div>
);

export default ProfileEdit;