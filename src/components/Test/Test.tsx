import { useState } from "react";
import Modal from "../Modal/Modal";

function Test() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = () => {
    console.log("Delete action confirmed!");
    setIsOpen(false);
  };
  return (
    <>
      {/* <p>{user.name}</p> */}

      <button onClick={() => setIsVisible(true)}>Show Component</button>
      <br />
      <br />
      <button onClick={() => setIsVisible(false)}>Hide Component</button>
      <br />
      <br />
      {isVisible && <button onClick={() => setIsOpen(true)}>Open Modal</button>}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Test Modal"
        type="test"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem commodi sunt perspiciatis, distinctio culpa harum magni
          aspernatur itaque, nobis tenetur, quidem molestias? Vel, magni vitae
          ipsam necessitatibus optio molestiae fugiat!
        </p>
      </Modal>

      <br />
      <br />
      <br />
      <button onClick={() => setIsOpen(true)}>DELETE</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete this item"
        type="confirmation"
        onConfirm={handleDelete}
      >
        <p>Are you sure you want to delete this item?</p>
      </Modal>
    </>
  );
}

export default Test;
