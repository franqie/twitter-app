import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import "./styles/css/style.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navigation />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
