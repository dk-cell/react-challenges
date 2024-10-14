import { useState } from "react";
import ShowModal from "./ShowModal";
import { useNavigate } from "react-router-dom";
import "../../css/modal.css";

const HandleModal = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpenModal = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main">
      {!opened ? (
        <button className="btn" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
      ) : (
        <div className="opened">
          <p>You have successfully opened modal!</p>
          <button className="home-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      )}

      {isOpen && (
        <ShowModal
          handleClose={handleClose}
          handleOpenModal={handleOpenModal}
        />
      )}
    </div>
  );
};

export default HandleModal;
