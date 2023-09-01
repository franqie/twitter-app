import React from 'react';
// import Messages from '../components/Messages';
import RightBox from '../../components/RightBox';
import Home from './components/Home';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-container">
        <Home />
        <RightBox />
      </div>
      {/* <Messages /> */}
    </div>
  )
}

export default Homepage;