import React from 'react';
import HomeIcon from "../../../assets/icons/HomeIcon";
import SearchIcon from '../../../assets/icons/SearchIcon';
import BellIcon from '../../../assets/icons/BellIcon';
import MessageIcon from '../../../assets/icons/MessageIcon';

export const MobileBottomNav = () => {
  return (
    <nav className='bottom-nav'>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <MessageIcon />
    </nav>
  )
};
