import { useEffect, useState } from "react";
import TakeInput from "./TakeInput";
import ManageButton from "./ManageButton";
import { useNavigate } from "react-router-dom";
import "../css/CountDown.css";
import "../css/common.css";
const CountDown = () => {
  const navigate = useNavigate();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [countDownTimerId, setCountDownTimerId] = useState(0);

  const reset = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
  };
  const handleResume = () => {
    setIsPause(false);
    runTimer(hour, minute, second, countDownTimerId);
  };
  const handlePause = () => {
    setIsPause(true);
    clearInterval(countDownTimerId);
  };
  const handleReset = () => {
    setIsStart(false);
    reset();
  };
  const handleChange = (e) => {
    // console.log(countDownTime);
    console.log(e.target.value);
    if (e.target.name === "hour") setHour(parseInt(e.target.value));
    if (e.target.name === "minute") setMinute(parseInt(e.target.value));
    if (e.target.name === "second") setSecond(parseInt(e.target.value));

    console.log(hour, minute, second);
  };

  const runTimer = (hr, min, sec, timerId) => {
    if (sec > 0) setSecond((p) => p - 1);
    else if (sec === 0 && min > 0) {
      setSecond(59);
      setMinute((p) => p - 1);
    } else if (min === 0) {
      setHour((p) => p - 1);
      setMinute(59);
      setSecond(59);
    }

    console.log("===>", second);

    if (second === 0 && minute === 0 && hour === 0) {
      reset();
      clearInterval(timerId);
      alert("CountDown Finished!");
      setIsStart(false);
    }
  };

  useEffect(() => {
    let timerId;
    if (isStart) {
      timerId = setInterval(() => {
        runTimer(hour, minute, second, timerId);
      }, 1000);

      setCountDownTimerId(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isStart, hour, minute, second]);
  return (
    <>
      <div className="main">
        <div className="container">
          <p className="title">CountDown Timer</p>
          {!isStart && <TakeInput handleChange={handleChange} />}
          {isStart && (
            <div className="input">
              {`${hour < 10 ? "0" + hour : hour} : ${
                minute < 10 ? "0" + minute : minute
              } : ${second < 10 ? "0" + second : second}`}
            </div>
          )}
          <div className="button">
            <ManageButton
              isPause={isPause}
              isStart={isStart}
              setIsStart={setIsStart}
              handlePause={handlePause}
              handleReset={handleReset}
              handleResume={handleResume}
            />
          </div>
          <div className="">
            <button className="home-btn" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
