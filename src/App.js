import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountDown from "./components/CountDown";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/countdown-timer" element={<CountDown />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
