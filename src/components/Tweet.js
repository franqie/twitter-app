import img from "../assets/images/kdb(7).jpeg";
import ThreeDotsHIcon from "../assets/icons/ThreeDotsHIcon";
import CommentIcon from "../assets/icons/CommentIcon";
import RetweetIcon from "../assets/icons/RetweetIcon";
import LikeIcon from "../assets/icons/LikeIcon";
import ViewsIcon from "../assets/icons/ViewsIcon";
import ShareIcon from "../assets/icons/ShareIcon";

const Tweet = ({imgUrl}) => {
  return (
    <div className="tweet">
      <img src={img} alt="" className="userphoto"/>
      <div className="tweetbody">
        <div className="tweetheader">
          <div className="tweetid">
            <span>Dev.tobs|MD</span>
            <span> @DevTobs • 1h</span>
          </div>
          <button type="button"><ThreeDotsHIcon /></button>
        </div>
        <div className="tweetcontent">
          <p>Lorem ipsum dolor, sit aspernatur, possimus obcaecati,
             veniam minus distinctio est alias eum ipsam accusamus
             ipsa, ipsum cum!</p>
             {imgUrl && <img src={imgUrl} alt="" className="tweetimage"/>}
        </div>
        <div className="tweetfooter">
          <button className="" type="button">
            <span className="tweeticon"><CommentIcon /></span>
            <span className="iconlabel">19</span>
          </button>
          <button className="retweet" type="button">
            <span className="tweeticon"><RetweetIcon /></span>
            <span className="iconlabel">101</span>
          </button>
          <button className="likes" type="button">
            <span className="tweeticon"><LikeIcon /></span>
            <span className="iconlabel">500</span>
          </button>
          <button className="" type="button">
            <span className="tweeticon"><ViewsIcon /></span>
            <span className="iconlabel">24K</span>
          </button>
          <button className="" type="button">
            <span className="tweeticon"><ShareIcon /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tweet;