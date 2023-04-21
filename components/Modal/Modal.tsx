import { useAppDispatch, useAppSelector } from "./../../hooks/hooks";
import { closeModal } from "./ModalSlice";
import React, { ReactElement, ReactNode } from "react";

interface IModalProps {
  children?: ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  const isOpen = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
