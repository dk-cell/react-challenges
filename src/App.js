import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountDown from "./components/countdown/CountDown"
import FaqMain from "./components/Faq/FaqMain";
import HandleModal from "./components/custom-modal/HandleModal";
import Form from "./components/form/Form";
import Otp from "./components/otp/Otp";
import MultiStempForm from "./components/multistep-form/MultiStepForm";

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
          <Route path="/form" element={<Form />} />
          <Route path="/otp-input" element={<Otp />} />
          <Route path="/multi-step-form" element={<MultiStempForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
