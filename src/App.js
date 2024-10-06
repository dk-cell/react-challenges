import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountDown from "./components/CountDown";
import FaqMain from "./components/Faq/FaqMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/countdown-timer" element={<CountDown />} />
          <Route path="/faq" element={<FaqMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
