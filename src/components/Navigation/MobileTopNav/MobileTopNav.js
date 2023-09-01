import React from 'react';
import { ProfileMobile } from '../../ProfileMobile/ProfileMobile';
import TwitterX from '../../../assets/icons/TwitterX';

export const MobileTopNav = () => {
  return (
    <nav className='mobile-header'>
      <ProfileMobile />
      <div className='logo'><TwitterX /></div>
    </nav>
  )
};
