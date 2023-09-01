import img from "../assets/images/kdb(3).jpeg";

const WhoToFollow = () => {
  return (
    <div className="whotofollow">
        <img src={img} alt="" />
        <div className="wtf-details">
            <div className="wtf-text">
                <span className="wtf-name">SoftAmplify Agency</span>
                <span className="wtf-username">@softamplify</span>
            </div>
            <button>Follow</button>
        </div>
    </div>
  )
}

export default WhoToFollow