import "../../css/modal.css";
const ShowModal = ({ handleClose,handleOpenModal }) => {
  const handleOutSideClick = (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal") {
      handleClose();
      handleOpenModal();
    }
  };

  const handleCloseModal = () => {
    handleClose();
    handleOpenModal();
  };

  return (
    <div className="modal" onClick={handleOutSideClick}>
      <div className="modal-content">
        <button className="btn-close" onClick={handleCloseModal}>
          X
        </button>
        <div>This is the sample Modal dialog, Thanks for you visit!</div>
        <div className="make-center">
          <button className="btn" onClick={handleCloseModal}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
