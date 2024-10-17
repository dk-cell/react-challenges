const ManageButton = ({isStart, isPause, setIsStart, handlePause, handleReset, handleResume}) => {
  return (
    <>
      {!isStart && (
        <button className="btn" onClick={() => setIsStart(!isStart)}>
          Start
        </button>
      )}
      {isStart && (
        <>
          {!isPause ? (
            <button className="btn" onClick={handlePause}>
              Pause
            </button>
          ) : (
            <button className="btn" onClick={handleResume}>
              Resume
            </button>
          )}
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </>
      )}
    </>
  );
};

export default ManageButton;
