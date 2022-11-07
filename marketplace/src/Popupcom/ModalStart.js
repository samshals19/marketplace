import React from "react";
import styles from "./modalstyleAirdropper.css";

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal">
        <button onClick={onClose} className="btn-close">
          close <img src="/img/close-circle.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
