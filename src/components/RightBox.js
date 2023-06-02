import SearchIcon from "../icons/SearchIcon";
// import img from "../images/kdb(3).jpeg";
import Trend from "./Trend";
import WhoToFollow from "./WhoToFollow";

const RightBox = () => {
    return ( 
        <div className="rightbox">
            <form>                
                <div className="searchbox">
                    <span className="searchIcon">
                        <SearchIcon/>
                    </span>
                    <input type="text" placeholder="Search Twitter"/>
                </div>
            </form>
            <div className="tb-tf-rf">                
                <div className="trendbox">
                    <h2>Trends for you</h2>
                    <div className="trend-list">
                        <Trend />
                        <Trend />
                        <Trend />
                        <Trend />
                        <Trend />
                    </div>
                    <button className="showmore-btn" type="button">Show more</button>
                </div>

                <div className="followbox">
                    <h2>Who to follow</h2>
                    <WhoToFollow />
                    <WhoToFollow />
                    <WhoToFollow />
                    <button className="showmore-btn" type="button">Show more</button>
                </div>

                <div className="right-footer">
                    <div>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Cookie Policy</span>
                    </div>
                    <div>
                        <span>Accessibility</span>
                        <span>Ads info</span>
                        <span>More ...</span>
                        <span>© 2023 X Corp.</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default RightBox;