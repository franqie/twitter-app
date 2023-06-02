import React from 'react';
import { useState } from 'react';
import img from "../images/kdb(1).jpeg";
import MediaIcon from "../icons/MediaIcon";
import GIFIcon from "../icons/GIFIcon";
import ScheduleIcon from "../icons/ScheduleIcon";
import PollIcon from "../icons/PollIcon";
import EmojiIcon from "../icons/EmojiIcon";
import LocationIcon from "../icons/LocationIcon";
import GlobeIcon from "../icons/GlobeIcon";
import AngleDownIcon from "../icons/AngleDownIcon";
import TweetBox from "./TweetBox";

const Home = () => {
    const [show, setShow] = useState(true);
  return (
    <div className="home">
        <div className="home-header">
            <h2>Home</h2>
            <div className="fyf">
                <button onClick={()=>setShow(true)} className="fy-btn" type="button">
                    <span className={show && "active"}>For you</span>
                </button>
                <button onClick={()=>setShow(false)} className="f-btn" type="button">
                    <span className={!show && "active"}>Following</span>
                </button>
            </div>
        </div>
        <div className="tweetfieldbox">
            <img src={img} alt="" />
            <div className="tweetfield">
                <div className="tweetinput">
                    <button className="btn-top" type="button">Everyone<AngleDownIcon /></button>
                    <form>
                        <input type="text" placeholder="What's happening?!"/>
                    </form>
                    <button className="btn-bottom" type="button"><GlobeIcon />Everyone can reply</button>
                </div>
                <div className="tweetctrl">
                    <div className="iconrow">
                        <button className="tweeticon"><MediaIcon /></button>
                        <button className="tweeticon"><GIFIcon /></button>
                        <button className="tweeticon"><PollIcon /></button>
                        <button className="tweeticon"><EmojiIcon /></button>
                        <button className="tweeticon"><ScheduleIcon /></button>
                        <button disabled className="tweeticon"><LocationIcon /></button>
                    </div>
                    <button disabled className="tweetbtn" type="button">Tweet</button>
                </div>
            </div>
        </div>
        {show ? 
            <TweetBox />
            :
            <div className="">
                <h4>Following</h4>
            </div>
            }
    </div>
  )
}

export default Home;