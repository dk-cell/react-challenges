import "./progressbar.css";
const ProgressBar = ({ progress, color }) => {

  const styleSheet = {
    backgroundColor: color || "lightgray",
    borderRadius: "1rem",
    fontSize: "1rem",
    height: "1.5rem",
    width: `${progress}%`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className="inner-container">
      <div style={styleSheet}>{`${progress}%`}</div>
    </div>
  );
};

export default ProgressBar;
