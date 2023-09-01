import Tweet from "./Tweet";
import img from "../assets/images/kdb(3).jpeg";

const TweetBox = () => {
  return (
    <div className="tweetbox">
        <Tweet />
        <Tweet imgUrl={img}/>
        <Tweet />
    </div>
  )
}

export default TweetBox;
