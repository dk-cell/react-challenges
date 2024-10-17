import { useEffect, useState } from "react";
import "./multistepform.css";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../../data/multistepform";

const MultiStempForm = () => {
    const navigate = useNavigate()
  const [index, setIndex] = useState(0);
  const [formField, setFormField] = useState(data);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formDetails, setFormDetails] = useState({
    Name: "",
    Email: "",
    DOB: "",
    Password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id, index);
    if (index == formField.length - 1) {
      setFormSubmitted(true);
      console.log("form submitted");
    } else {
      setIndex((p) => p + 1);
      console.log("else");
    }
  };
  const handleBack = () => {
    console.log("Here");
    setIndex((p) => p - 1);
  };

  const handleInputChange = (e) => {
    const tempDetails = { ...formDetails };
    tempDetails[e.target.id] = e.target.value;
    setFormDetails(tempDetails);
    console.log(formDetails);
  };
  return (
    <div className="parent-container">
      {!formSubmitted ? (
        <form className="form-container" onSubmit={handleSubmit}>
          {index > 0 && (
            <Link className="btn back" onClick={handleBack}>
              Back
            </Link>
          )}
          <input
          required
            className="input"
            id={formField[index].id}
            placeholder={formField[index].placeholder}
            value={formDetails[formField[index].id]}
            type={formField[index].type}
            onChange={handleInputChange}
          />

          <button className="btn next">{formField[index].buttonName}</button>
        </form>
      ) : (
        <>
          <h1>Success !</h1>
          <hr />
          <span>Name : {formDetails?.Name}</span>
          <br />
          <span>Email : {formDetails?.Email}</span>
          <br />
          <span>dob : {formDetails?.DOB}</span>
          <br />
          <span>password : {formDetails?.Password}</span>
          <br />

          <button className="home-btn" style={{width:"50%"}} onClick={()=>navigate("/")}>Back to Home</button>
        </>
      )}
    </div>
  );
};

export default MultiStempForm;
