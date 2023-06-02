import React from 'react';
// import Messages from '../components/Messages';
import RightBox from '../components/RightBox';
import Home from '../components/Home';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* <div>
        <h1>Home Page</h1>
      </div> */}
      <Home />
      <RightBox />
      {/* <Messages /> */}
    </div>
  )
}

export default Homepage;