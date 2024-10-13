import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountDown from "./components/CountDown";
import FaqMain from "./components/Faq/FaqMain";
import HandleModal from "./components/custom-modal/HandleModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/countdown-timer" element={<CountDown />} />
          <Route path="/faq" element={<FaqMain />} />
          <Route path="/custom-modal" element={<HandleModal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
