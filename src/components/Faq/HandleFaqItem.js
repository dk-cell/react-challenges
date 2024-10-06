import { useState } from "react";
import "../../css/common.css";
import "../../css/Faq.css";
const HandleFaqItem = ({ faqitem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div className="que">
          <button
            className={`arrow-btn ${isOpen ? "arrow-btn-rotate" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            >
          </button>
          <p onClick={() => setIsOpen(!isOpen)}>{faqitem.question}</p>
        </div>
        {isOpen && <p className="answer">{faqitem.answer}</p>}
      </div>
    </>
  );
};

export default HandleFaqItem;
