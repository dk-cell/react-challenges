import { useEffect, useRef, useState } from "react";

import "./otp.css";
import "../../css/common.css";
import { useNavigate } from "react-router-dom";
const Otp = () => {
  const emptyInput = ["", "", "", "", "", ""];
  const [inputs, setInputs] = useState(emptyInput);
  const [missing, setMissing] = useState(emptyInput);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const navigate = useNavigate();

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleChange = (e, i) => {
    console.log("hello", e.target.value, i);
    const val = e.target.value;
    if (!Number(val)) return;

    if (i < inputs.length - 1) refs[i + 1].current.focus();

    const tempInputs = [...inputs];
    tempInputs[i] = val;
    setInputs(tempInputs);
    // console.log(inputs);
  };

  const handleErase = (e, i) => {
    // console.log(e.key === 'Backspace')
    if (e.key === "Backspace") {
      if (i > 0) refs[i - 1].current.focus();
      const tempInputs = [...inputs];
      tempInputs[i] = "";
      setInputs(tempInputs);
    }
  };

  const handlePaste = (e, i) => {
    const data = e.clipboardData.getData("text");
    if (!Number(data) || data.length != inputs.length) return;

    const pasteData = data.split("");
    setInputs(pasteData);

    refs[inputs.length - 1].current.focus();
    console.log(inputs);
  };
  
  const handleSubmit = () => {
    console.log("Input", inputs);
    const missed = inputs
      .map((item, i) => {
        if (item === "") return i;
      })
      .filter((item) => item || item === 0);

    console.log("==>", missed);

    setMissing(missed);

    console.log("mishing", missing);

    if (missed.length) return;
    const code = inputs.join("");
    if (code === "123456") alert("Correct");
    else alert("incorrect!");
  };
  return (
    <>
      <div className="otp-container">
        <h1>Otp Input Box</h1>
        <div className="input-box">
          {emptyInput.map((item, i) => {
            return (
              <>
                <input
                  ref={refs[i]}
                  type="text"
                  maxLength={1}
                  value={inputs[i]}
                  onChange={(e) => handleChange(e, i)}
                  className={`input-otp ${missing.includes(i)} ? "error" : ""`}
                  onKeyDown={(e) => handleErase(e, i)}
                  onPaste={(e) => handlePaste(e, i)}
                />
              </>
            );
          })}
        </div>
        <p style={{fontSize:".7rem"}}>Correct otp is 123456</p>
        <button className="btn" onClick={handleSubmit}>
          submit
        </button>
        <div style={{ width: "10rem" }}>
          <button className="home-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Otp;
