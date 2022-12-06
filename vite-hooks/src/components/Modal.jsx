import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <label
      className="w-48 h-48 bg-white rounded-md shadow-xl"
      onClick={onClose}
    >
      {children}
      <div className="flex justify-center">
        <button className="w-20 h-10 text-white" onClick={onClose}>
          Close Popup!
        </button>
      </div>
    </label>
  );
};

export default Modal;
