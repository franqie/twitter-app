import React, { useState } from 'react';
import MessageIcon from "../assets/icons/MessageIcon";
import DoubleArrowUpIcon from "../assets/icons/DoubleArrowUpIcon";
import DoubleArrowDownIcon from "../assets/icons/DoubleArrowDownIcon";
import DMessage from './DMessage';
// import MessageIcon from "../icons/MessageIcon";

export const Messages = () => {
    const [showMessage, setShowMessage] = useState(false);
  return (
    <div className={`${showMessage ? "messages show" : "messages"}`}>
            <div className="messages-header">
                <div className="messages-left">
                    <h2>Messages</h2>
                </div>
                <div className="messages-right">
                    <button className="message-btn" type="button">
                        <MessageIcon />
                    </button>
                    <button className="message-btn" onClick={()=>setShowMessage(!showMessage)} type="button">
                        {showMessage ? <DoubleArrowDownIcon /> : <DoubleArrowUpIcon />}
                    </button>
                </div>
            </div>
            <div className="messages-list">
                <DMessage
                    name="Kevin De Bruyne"
                    username="KDB_17"
                />
                <DMessage 
                    name="Fabio Carlvaho"
                    username="callyBaller10"
                />
                <DMessage 
                    name="David Becks"
                    username="Davidbeckham"
                />
                <DMessage 
                    name="David Becks"
                    username="Davidbeckham"
                />
                <DMessage 
                    name="David Becks"
                    username="Davidbeckham"
                />
                <DMessage 
                    name="David Becks"
                    username="Davidbeckham"
                />
                <DMessage 
                    name="David Becks"
                    username="Davidbeckham"
                />
                <DMessage 
                    name="David Becks"
                    username="Davidbeckham"
                />
            </div>
    </div>
  )
}