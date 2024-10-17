import "./CountDown.css";
const TakeInput = ({handleChange}) => {
  return (
    <>
      <div className="input">
        <input
          name="hour"
          placeholder="Hour"
          className="input-value"
          onChange={handleChange}
        />
        <input
          name="minute"
          placeholder="Minute"
          className="input-value"
          onChange={handleChange}
        />
        <input
          name="second"
          placeholder="Second"
          className="input-value"
          onChange={handleChange}
        />
      </div>
    </>
  );
};


export default TakeInput
