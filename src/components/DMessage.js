import ThreeDotsHIcon from "../icons/ThreeDotsHIcon";
import img from "../images/kdb(4).jpeg";

const DMessage = ({name, username}) => {
    return ( 
        <div className="dmessage">
            <div className="picture">
                <img src={img} alt="" />
            </div>
            <div className="message-body">
                <div className="message-container">
                    <div className="message-head">
                        <span className="name">{name}</span>
                        {/* <span className="handle">@username</span>
                        {' '}
                        •
                        {' '}
                        <span className="date">May 1, 2023</span> */}
                        <span className="username">@{username} </span>
                        <span>• May 1, 2023</span>
                    <button type="button"><ThreeDotsHIcon /></button>
                    </div>
                    <div className="message-text">
                        <p>Lorem ipsum, dolor sit amet 
                            consectetur adipisicing elit. 
                            Inventore, libero eius! Fugit 
                            labore maiores dolorum! Provident 
                            maxime consequatur ut, alias illum 
                            asperiores optio aspernatur, fugit 
                            veritatis!
                        </p>
                    </div>
                </div>
                {/* <button type="button"><ThreeDotsHIcon /></button> */}
            </div>
        </div>
     );
}
 
export default DMessage;