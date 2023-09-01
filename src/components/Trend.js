import ThreeDotsHIcon from "../assets/icons/ThreeDotsHIcon";

const Trend = () => {
    return ( 
        <div className="trend">
            <div className="trendtop">
                <p>Trending in Nigeria</p>
                <ThreeDotsHIcon />
            </div>
            <p className="trendtopic">President Bola Tinubu</p>
            <p className="tweetcount">45.6K Tweets</p>
        </div>
     );
}
 
export default Trend;