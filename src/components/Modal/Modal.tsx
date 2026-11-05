import { createPortal } from "react-dom";
import "./Modal.css";
import { useEffect } from "react";
const Modal = ({ isOpen, onClose, children, title, type, onConfirm }) => {
  const modalRoot = document.getElementById("modal-root");
  // useEffect code below allow escape to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // code below disable background scrolling
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  if (!modalRoot) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>{title}</h1>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
