import { FaqQuestions } from "../../data/Faq/Faq";
import "../../css/CountDown.css";
import "../../css/common.css";
import "../../css/Faq.css";
import { useNavigate } from "react-router-dom";
import HandleFaqItem from "./HandleFaqItem";
const FaqMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="main-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="container">
          <p className="title">Frequently Asked Questions</p>
          {FaqQuestions.map((item) => (
            <div key={item.id} className="faq-card">
              <HandleFaqItem faqitem={item} />
            </div>
          ))}

          <button className="home-btn " onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default FaqMain;
