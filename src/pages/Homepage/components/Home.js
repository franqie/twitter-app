import React from 'react';
import { useState } from 'react';
import img from "../../../assets/images/kdb(1).jpeg";
// import img from "assets/images/kdb(1).jpeg";
import MediaIcon from "../../../assets/icons/MediaIcon";
import GIFIcon from "../../../assets/icons/GIFIcon";
import ScheduleIcon from "../../../assets/icons/ScheduleIcon";
import PollIcon from "../../../assets/icons/PollIcon";
import EmojiIcon from "../../../assets/icons/EmojiIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import GlobeIcon from "../../../assets/icons/GlobeIcon";
import AngleDownIcon from "../../../assets/icons/AngleDownIcon";
import TweetBox from "../../../components/TweetBox";

const Home = () => {
    const [show, setShow] = useState(true);
    const [visible, setVisible] = useState(false);
  return (
    <div className="home">
        <div className="home-header">
            <h2 className="page-title">Home</h2>
            <div className="fyf">
                <button onClick={()=>setShow(true)} className="fy-btn" type="button">
                    <span className={`${show && "active"}`}>For you</span>
                </button>
                <button onClick={()=>setShow(false)} className="f-btn" type="button">
                    <span className={`${!show && "active"}`}>Following</span>
                </button>
            </div>
        </div>
        <div className="tweetfieldbox">
            <img src={img} alt="profile" />
            <div className="tweetfield">
                <div className="tweetinput">
                    <button className={`${visible ? "btn-top visible" : "btn-top"}`} type="button">Everyone<AngleDownIcon /></button>
                    <form>
                        <input
                            onFocus={()=>setVisible(true)}
                            onBlur={()=>setVisible(false)}
                            type="text"
                            placeholder="What's happening?!"
                        />
                    </form>
                    <button className={`${visible ? "btn-bottom visible" : "btn-bottom"}`} type="button"><GlobeIcon />Everyone can reply</button>
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
            <>
              <h4>Following</h4>
            </>
        }
    </div>
  )
}

export default Home;