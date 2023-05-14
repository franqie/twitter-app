import React from 'react';
import BlueBird from "../icons/BlueBird";
// import TweetIcon from "../icons/TweetIcon";
import HomeIcon from "../icons/HomeIcon";
import BellIcon from "../icons/BellIcon";
import ExploreIcon from "../icons/ExploreIcon";
import MessageIcon from "../icons/MessageIcon";
import ListIcon from "../icons/ListIcon";
import UserIcon from "../icons/UserIcon";
import Bookmark from "../icons/Bookmark";
import TwitterBlueIcon from "../icons/TwitterBlueIcon";
import ThreeDotsHIcon from "../icons/ThreeDotsHIcon";
import DotsHIcon from "../icons/DotsHIcon";
import img from "../images/kdb(1).jpeg";
import NavItem from './NavItem';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-container">
        <div className="logo blue">
          <BlueBird />
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

        <div className="tweet blue">
          {/* <TweetIcon /> */}
          <span>Tweet</span>
        </div>
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
    </div>
  )
}

export default Navigation;