import { useState } from "react";
import { defaultFormData } from "./Field";
import "../../css/form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    const tempFormData = { ...formData };

    console.log(key, value, formData);

    tempFormData[key].value = value;

    // console.log(key, tempFormData[key]);
    setFormData(tempFormData);
    validateForm();
  };

  const setError = () => {
    const tempFormData = { ...formData };

    Object.keys(tempFormData).map((key) => {
      const obj = tempFormData[key];
      obj.isError = !obj.value ? true : false;
    });
    setFormData(tempFormData);
  };

  const handleSubmit = (e) => {
    // console.log(formData);
    e.preventDefault();
    validateForm();
    const hasEmptyFields = Object.keys(formData).some(
      (key) => !formData[key].value
    );
    if (hasEmptyFields) {
      setError();
      //   alert("Please fill form details!");
      return;
    }

    alert("Form submitted Successfully!");
  };

  const checkPassword = () => {
    const tempFormData = { ...formData };
    const password = tempFormData["password"];
    const confirmPassword = tempFormData["confirmPassword"];
    // console.log("hehee",password, confirmPassword, typeof password, typeof confirmPassword)
    if (password.value !== "" && password.value !== confirmPassword.value)
      setIsPasswordMatch(false);
    else setIsPasswordMatch(true);
  };

  const validateForm = () => {
    setError();
    checkPassword();
  };

  return (
    <div className="form-container-main">
      {Object.keys(formData).map((key) => {
        const { id, label, type, placeholder, value, isError, errorMsg } =
          formData[key];
        return (
          <>
            <div className="field">
              <p>{label}</p>
              <p>
                <input
                  id={id}
                  placeholder={placeholder}
                  value={value}
                  type={type}
                  onChange={handleChange}
                  className={isError && "error-border"}
                />
              </p>
              {isError && <span>{errorMsg}</span>}
              {key === "confirmPassword" && !isPasswordMatch && (
                <span>Password is not matched!</span>
              )}
            </div>
          </>
        );
      })}
      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
      <div style={{ width: "10rem" }}>
        <button className="home-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Form;
