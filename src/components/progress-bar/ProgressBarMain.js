import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

const ProgressBarMain = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress((p) => p + 1);
      }
    }, 30);
    return () => {
      clearInterval(intervalId);
    };
  }, [progress]);
  return (
    <div className="main-container-p">
      <ProgressBar progress={progress} color={"lightgreen"} />
      <ProgressBar progress={70} color={"red"} />
      <ProgressBar progress={82} color={"blue"} />
      <ProgressBar progress={progress} color={"green"} />

      <button onClick={() => navigate("/")} className="home-btn">
        Back to Home
      </button>
    </div>
  );
};

export default ProgressBarMain;
