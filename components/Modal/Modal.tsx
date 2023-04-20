import { useAppDispatch, useAppSelector } from "./../../hooks/hooks";
import { closeModal } from "./ModalSlice";
import React from "react";

const Modal = () => {
  const isOpen = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  console.log(isOpen);

  return (
    <React.Fragment>
      {isOpen ? (
        <div className="modal-content">
          <button className="modal-close" onClick={handleCloseModal}>
            Close
          </button>
          <h2>Modal content goes here</h2>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
