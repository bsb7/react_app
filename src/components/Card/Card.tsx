import { useState } from "react";
import Modal from "../Modal/Modal";
function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1,
    margin: "2rem 0",
  };

  const OTHER_CONTENT_STYLES = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "red",
    padding: "10px",
  };
  return (
    <>
      <div
        style={BUTTON_WRAPPER_STYLES}
        onClick={() => console.log("this is being clicked!")}
      >
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "1rem",
            border: "none",
            borderRadius: "1.3rem",
            outline: "none",
            boxShadow: "none",
          }}
        >
          Open Modal
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>OTHER CONTENT</div>
    </>
  );
}

export default Card;
