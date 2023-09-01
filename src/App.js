import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "./styles/css/style.css";
import AppLayout from "./layouts/AppLayout";
import { MobileTopNav } from "./components/Navigation/MobileTopNav/MobileTopNav";
import { MobileBottomNav } from "./components/Navigation/MobileBottomNav/MobileBottomNav";
import { TweetButton } from "./components/tweetButton/TweetButton";
import { Messages } from "./components/Messages";

function App() {
  return (
    <div className="app">
      <MobileTopNav />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />}/>
        </Route>
      </Routes>      
      <MobileBottomNav />
      <TweetButton />
      <Messages />
    </div>
  );
}

export default App;
