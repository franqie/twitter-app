import React from 'react';
import TweetIcon from "../../../assets/icons/TweetIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import BellIcon from "../../../assets/icons/BellIcon";
import ExploreIcon from "../../../assets/icons/ExploreIcon";
import MessageIcon from "../../../assets/icons/MessageIcon";
import ListIcon from "../../../assets/icons/ListIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import Bookmark from "../../../assets/icons/Bookmark";
import TwitterBlueIcon from "../../../assets/icons/TwitterBlueIcon";
import ThreeDotsHIcon from "../../../assets/icons/ThreeDotsHIcon";
import DotsHIcon from "../../../assets/icons/DotsHIcon";
import img from "../../../assets/images/kdb(1).jpeg";
import NavItem from '../NavItem';
import TwitterX from '../../../assets/icons/TwitterX';
import { ProfileMobile } from '../../ProfileMobile/ProfileMobile';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="main">
        <div className="sidebar-container">
          <div className="sidebar-box">
            <div className="logo blue">
              <TwitterX />
            </div>

            <div className="nav-links">
              <NavItem  icon={<HomeIcon />} title="Home"/>
              <NavItem  icon={<ExploreIcon />} title="Explore"/>
              <NavItem  icon={<BellIcon />} title="Notification"/>
              <NavItem  icon={<MessageIcon />} title="Messages"/>
              <NavItem  icon={<ListIcon />} title="Lists"/>
              <NavItem  icon={<Bookmark />} title="Bookmarks"/>
              <NavItem  icon={<TwitterBlueIcon />} title="Twitter Blue"/>
              <NavItem  icon={<UserIcon />} title="Profile"/>
              <NavItem  icon={<DotsHIcon />} title="More"/>
            </div>

            <button className="tweet-btn">
              <TweetIcon />
              <span>Post</span>
            </button>
          </div>

          <div className="profile">
            <div className="profile-box">
              <img src={img} alt="" />
              <div className="profile-id">
                <span className="name">My Name</span>
                <span className="id">@myId</span>
              </div>
            </div>
            <div className="more-btn">
              <ThreeDotsHIcon />
            </div>
          </div>

          <ProfileMobile />
        </div>
      </div>
    </div>
  )
}