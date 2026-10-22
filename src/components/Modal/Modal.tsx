import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  if (!open) return null;
  const DIV_STYLE = {
    width: "500px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    zIndex: 1000,
    border: "1px solid gray",
  };
  const OVERLAY_STYLES = {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0,0,0, .5)",
    zIndex: "1000",
  };
  return createPortal(
    <div style={OVERLAY_STYLES}>
      <div style={DIV_STYLE}>
        <button
          onClick={onClose}
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            border: "none",
            borderRadius: "1.3rem",
            outline: "none",
            boxShadow: "none",
          }}
        >
          Close Modal
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
